export type Priority = 'CORE' | 'KILLER' | 'OPT'

export interface Topic {
  id: string
  title: string
  priority: Priority
  description: string
  items: string[]
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
