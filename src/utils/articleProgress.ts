export type ArticleTag = 'remembered' | 'forgotten' | 'rephrase'

export const ARTICLE_TAGS: Array<{ id: ArticleTag; label: string }> = [
  { id: 'remembered', label: 'Запомнил' },
  { id: 'forgotten', label: 'Не запомнил' },
  { id: 'rephrase', label: 'Переформулировать' },
]

export interface ArticleProgress {
  note: string
  tag: ArticleTag | null
  updatedAt: number
}

const STORAGE_KEY = 'roadmap-article-progress'
export const ARTICLE_PROGRESS_EVENT = 'roadmap-article-progress'

export type ProgressMap = Record<string, ArticleProgress>

type CloudHooks = {
  onLocalChange?: () => void
}

const cloudHooks: CloudHooks = {}

/** Register cloud sync callback (e.g. schedule Firestore push). */
export function setArticleProgressCloudHook(onLocalChange?: () => void) {
  cloudHooks.onLocalChange = onLocalChange
}

function readAll(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as ProgressMap
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function writeAll(map: ProgressMap, opts?: { skipCloud?: boolean }) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map))
  window.dispatchEvent(new Event(ARTICLE_PROGRESS_EVENT))
  if (!opts?.skipCloud) cloudHooks.onLocalChange?.()
}

export function getAllArticleProgress(): ProgressMap {
  return readAll()
}

export function replaceAllArticleProgress(map: ProgressMap) {
  writeAll(map, { skipCloud: true })
}

export function getArticleProgress(ref: string): ArticleProgress {
  const entry = readAll()[ref]
  return {
    note: entry?.note ?? '',
    tag: entry?.tag ?? null,
    updatedAt: entry?.updatedAt ?? 0,
  }
}

export function saveArticleProgress(
  ref: string,
  patch: Partial<Pick<ArticleProgress, 'note' | 'tag'>>,
): ArticleProgress {
  const map = readAll()
  const prev = getArticleProgress(ref)
  const next: ArticleProgress = {
    note: patch.note ?? prev.note,
    tag: patch.tag !== undefined ? patch.tag : prev.tag,
    updatedAt: Date.now(),
  }

  if (!next.note.trim() && !next.tag) {
    delete map[ref]
  } else {
    map[ref] = next
  }

  writeAll(map)
  return next
}

export function countRemembered(refs: Iterable<string>): { remembered: number; total: number } {
  const unique = [...new Set(refs)]
  let remembered = 0
  for (const ref of unique) {
    if (getArticleProgress(ref).tag === 'remembered') remembered += 1
  }
  return { remembered, total: unique.length }
}
