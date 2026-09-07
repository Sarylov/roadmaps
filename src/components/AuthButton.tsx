import { useAuth } from '../firebase/AuthProvider'

export function AuthButton() {
  const { user, ready, syncing, syncError, signIn, logOut } = useAuth()

  if (!ready) {
    return (
      <span className="text-xs text-[var(--fg-faint)]" aria-hidden>
        …
      </span>
    )
  }

  if (!user) {
    return (
      <button
        type="button"
        onClick={() => void signIn().catch((e) => console.error(e))}
        className="cursor-pointer rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]"
        title="Синхронизация прогресса и заметок"
      >
        Войти
      </button>
    )
  }

  const label = user.displayName?.split(' ')[0] || user.email || 'Аккаунт'

  return (
    <div className="flex items-center gap-2">
      {syncError ? (
        <span className="max-w-[10rem] truncate text-[11px] text-red-500/90" title={syncError}>
          Ошибка синка
        </span>
      ) : syncing ? (
        <span className="text-[11px] text-[var(--fg-faint)]">Синк…</span>
      ) : (
        <span className="hidden text-[11px] text-[var(--fg-faint)] sm:inline" title={user.email ?? undefined}>
          {label}
        </span>
      )}
      <button
        type="button"
        onClick={() => void logOut()}
        className="cursor-pointer rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]"
      >
        Выйти
      </button>
    </div>
  )
}
