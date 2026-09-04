import { useMemo } from 'react'
import type { Priority, Roadmap } from '../types'
import { getLevelColor } from '../utils/colors'
import { LevelSection } from './LevelSection'

interface RoadmapViewProps {
  roadmap: Roadmap
  forceCollapsed?: boolean
  compact?: boolean
  priorities: Set<Priority>
  anchorPrefix?: string
}

export function RoadmapView({
  roadmap,
  forceCollapsed = false,
  compact = false,
  priorities,
  anchorPrefix = 'roadmap',
}: RoadmapViewProps) {
  const filteredLevels = useMemo(
    () =>
      roadmap.levels
        .map((level) => ({
          ...level,
          topics: level.topics.filter((t) => priorities.has(t.priority)),
        }))
        .filter((level) => level.topics.length > 0),
    [roadmap, priorities],
  )

  const stats = useMemo(() => {
    const topics = filteredLevels.reduce((sum, l) => sum + l.topics.length, 0)
    return { levels: filteredLevels.length, topics }
  }, [filteredLevels])

  const levelAnchor = (levelId: string) => `${anchorPrefix}__${levelId}`

  const scrollToLevel = (levelId: string) => {
    document.getElementById(levelAnchor(levelId))?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#3f3a3a] mb-2 tracking-tight">{roadmap.title}</h1>
        <p className="text-sm text-[#7a7168] max-w-3xl leading-relaxed mb-4">{roadmap.description}</p>

        <div className="flex flex-wrap items-center gap-1 text-xs text-[#9a9188]">
          <span className="rounded-full bg-white/70 border border-[#e8e1da] px-2.5 py-1">
            {stats.levels} уровней
          </span>
          <span className="rounded-full bg-white/70 border border-[#e8e1da] px-2.5 py-1">
            {stats.topics} тем
          </span>
          {roadmap.stack && (
            <span className="text-[#b0a79e]">
              {Object.entries(roadmap.stack)
                .map(([, v]) => v)
                .join(' · ')}
            </span>
          )}
        </div>

        <div
          className="flex h-3 mt-5 rounded-full overflow-hidden gap-0.5 bg-white/50 p-0.5"
          role="navigation"
          aria-label="Уровни roadmap"
        >
          {filteredLevels.map((l) => (
            <button
              key={l.id}
              type="button"
              title={`${l.title} · ${l.topics.length} тем`}
              aria-label={`${l.title}, ${l.topics.length} тем`}
              onClick={() => scrollToLevel(l.id)}
              style={{ flexGrow: l.topics.length, flexBasis: 0 }}
              className={`min-w-1 h-full rounded-full cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5c534c] ${getLevelColor(l.level).accent}`}
            />
          ))}
        </div>
      </header>

      <div>
        {filteredLevels.map((level) => (
          <LevelSection
            key={level.id}
            level={level}
            forceCollapsed={forceCollapsed}
            compact={compact}
            anchorId={levelAnchor(level.id)}
          />
        ))}
      </div>
    </div>
  )
}
