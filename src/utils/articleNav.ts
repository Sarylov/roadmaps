import type { Priority, Roadmap } from '../types'
import { normalizeItem } from '../types'

/** Ordered unique article refs from visible roadmaps (same order as on the page). */
export function collectArticleRefs(
  roadmaps: Roadmap[],
  priorities: Set<Priority>,
): string[] {
  const seen = new Set<string>()
  const refs: string[] = []

  for (const roadmap of roadmaps) {
    for (const level of roadmap.levels) {
      for (const topic of level.topics) {
        if (!priorities.has(topic.priority)) continue
        for (const raw of topic.items) {
          const ref = normalizeItem(raw).ref
          if (!ref || seen.has(ref)) continue
          seen.add(ref)
          refs.push(ref)
        }
      }
    }
  }

  return refs
}

export function getArticleNeighbors(
  refs: string[],
  current: string | null,
): { prev: string | null; next: string | null; index: number; total: number } {
  const total = refs.length
  if (!current) return { prev: null, next: null, index: -1, total }

  const index = refs.indexOf(current)
  if (index === -1) return { prev: null, next: null, index: -1, total }

  return {
    prev: index > 0 ? refs[index - 1]! : null,
    next: index < total - 1 ? refs[index + 1]! : null,
    index,
    total,
  }
}
