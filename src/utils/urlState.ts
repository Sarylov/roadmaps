import type { Priority } from '../types'

const OPEN_PARAM = 'open'
const PRIORITY_PARAM = 'priority'

export const ALL_PRIORITIES: Priority[] = ['CORE', 'KILLER', 'OPT']

function writeParams(openIds: string[], priorities: Priority[]) {
  const url = new URL(window.location.href)

  if (openIds.length === 0) url.searchParams.delete(OPEN_PARAM)
  else url.searchParams.set(OPEN_PARAM, openIds.join(','))

  if (priorities.length === ALL_PRIORITIES.length) {
    url.searchParams.delete(PRIORITY_PARAM)
  } else if (priorities.length === 0) {
    url.searchParams.set(PRIORITY_PARAM, 'none')
  } else {
    url.searchParams.set(PRIORITY_PARAM, priorities.join(','))
  }

  window.history.replaceState(null, '', url)
}

export function readOpenFromUrl(validIds: string[]): string[] | null {
  const raw = new URLSearchParams(window.location.search).get(OPEN_PARAM)
  if (raw === null) return null

  return raw
    .split(',')
    .map((s) => s.trim())
    .filter((id) => validIds.includes(id))
}

export function readPrioritiesFromUrl(): Priority[] | null {
  const raw = new URLSearchParams(window.location.search).get(PRIORITY_PARAM)
  if (raw === null) return null
  if (raw === 'none') return []

  const allowed = new Set<string>(ALL_PRIORITIES)
  return raw
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter((p): p is Priority => allowed.has(p))
}

export function writeUrlState(openIds: string[], priorities: Priority[]) {
  writeParams(openIds, priorities)
}
