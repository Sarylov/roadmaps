import { useCallback, useEffect, useState } from 'react'
import { RoadmapView } from './components/RoadmapView'
import type { Priority, Roadmap, RoadmapMeta } from './types'
import { getPriorityStyle } from './utils/colors'
import {
  ALL_PRIORITIES,
  readOpenFromUrl,
  readPrioritiesFromUrl,
  writeUrlState,
} from './utils/urlState'

interface LoadedRoadmap {
  meta: RoadmapMeta
  data: Roadmap
}

export default function App() {
  const [catalog, setCatalog] = useState<RoadmapMeta[]>([])
  const [loaded, setLoaded] = useState<LoadedRoadmap[]>([])
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set())
  const [priorities, setPriorities] = useState<Set<Priority>>(new Set(ALL_PRIORITIES))
  const [allCollapsed, setAllCollapsed] = useState(false)
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
        setActiveIds(new Set(open))
        setPriorities(new Set(prio))
        writeUrlState(open, prio)
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
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [loading, loaded])

  const syncUrl = useCallback((open: Set<string>, prio: Set<Priority>) => {
    writeUrlState([...open], [...prio])
  }, [])

  const toggleRoadmap = (id: string) => {
    const next = new Set(activeIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setActiveIds(next)
    syncUrl(next, priorities)
  }

  const togglePriority = (priority: Priority) => {
    const next = new Set(priorities)
    if (next.has(priority)) next.delete(priority)
    else next.add(priority)
    setPriorities(next)
    syncUrl(activeIds, next)
  }

  const activeRoadmaps = loaded.filter((r) => activeIds.has(r.meta.id))

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#8a8178]">
        Загрузка...
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 border-b border-[#e8e1da]/bg-[#f7f4f1]/85 backdrop-blur-md">
        <div className="px-4 py-3 flex flex-wrap items-center gap-2">
          {catalog.map((meta) => {
            const isActive = activeIds.has(meta.id)
            return (
              <button
                key={meta.id}
                type="button"
                onClick={() => toggleRoadmap(meta.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#5c534c] text-[#f7f4f1]'
                    : 'bg-white/70 text-[#7a7168] hover:bg-white hover:text-[#5c534c] border border-[#e4ddd5]'
                }`}
              >
                {meta.label}
              </button>
            )
          })}

          <div className="mx-2 h-5 w-px bg-[#e4ddd5] hidden sm:block" />

          {ALL_PRIORITIES.map((priority) => {
            const isOn = priorities.has(priority)
            return (
              <button
                key={priority}
                type="button"
                onClick={() => togglePriority(priority)}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity border border-transparent ${getPriorityStyle(priority)} ${
                  isOn ? 'opacity-100' : 'opacity-35 grayscale'
                }`}
              >
                {priority}
              </button>
            )
          })}

          {activeRoadmaps.length > 0 && (
            <button
              type="button"
              onClick={() => setAllCollapsed((c) => !c)}
              className="ml-auto text-xs text-[#8a8178] hover:text-[#5c534c]"
            >
              {allCollapsed ? 'Развернуть все' : 'Свернуть все'}
            </button>
          )}
        </div>
      </div>

      <main className="w-full px-4 py-8">
        {catalog.length === 0 ? (
          <p className="text-[#8a8178] text-center py-20">
            Положи JSON-файлы в <code className="text-[#5c534c]">public/roadmaps</code>
          </p>
        ) : activeRoadmaps.length === 0 ? (
          <p className="text-[#8a8178] text-center py-20">Выбери roadmap сверху</p>
        ) : priorities.size === 0 ? (
          <p className="text-[#8a8178] text-center py-20">Включи хотя бы один фильтр приоритета</p>
        ) : (
          <div
            className={activeRoadmaps.length > 1 ? 'grid gap-2 items-start' : ''}
            style={
              activeRoadmaps.length > 1
                ? { gridTemplateColumns: `repeat(${activeRoadmaps.length}, minmax(0, 1fr))` }
                : undefined
            }
          >
            {activeRoadmaps.map((r) => (
              <div
                key={r.meta.id}
                className={
                  activeRoadmaps.length > 1
                    ? 'min-w-0 rounded-3xl border border-[#e8e1da] bg-white/45 p-5'
                    : ''
                }
              >
                <RoadmapView
                  roadmap={r.data}
                  forceCollapsed={allCollapsed}
                  compact={activeRoadmaps.length > 1}
                  priorities={priorities}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
