import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import { ItemModal } from './components/ItemModal'
import { RoadmapView } from './components/RoadmapView'
import { useTheme } from './hooks/useTheme'
import type { Priority, Roadmap, RoadmapMeta } from './types'
import { getPriorityStyle } from './utils/colors'
import {
  ALL_PRIORITIES,
  readItemFromUrl,
  readOpenFromUrl,
  readPrioritiesFromUrl,
  writeUrlState,
} from './utils/urlState'

interface LoadedRoadmap {
  meta: RoadmapMeta
  data: Roadmap
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [catalog, setCatalog] = useState<RoadmapMeta[]>([])
  const [loaded, setLoaded] = useState<LoadedRoadmap[]>([])
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set())
  const [priorities, setPriorities] = useState<Set<Priority>>(new Set(ALL_PRIORITIES))
  const [allCollapsed, setAllCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const loadRoadmap = useCallback(async (meta: RoadmapMeta): Promise<LoadedRoadmap | null> => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}roadmaps/${meta.file}`)
      if (!res.ok) return null
      const data: Roadmap = await res.json()
      return { meta, data }
    } catch {
      return null
    }
  }, [])

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}roadmaps/manifest.json`)
        const manifest: RoadmapMeta[] = await res.json()
        setCatalog(manifest)

        const results = await Promise.all(manifest.map(loadRoadmap))
        const valid = results.filter((r): r is LoadedRoadmap => r !== null)
        setLoaded(valid)

        const validIds = valid.map((r) => r.meta.id)
        const open = readOpenFromUrl(validIds) ?? validIds
        const prio = readPrioritiesFromUrl() ?? ALL_PRIORITIES
        const item = readItemFromUrl()
        setActiveIds(new Set(open))
        setPriorities(new Set(prio))
        setActiveItem(item)
        writeUrlState(open, prio, item)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [loadRoadmap])

  useEffect(() => {
    if (loading || loaded.length === 0) return

    const onPopState = () => {
      const validIds = loaded.map((r) => r.meta.id)
      setActiveIds(new Set(readOpenFromUrl(validIds) ?? validIds))
      setPriorities(new Set(readPrioritiesFromUrl() ?? ALL_PRIORITIES))
      setActiveItem(readItemFromUrl())
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [loading, loaded])

  const syncUrl = useCallback(
    (open: Set<string>, prio: Set<Priority>, item: string | null) => {
      writeUrlState([...open], [...prio], item)
    },
    [],
  )

  const toggleRoadmap = (id: string) => {
    const next = new Set(activeIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setActiveIds(next)
    syncUrl(next, priorities, activeItem)
  }

  const togglePriority = (priority: Priority) => {
    const next = new Set(priorities)
    if (next.has(priority)) next.delete(priority)
    else next.add(priority)
    setPriorities(next)
    syncUrl(activeIds, next, activeItem)
  }

  const openItem = (ref: string) => {
    setActiveItem(ref)
    syncUrl(activeIds, priorities, ref)
  }

  const closeItem = () => {
    setActiveItem(null)
    syncUrl(activeIds, priorities, null)
  }

  const activeRoadmaps = loaded.filter((r) => activeIds.has(r.meta.id))

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--fg-muted)]">
        Загрузка...
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-md">
        <div className="px-4 py-3 flex flex-wrap items-center gap-2">
          {catalog.map((meta) => {
            const isActive = activeIds.has(meta.id)
            return (
              <button
                key={meta.id}
                type="button"
                onClick={() => toggleRoadmap(meta.id)}
                className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--bg)]'
                    : 'bg-[var(--surface)] text-[var(--fg-muted)] hover:text-[var(--accent)] border border-[var(--border-strong)]'
                }`}
              >
                {meta.label}
              </button>
            )
          })}

          <div className="mx-2 h-5 w-px bg-[var(--border-strong)] hidden sm:block" />

          {ALL_PRIORITIES.map((priority) => {
            const isOn = priorities.has(priority)
            return (
              <button
                key={priority}
                type="button"
                onClick={() => togglePriority(priority)}
                className={`cursor-pointer px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity border border-transparent ${getPriorityStyle(priority)} ${
                  isOn ? 'opacity-100' : 'opacity-35 grayscale'
                }`}
              >
                {priority}
              </button>
            )
          })}

          <div className="ml-auto flex items-center gap-3">
            {activeRoadmaps.length > 0 && (
              <button
                type="button"
                onClick={() => setAllCollapsed((c) => !c)}
                className="cursor-pointer text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                {allCollapsed ? 'Развернуть все' : 'Свернуть все'}
              </button>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]"
              aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
              title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
            >
              {theme === 'dark' ? 'Светлая' : 'Тёмная'}
            </button>
          </div>
        </div>
      </div>

      <main className="w-full px-4 py-8">
        {catalog.length === 0 ? (
          <p className="text-[var(--fg-muted)] text-center py-20">
            Положи JSON-файлы в <code className="text-[var(--accent)]">public/roadmaps</code>
          </p>
        ) : activeRoadmaps.length === 0 ? (
          <p className="text-[var(--fg-muted)] text-center py-20">Выбери roadmap сверху</p>
        ) : priorities.size === 0 ? (
          <p className="text-[var(--fg-muted)] text-center py-20">
            Включи хотя бы один фильтр приоритета
          </p>
        ) : (
          <div
            className={
              activeRoadmaps.length > 1
                ? 'grid grid-cols-1 gap-2 items-start md:[grid-template-columns:var(--roadmap-cols)]'
                : ''
            }
            style={
              activeRoadmaps.length > 1
                ? ({
                    '--roadmap-cols': `repeat(${activeRoadmaps.length}, minmax(0, 1fr))`,
                  } as CSSProperties)
                : undefined
            }
          >
            {activeRoadmaps.map((r) => (
              <div
                key={r.meta.id}
                className={
                  activeRoadmaps.length > 1
                    ? 'min-w-0 rounded-3xl border border-[var(--border)] bg-[var(--surface-soft)] p-5'
                    : ''
                }
              >
                <RoadmapView
                  roadmap={r.data}
                  forceCollapsed={allCollapsed}
                  compact={activeRoadmaps.length > 1}
                  priorities={priorities}
                  anchorPrefix={r.meta.id}
                  onOpenItem={openItem}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      <ItemModal itemRef={activeItem} onClose={closeItem} />
    </div>
  )
}
