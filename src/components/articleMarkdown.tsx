import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { ZoomableImage } from './ImageLightbox'

function languageFromClassName(className?: string): string | null {
  if (!className) return null
  const match = /language-([\w#+-]+)/.exec(className)
  return match?.[1] ?? null
}

function CodeBlock({ children, ...props }: ComponentPropsWithoutRef<'pre'>) {
  let language: string | null = null

  const child = Array.isArray(children) ? children[0] : children
  if (
    child &&
    typeof child === 'object' &&
    'props' in child &&
    child.props &&
    typeof child.props === 'object' &&
    'className' in child.props
  ) {
    language = languageFromClassName(
      typeof child.props.className === 'string' ? child.props.className : undefined,
    )
  }

  return (
    <div className="article-codeblock my-3 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-block-bg)]">
      {language && (
        <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--fg-faint)]">
            {language}
          </span>
        </div>
      )}
      <pre {...props} className="m-0 overflow-x-auto rounded-none border-0 bg-transparent p-3.5 text-[13px] leading-relaxed">
        {children}
      </pre>
    </div>
  )
}

const markdownComponents = {
  img: ({ src, alt }: { src?: string; alt?: string }) =>
    src ? (
      <div className="my-3">
        <ZoomableImage
          src={src}
          alt={alt ?? ''}
          className="rounded-xl border border-[var(--border)] bg-[var(--chip-muted)] max-h-[320px] w-full object-contain"
        />
      </div>
    ) : null,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="underline decoration-dotted underline-offset-2 text-[var(--accent)]"
    >
      {children}
    </a>
  ),
  pre: CodeBlock,
}

interface ArticleMarkdownProps {
  children: string
}

export function ArticleMarkdown({ children }: ArticleMarkdownProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={markdownComponents}
    >
      {children}
    </Markdown>
  )
}
