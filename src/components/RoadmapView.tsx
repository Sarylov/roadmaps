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
  onOpenItem?: (ref: string) => void
}

export function RoadmapView({
  roadmap,
  forceCollapsed = false,
  compact = false,
  priorities,
  anchorPrefix = 'roadmap',
  onOpenItem,
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
        <h1 className="text-2xl font-bold text-[var(--fg-strong)] mb-2 tracking-tight">
          {roadmap.title}
        </h1>
        <p className="text-sm text-[var(--fg-muted)] max-w-3xl leading-relaxed mb-4">
          {roadmap.description}
        </p>

        <div className="flex flex-wrap items-center gap-1 text-xs text-[var(--fg-subtle)]">
          <span className="rounded-full bg-[var(--surface)] border border-[var(--border)] px-2.5 py-1">
            {stats.levels} уровней
          </span>
          <span className="rounded-full bg-[var(--surface)] border border-[var(--border)] px-2.5 py-1">
            {stats.topics} тем
          </span>
          {roadmap.stack && (
            <span className="text-[var(--fg-faint)]">
              {Object.entries(roadmap.stack)
                .map(([, v]) => v)
                .join(' · ')}
            </span>
          )}
        </div>

        <div
          className="flex h-3 mt-5 rounded-full overflow-hidden gap-0.5 bg-[var(--surface)] p-0.5"
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
              className={`min-w-1 h-full rounded-full cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)] ${getLevelColor(l.level).accent}`}
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
            onOpenItem={onOpenItem}
          />
        ))}
      </div>
    </div>
  )
}
