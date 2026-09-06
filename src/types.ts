export type Priority = 'CORE' | 'KILLER' | 'OPT'

export type TopicItem =
  | string
  | {
      label: string
      ref?: string
    }

export interface NormalizedTopicItem {
  label: string
  ref?: string
}

export function normalizeItem(item: TopicItem): NormalizedTopicItem {
  if (typeof item === 'string') return { label: item }
  return { label: item.label, ref: item.ref }
}

export interface Topic {
  id: string
  title: string
  priority: Priority
  description: string
  items: TopicItem[]
}

export interface Level {
  id: string
  level: number
  title: string
  topics: Topic[]
}

export interface Roadmap {
  title: string
  description: string
  stack?: Record<string, string>
  levels: Level[]
  recommended_learning_order?: string[]
  projects?: Array<{
    level: string
    title: string
    stack: string[]
    focus: string[]
  }>
}

export interface RoadmapMeta {
  id: string
  label: string
  file: string
}

export interface ArticleAnswer {
  question: string
  body: string
}

export interface Article {
  ref: string
  title: string
  summary: string
  body: string
  answers: ArticleAnswer[]
  video?: string
  image?: string
  imageCredit?: string
}
