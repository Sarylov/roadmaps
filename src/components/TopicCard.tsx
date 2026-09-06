import { useEffect, useState } from 'react'
import type { Priority, Topic } from '../types'
import { normalizeItem } from '../types'
import {
  ARTICLE_PROGRESS_EVENT,
  ARTICLE_TAGS,
  getArticleProgress,
  type ArticleTag,
} from '../utils/articleProgress'
import { getLevelColor, getPriorityStyle } from '../utils/colors'

interface TopicCardProps {
  topic: Topic
  level: number
  collapsed: boolean
  onToggle: () => void
  onOpenItem?: (ref: string) => void
}

const TAG_CHIP: Record<ArticleTag, { short: string; className: string }> = {
  remembered: {
    short: '✓',
    className:
      'bg-[#d9ebe3] text-[#3a6b55] dark:bg-[#24342e] dark:text-[#a8d4c0]',
  },
  forgotten: {
    short: '!',
    className:
      'bg-[#f5ddd8] text-[#8f4e42] dark:bg-[#3a2825] dark:text-[#e8b4ab]',
  },
  rephrase: {
    short: '↻',
    className:
      'bg-[#e8e4f0] text-[#5a4e70] dark:bg-[#2a2638] dark:text-[#c8bce0]',
  },
}

function useProgressTick() {
  const [, setTick] = useState(0)
  useEffect(() => {
    const bump = () => setTick((n) => n + 1)
    window.addEventListener(ARTICLE_PROGRESS_EVENT, bump)
    return () => window.removeEventListener(ARTICLE_PROGRESS_EVENT, bump)
  }, [])
}

export function TopicCard({ topic, level, collapsed, onToggle, onOpenItem }: TopicCardProps) {
  const colors = getLevelColor(level)
  useProgressTick()

  return (
    <div
      className={`rounded-2xl border ${colors.border} ${colors.bg} p-4 flex flex-col gap-3 shadow-[0_1px_0_rgba(92,83,76,0.04)] dark:shadow-[0_1px_0_rgba(0,0,0,0.25)]`}
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
          className="cursor-pointer text-[var(--fg-faint)] hover:text-[var(--accent)] text-xs shrink-0"
          aria-label={collapsed ? 'Развернуть' : 'Свернуть'}
        >
          {collapsed ? '▼' : '▲'}
        </button>
      </div>
      {!collapsed && (
        <>
          <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{topic.description}</p>
          <ul className="flex flex-wrap gap-1.5">
            {topic.items.map((raw) => {
              const item = normalizeItem(raw)
              const clickable = Boolean(item.ref && onOpenItem)
              const tag = item.ref ? getArticleProgress(item.ref).tag : null
              const tagMeta = tag ? TAG_CHIP[tag] : null
              const tagLabel = tag ? ARTICLE_TAGS.find((t) => t.id === tag)?.label : undefined

              if (!clickable) {
                return (
                  <li
                    key={item.label}
                    className={`text-[11px] px-2 py-0.5 rounded-md ${colors.chip} ${colors.chipText}`}
                  >
                    {item.label}
                  </li>
                )
              }

              return (
                <li key={item.ref ?? item.label}>
                  <button
                    type="button"
                    onClick={() => onOpenItem?.(item.ref!)}
                    title={tagLabel ? `${item.label} — ${tagLabel}` : 'Открыть материал'}
                    className={`cursor-pointer inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md underline decoration-dotted underline-offset-2 transition-opacity hover:opacity-80 ${colors.chip} ${colors.chipText}`}
                  >
                    <span>{item.label}</span>
                    {tagMeta && (
                      <span
                        className={`no-underline inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold leading-none ${tagMeta.className}`}
                        aria-label={tagLabel}
                      >
                        {tagMeta.short}
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
