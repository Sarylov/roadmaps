import { useMemo, useState } from 'react'
import type { Level } from '../types'
import { getLevelColor } from '../utils/colors'
import { TopicCard } from './TopicCard'

interface LevelSectionProps {
  level: Level
  forceCollapsed?: boolean
  compact?: boolean
}

export function LevelSection({
  level,
  forceCollapsed = false,
  compact = false,
}: LevelSectionProps) {
  const [collapsedTopics, setCollapsedTopics] = useState<Record<string, boolean>>({})
  const colors = getLevelColor(level.level)

  const allTopicsCollapsed = useMemo(
    () => forceCollapsed || level.topics.every((t) => collapsedTopics[t.id]),
    [forceCollapsed, level.topics, collapsedTopics],
  )

  const toggleTopic = (id: string) => {
    if (forceCollapsed) return
    setCollapsedTopics((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleLevelTopics = () => {
    if (forceCollapsed) return
    if (allTopicsCollapsed) {
      setCollapsedTopics({})
      return
    }
    setCollapsedTopics(Object.fromEntries(level.topics.map((t) => [t.id, true])))
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${colors.accent} text-white`}
        >
          {level.level}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-semibold text-[#4a433e] truncate">{level.title}</h2>
          <p className="text-xs text-[#9a9188]">{level.topics.length} тем</p>
        </div>
        <button
          type="button"
          onClick={toggleLevelTopics}
          className="text-xs text-[#9a9188] hover:text-[#5c534c] shrink-0"
        >
          {allTopicsCollapsed ? 'Развернуть уровень' : 'Свернуть уровень'}
        </button>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-14 items-start ${
          compact ? 'xl:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
        }`}
      >
        {level.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            level={level.level}
            collapsed={forceCollapsed || !!collapsedTopics[topic.id]}
            onToggle={() => toggleTopic(topic.id)}
          />
        ))}
      </div>
    </section>
  )
}
