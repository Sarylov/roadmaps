import type { ArticleAnswer } from '../types'
import { ArticleMarkdown } from './articleMarkdown'

interface ArticleAnswersProps {
  answers: ArticleAnswer[]
}

export function ArticleAnswers({ answers }: ArticleAnswersProps) {
  if (answers.length === 0) return null

  return (
    <section className="mt-6 pt-5 border-t border-[var(--border)]">
      <h2 className="text-sm font-bold text-[var(--fg-strong)] mb-3">Вопросы и ответы</h2>
      <div className="space-y-2">
        {answers.map((answer) => (
          <details
            key={answer.question}
            className="article-answer group rounded-2xl border border-[var(--border)] bg-[var(--surface)] open:bg-[var(--surface-solid)]"
          >
            <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-[var(--fg)] select-none flex items-start gap-2">
              <span
                className="mt-0.5 shrink-0 text-[var(--fg-faint)] transition-transform group-open:rotate-90"
                aria-hidden
              >
                ▸
              </span>
              <span>{answer.question}</span>
            </summary>
            {answer.body && (
              <div className="article-prose px-4 pb-4 pl-9 text-sm text-[var(--fg)] leading-relaxed border-t border-[var(--border)] pt-3">
                <ArticleMarkdown>{answer.body}</ArticleMarkdown>
              </div>
            )}
          </details>
        ))}
      </div>
    </section>
  )
}
