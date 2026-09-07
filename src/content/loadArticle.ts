import type { Article, ArticleAnswer } from '../types'

const modules = import.meta.glob('../../content/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

function pathToRef(path: string): string {
  return path
    .replace(/^\.\.\/\.\.\/content\//, '')
    .replace(/\.md$/, '')
}

const loaders = new Map(
  Object.entries(modules).map(([path, load]) => [pathToRef(path), load]),
)

export function hasArticle(ref: string): boolean {
  return loaders.has(ref)
}

export function listArticleRefs(): string[] {
  return [...loaders.keys()].sort()
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw.startsWith('---')) return { meta: {}, body: raw.trim() }

  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { meta: {}, body: raw.trim() }

  const front = raw.slice(3, end).trim()
  const body = raw.slice(end + 4).trim()
  const meta: Record<string, string> = {}

  for (const line of front.split('\n')) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = value
  }

  return { meta, body }
}

/** Split trailing Q&A block from the main article body.
 * Supports `## Ответы` and `## Вопросы и ответы`.
 * Also drops the redundant `## Что спрашивают` list from the visible body.
 */
export function splitArticleAnswers(body: string): {
  body: string
  answers: ArticleAnswer[]
} {
  const qaMatch = body.match(
    /(?:^|\n)(##\s+(?:Вопросы и ответы|Ответы)\s*\n[\s\S]*)$/,
  )
  if (!qaMatch) {
    return {
      body: stripQuestionsSection(body),
      answers: [],
    }
  }

  const answersBlock = qaMatch[1]
  let main = body.slice(0, body.length - answersBlock.length).trimEnd()
  main = stripQuestionsSection(main)

  const afterHeading = answersBlock
    .replace(/^##\s+(?:Вопросы и ответы|Ответы)\s*\n/, '')
    .trim()
  if (!afterHeading) return { body: main, answers: [] }

  const answers: ArticleAnswer[] = []
  for (const part of afterHeading.split(/^###\s+/m)) {
    const chunk = part.trim()
    if (!chunk) continue
    const nl = chunk.indexOf('\n')
    if (nl === -1) {
      answers.push({ question: chunk, body: '' })
      continue
    }
    answers.push({
      question: chunk.slice(0, nl).trim(),
      body: chunk.slice(nl + 1).trim(),
    })
  }

  return { body: main, answers }
}

function stripQuestionsSection(body: string): string {
  return body
    .replace(/(?:^|\n)##\s+Что спрашивают\s*\n[\s\S]*?(?=\n##\s+|$)/, '\n')
    .trim()
}

/** Accepts bare id or full YouTube URL → embed id */
export function extractYoutubeId(value: string): string | null {
  const raw = value.trim()
  if (/^[\w-]{11}$/.test(raw)) return raw

  try {
    const url = new URL(raw)
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.split('/').filter(Boolean)[0]
      return id && /^[\w-]{11}$/.test(id) ? id : null
    }
    if (url.hostname.includes('youtube.com')) {
      const v = url.searchParams.get('v')
      if (v && /^[\w-]{11}$/.test(v)) return v
      const embed = url.pathname.match(/\/embed\/([\w-]{11})/)
      if (embed) return embed[1]
    }
  } catch {
    return null
  }
  return null
}

export async function loadArticle(ref: string): Promise<Article | null> {
  const load = loaders.get(ref)
  if (!load) return null

  const raw = await load()
  const { meta, body: rawBody } = parseFrontmatter(raw)
  const { body, answers } = splitArticleAnswers(rawBody)

  return {
    ref,
    title: meta.title ?? ref.split('/').pop() ?? ref,
    summary: meta.summary ?? '',
    body,
    answers,
    video: meta.video || undefined,
    image: meta.image || undefined,
    imageCredit: meta.image_credit || meta.imageCredit || undefined,
  }
}
