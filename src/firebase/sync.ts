import { doc, getDoc, setDoc } from 'firebase/firestore'
import {
  getAllArticleProgress,
  replaceAllArticleProgress,
  type ArticleProgress,
  type ProgressMap,
} from '../utils/articleProgress'
import { db } from './app'

function userDoc(uid: string) {
  return doc(db, 'users', uid)
}

function mergeMaps(local: ProgressMap, remote: ProgressMap): ProgressMap {
  const keys = new Set([...Object.keys(local), ...Object.keys(remote)])
  const out: ProgressMap = {}
  for (const key of keys) {
    const a = local[key]
    const b = remote[key]
    if (!a) out[key] = b
    else if (!b) out[key] = a
    else out[key] = (a.updatedAt ?? 0) >= (b.updatedAt ?? 0) ? a : b
  }
  return out
}

function normalizeRemote(raw: unknown): ProgressMap {
  if (!raw || typeof raw !== 'object') return {}
  const out: ProgressMap = {}
  for (const [ref, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!value || typeof value !== 'object') continue
    const v = value as Partial<ArticleProgress>
    out[ref] = {
      note: typeof v.note === 'string' ? v.note : '',
      tag: v.tag === 'remembered' || v.tag === 'forgotten' || v.tag === 'rephrase' ? v.tag : null,
      updatedAt: typeof v.updatedAt === 'number' ? v.updatedAt : 0,
    }
    if (!out[ref].note.trim() && !out[ref].tag) delete out[ref]
  }
  return out
}

/** Pull once, merge with local by updatedAt, write local; push if local won any fields. */
export async function pullProgressOnce(uid: string): Promise<void> {
  const snap = await getDoc(userDoc(uid))
  const remote = normalizeRemote(snap.exists() ? snap.data()?.articles : {})
  const local = getAllArticleProgress()
  const merged = mergeMaps(local, remote)
  replaceAllArticleProgress(merged)

  const localNewer = Object.keys(merged).some((k) => {
    const m = merged[k]
    const r = remote[k]
    return !r || (m.updatedAt ?? 0) > (r.updatedAt ?? 0)
  })
  const remoteMissing = Object.keys(merged).length > Object.keys(remote).length
  if (localNewer || remoteMissing || (Object.keys(local).length > 0 && !snap.exists())) {
    await pushProgress(uid, merged)
  }
}

export async function pushProgress(uid: string, map = getAllArticleProgress()): Promise<void> {
  await setDoc(
    userDoc(uid),
    {
      articles: map,
      updatedAt: Date.now(),
    },
    { merge: true },
  )
}

let pushTimer: number | null = null
let pendingUid: string | null = null

/** Debounced cloud write after local edits (note/tag). */
export function schedulePushProgress(uid: string) {
  pendingUid = uid
  if (pushTimer != null) window.clearTimeout(pushTimer)
  pushTimer = window.setTimeout(() => {
    pushTimer = null
    const id = pendingUid
    pendingUid = null
    if (id) void pushProgress(id).catch((err) => console.error('[firebase] push failed', err))
  }, 600)
}

export function cancelScheduledPush() {
  if (pushTimer != null) {
    window.clearTimeout(pushTimer)
    pushTimer = null
  }
  pendingUid = null
}
