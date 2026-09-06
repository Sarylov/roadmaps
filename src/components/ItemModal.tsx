import { useCallback, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { extractYoutubeId, loadArticle } from '../content/loadArticle'
import type { Article } from '../types'
import { ARTICLE_TAGS, getArticleProgress, type ArticleTag } from '../utils/articleProgress'
import { ArticleAnswers } from './ArticleAnswers'
import { ArticleProgressPanel } from './ArticleProgressPanel'
import { ZoomableImage } from './ImageLightbox'

interface ItemModalProps {
  itemRef: string | null
  onClose: () => void
}

function ArticleMedia({ article }: { article: Article }) {
  const youtubeId = article.video ? extractYoutubeId(article.video) : null

  return (
    <div className="mb-5 space-y-4">
      {youtubeId && (
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-black">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={article.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      )}

      {article.image && (
        <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <ZoomableImage
            src={article.image}
            alt={article.title}
            className="block w-full max-h-[360px] object-contain bg-[var(--chip-muted)]"
          />
          {article.imageCredit && (
            <figcaption className="px-3 py-2 text-[11px] text-[var(--fg-faint)] border-t border-[var(--border)]">
              {article.imageCredit}
            </figcaption>
          )}
        </figure>
      )}
    </div>
  )
}

export function ItemModal({ itemRef, onClose }: ItemModalProps) {
  const [article, setArticle] = useState<Article | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'missing'>('idle')
  const [activeTag, setActiveTag] = useState<ArticleTag | null>(null)

  const onProgressChange = useCallback((tag: ArticleTag | null) => {
    setActiveTag(tag)
  }, [])

  useEffect(() => {
    if (!itemRef) {
      setArticle(null)
      setStatus('idle')
      setActiveTag(null)
      return
    }

    let cancelled = false
    setStatus('loading')
    setArticle(null)
    setActiveTag(getArticleProgress(itemRef).tag)

    loadArticle(itemRef).then((data) => {
      if (cancelled) return
      if (!data) {
        setStatus('missing')
        return
      }
      setArticle(data)
      setStatus('ready')
    })

    return () => {
      cancelled = true
    }
  }, [itemRef])

  useEffect(() => {
    if (!itemRef) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [itemRef, onClose])

  if (!itemRef) return null

  const tagLabel = ARTICLE_TAGS.find((t) => t.id === activeTag)?.label

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-[var(--overlay)] backdrop-blur-[2px]"
        aria-label="Закрыть"
        onClick={onClose}
      />

      <div className="relative z-10 w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-[var(--border)] bg-[var(--surface-solid)] shadow-xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[var(--border)] bg-[var(--surface-solid)]/95 backdrop-blur px-5 py-4">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wide text-[var(--fg-faint)] mb-1">
              {itemRef}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="item-modal-title" className="text-lg font-bold text-[var(--fg-strong)]">
                {article?.title ?? (status === 'loading' ? 'Загрузка…' : 'Материал')}
              </h2>
              {tagLabel && (
                <span className="rounded-full border border-[var(--border-strong)] px-2 py-0.5 text-[10px] font-medium text-[var(--fg-muted)]">
                  {tagLabel}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer shrink-0 rounded-full px-3 py-1 text-sm text-[var(--fg-muted)] hover:bg-[var(--chip-muted)] hover:text-[var(--accent)]"
          >
            Закрыть
          </button>
        </div>

        <div className="px-5 py-5">
          {status === 'loading' && <p className="text-sm text-[var(--fg-muted)]">Загрузка…</p>}

          {status === 'missing' && (
            <p className="text-sm text-[var(--fg-muted)]">
              Файл <code className="text-[var(--accent)]">content/{itemRef}.md</code> не найден.
            </p>
          )}

          {status === 'ready' && article && (
            <>
              {article.summary && (
                <p className="text-sm leading-relaxed text-[var(--accent)] mb-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3">
                  {article.summary}
                </p>
              )}

              <ArticleMedia article={article} />

              <div className="article-prose text-sm text-[var(--fg)] leading-relaxed">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: ({ src, alt }) =>
                      src ? (
                        <div className="my-3">
                          <ZoomableImage
                            src={src}
                            alt={alt ?? ''}
                            className="rounded-xl border border-[var(--border)] bg-[var(--chip-muted)] max-h-[320px] w-full object-contain"
                          />
                        </div>
                      ) : null,
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline decoration-dotted underline-offset-2 text-[var(--accent)]"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {article.body}
                </Markdown>
              </div>

              <ArticleAnswers answers={article.answers} />

              <ArticleProgressPanel itemRef={itemRef} onChange={onProgressChange} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
