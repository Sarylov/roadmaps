import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const roadmapsDir = path.resolve(rootDir, 'public/roadmaps')

function scanRoadmaps() {
  if (!fs.existsSync(roadmapsDir)) return []

  return fs
    .readdirSync(roadmapsDir)
    .filter((file) => file.endsWith('.json') && file !== 'manifest.json')
    .sort()
    .flatMap((file) => {
      const id = file.replace(/\.json$/, '')
      try {
        const raw = fs.readFileSync(path.join(roadmapsDir, file), 'utf-8').trim()
        if (!raw) return []
        const data = JSON.parse(raw) as { title?: string }
        return [{ id, label: data.title ?? id, file }]
      } catch {
        console.warn(`[roadmaps] skip invalid file: ${file}`)
        return []
      }
    })
}

function writeManifest() {
  fs.mkdirSync(roadmapsDir, { recursive: true })
  const manifest = scanRoadmaps()
  fs.writeFileSync(
    path.join(roadmapsDir, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  )
  return manifest
}

function roadmapsManifestPlugin(): Plugin {
  return {
    name: 'roadmaps-manifest',
    buildStart() {
      writeManifest()
    },
    configureServer(server) {
      writeManifest()
      server.watcher.add(roadmapsDir)

      const refresh = (file: string) => {
        if (!file.includes(`${path.sep}roadmaps${path.sep}`)) return
        if (path.basename(file) === 'manifest.json') return
        writeManifest()
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
      server.watcher.on('change', refresh)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), roadmapsManifestPlugin()],
})
