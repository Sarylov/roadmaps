import { useEffect, useState } from 'react'
import {
  ARTICLE_TAGS,
  getArticleProgress,
  saveArticleProgress,
  type ArticleTag,
} from '../utils/articleProgress'

interface ArticleProgressPanelProps {
  itemRef: string
  onChange?: (tag: ArticleTag | null) => void
}

const TAG_STYLES: Record<ArticleTag, string> = {
  remembered:
    'bg-[#d9ebe3] text-[#3a6b55] border-[#b5d4c4] dark:bg-[#24342e] dark:text-[#a8d4c0] dark:border-[#3a5448]',
  forgotten:
    'bg-[#f5ddd8] text-[#8f4e42] border-[#e0b8b0] dark:bg-[#3a2825] dark:text-[#e8b4ab] dark:border-[#5a3e3a]',
  rephrase:
    'bg-[#e8e4f0] text-[#5a4e70] border-[#c8c0d8] dark:bg-[#2a2638] dark:text-[#c8bce0] dark:border-[#4a4460]',
}

export function ArticleProgressPanel({ itemRef, onChange }: ArticleProgressPanelProps) {
  const [note, setNote] = useState('')
  const [tag, setTag] = useState<ArticleTag | null>(null)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    const progress = getArticleProgress(itemRef)
    setNote(progress.note)
    setTag(progress.tag)
    onChange?.(progress.tag)
  }, [itemRef, onChange])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const current = getArticleProgress(itemRef)
      if (current.note === note && current.tag === tag) return
      saveArticleProgress(itemRef, { note, tag })
      onChange?.(tag)
      setSavedFlash(true)
    }, 400)

    return () => window.clearTimeout(timer)
  }, [itemRef, note, tag, onChange])

  useEffect(() => {
    if (!savedFlash) return
    const t = window.setTimeout(() => setSavedFlash(false), 1200)
    return () => window.clearTimeout(t)
  }, [savedFlash])

  const toggleTag = (next: ArticleTag) => {
    setTag((prev) => (prev === next ? null : next))
  }

  return (
    <section className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-[var(--fg-strong)]">Мой прогресс</h3>
        <span className="text-[11px] text-[var(--fg-faint)]">
          {savedFlash ? 'Сохранено' : 'Автосохранение'}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {ARTICLE_TAGS.map((item) => {
          const active = tag === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleTag(item.id)}
              className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-opacity ${
                active
                  ? TAG_STYLES[item.id]
                  : 'border-[var(--border-strong)] bg-transparent text-[var(--fg-muted)] opacity-70 hover:opacity-100'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs text-[var(--fg-subtle)]">Заметка</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="Своими словами, пример, на чём споткнулся…"
          className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--fg-faint)] outline-none focus:border-[var(--accent)]"
        />
      </label>
    </section>
  )
}
