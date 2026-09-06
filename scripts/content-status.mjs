import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content')
const roadmapsDir = path.join(root, 'public', 'roadmaps')

function walkMd(dir, base = '') {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const rel = base ? `${base}/${entry.name}` : entry.name
    if (entry.isDirectory()) return walkMd(path.join(dir, entry.name), rel)
    if (entry.name.endsWith('.md')) return [rel.replace(/\.md$/, '')]
    return []
  })
}

const articles = new Set(walkMd(contentDir))
const refs = []

for (const file of fs.readdirSync(roadmapsDir).filter((f) => f.endsWith('.json') && f !== 'manifest.json')) {
  const data = JSON.parse(fs.readFileSync(path.join(roadmapsDir, file), 'utf8'))
  for (const level of data.levels) {
    for (const topic of level.topics) {
      for (const item of topic.items) {
        if (typeof item === 'object' && item.ref) {
          refs.push({ file, topic: topic.id, label: item.label, ref: item.ref })
        }
      }
    }
  }
}

const missing = refs.filter((r) => !articles.has(r.ref))
const used = new Set(refs.map((r) => r.ref))
const orphans = [...articles].filter((a) => !used.has(a))

console.log(`items with ref: ${refs.length}`)
console.log(`articles on disk: ${articles.size}`)
console.log(`missing files: ${missing.length}`)
for (const m of missing) console.log(`  - ${m.ref} (${m.file} / ${m.topic} / ${m.label})`)
console.log(`orphan articles: ${orphans.length}`)
for (const o of orphans) console.log(`  - ${o}`)
