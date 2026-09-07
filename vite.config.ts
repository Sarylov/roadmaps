import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

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
  base: '/roadmaps/',
  plugins: [
    react(),
    tailwindcss(),
    roadmapsManifestPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Roadmap Viewer',
        short_name: 'Roadmaps',
        description: 'Interview roadmaps: articles, progress and notes',
        lang: 'ru',
        theme_color: '#5c534c',
        background_color: '#f7f4f1',
        display: 'standalone',
        orientation: 'any',
        start_url: '/roadmaps/',
        scope: '/roadmaps/',
        id: '/roadmaps/',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,png,woff2,webp}'],
        navigateFallback: '/roadmaps/index.html',
        navigateFallbackDenylist: [/^\/api/],
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.pathname.startsWith('/roadmaps/roadmaps/') && url.pathname.endsWith('.json'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'roadmap-json',
              expiration: {
                maxEntries: 32,
                maxAgeSeconds: 60 * 60 * 24 * 14,
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
