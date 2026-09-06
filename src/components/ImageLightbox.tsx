import { useEffect, useRef, useState } from 'react'

interface ImageLightboxProps {
  src: string
  alt?: string
  onClose: () => void
}

const MIN_SCALE = 1
const MAX_SCALE = 6
const DRAG_THRESHOLD = 4

export function ImageLightbox({ src, alt = '', onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [grabbing, setGrabbing] = useState(false)
  const dragging = useRef(false)
  const moved = useRef(false)
  const lastPoint = useRef({ x: 0, y: 0 })
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const direction = e.deltaY < 0 ? 1 : -1
      setScale((prev) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * (direction > 0 ? 1.12 : 1 / 1.12)))
        if (next <= MIN_SCALE) setOffset({ x: 0, y: 0 })
        return next
      })
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
    if (scale <= 1) return
    dragging.current = true
    moved.current = false
    lastPoint.current = { x: e.clientX, y: e.clientY }
    setGrabbing(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!dragging.current) return
    const dx = e.clientX - lastPoint.current.x
    const dy = e.clientY - lastPoint.current.y
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      moved.current = true
    }
    lastPoint.current = { x: e.clientX, y: e.clientY }
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
  }

  const onPointerUp = (e: React.PointerEvent<HTMLImageElement>) => {
    dragging.current = false
    setGrabbing(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const onImgClick = (e: React.MouseEvent) => {
    // после pan браузер всё равно шлёт click — глушим его
    if (moved.current) {
      e.preventDefault()
      e.stopPropagation()
      moved.current = false
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-white/80">
        <p className="text-xs truncate">{alt || 'Изображение'}</p>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs tabular-nums">{Math.round(scale * 100)}%</span>
          <button
            type="button"
            className="cursor-pointer rounded-full px-3 py-1 text-sm hover:bg-white/10"
            onClick={() => {
              setScale(1)
              setOffset({ x: 0, y: 0 })
            }}
          >
            100%
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full px-3 py-1 text-sm hover:bg-white/10"
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
      </div>

      <div ref={stageRef} className="relative flex-1 overflow-hidden touch-none">
        <button
          type="button"
          className="absolute inset-0 cursor-pointer border-0 bg-transparent"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <img
          src={src}
          alt={alt}
          draggable={false}
          referrerPolicy="no-referrer"
          onClick={onImgClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="absolute left-1/2 top-1/2 z-[1] max-w-none select-none"
          style={{
            transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${scale})`,
            transformOrigin: 'center center',
            maxHeight: scale === 1 ? '90%' : 'none',
            maxWidth: scale === 1 ? '95%' : 'none',
            width: scale === 1 ? 'auto' : undefined,
            height: scale === 1 ? 'auto' : undefined,
            cursor: scale > 1 ? (grabbing ? 'grabbing' : 'grab') : 'default',
          }}
        />
      </div>

      <p className="px-4 py-2 text-center text-[11px] text-white/50">
        Колесо — зум · перетаскивание при увеличении · клик по фону / Esc — закрыть
      </p>
    </div>
  )
}

interface ZoomableImageProps {
  src: string
  alt?: string
  className?: string
}

export function ZoomableImage({ src, alt = '', className = '' }: ZoomableImageProps) {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <p className="px-4 py-6 text-center text-xs text-[var(--fg-subtle)]">
        Картинка недоступна (ссылка устарела или сайт блокирует встраивание)
      </p>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-zoom-in block w-full p-0 border-0 bg-transparent"
        title="Открыть во весь экран"
      >
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      </button>
      {open && <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  )
}
