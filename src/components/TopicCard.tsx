import type { Priority, Topic } from '../types'
import { getLevelColor, getPriorityStyle } from '../utils/colors'

interface TopicCardProps {
  topic: Topic
  level: number
  collapsed: boolean
  onToggle: () => void
}

export function TopicCard({ topic, level, collapsed, onToggle }: TopicCardProps) {
  const colors = getLevelColor(level)

  return (
    <div
      className={`rounded-2xl border ${colors.border} ${colors.bg} p-4 flex flex-col gap-3 shadow-[0_1px_0_rgba(92,83,76,0.04)]`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <h3 className={`font-semibold text-sm leading-tight ${colors.text}`}>{topic.title}</h3>
          <span
            className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${getPriorityStyle(topic.priority as Priority)}`}
          >
            {topic.priority}
          </span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="text-[#b0a79e] hover:text-[#5c534c] text-xs shrink-0"
          aria-label={collapsed ? 'Развернуть' : 'Свернуть'}
        >
          {collapsed ? '▼' : '▲'}
        </button>
      </div>
      {!collapsed && (
        <>
          <p className="text-xs text-[#7a7168] leading-relaxed">{topic.description}</p>
          <ul className="flex flex-wrap gap-1.5">
            {topic.items.map((item) => (
              <li
                key={item}
                className={`text-[11px] px-2 py-0.5 rounded-md ${colors.chip} ${colors.chipText}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
