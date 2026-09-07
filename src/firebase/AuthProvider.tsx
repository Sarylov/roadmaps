import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth'
import { setArticleProgressCloudHook } from '../utils/articleProgress'
import { auth, googleProvider } from './app'
import { cancelScheduledPush, pullProgressOnce, schedulePushProgress } from './sync'

interface AuthContextValue {
  user: User | null
  ready: boolean
  syncing: boolean
  syncError: string | null
  signIn: () => Promise<void>
  logOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [ready, setReady] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [syncError, setSyncError] = useState<string | null>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, (next) => {
      setUser(next)
      setReady(true)
    })
  }, [])

  useEffect(() => {
    if (!user) {
      setArticleProgressCloudHook(undefined)
      cancelScheduledPush()
      return
    }

    setArticleProgressCloudHook(() => schedulePushProgress(user.uid))

    let cancelled = false
    setSyncing(true)
    setSyncError(null)
    pullProgressOnce(user.uid)
      .catch((err: unknown) => {
        if (!cancelled) {
          console.error('[firebase] pull failed', err)
          setSyncError('Не удалось загрузить прогресс из облака')
        }
      })
      .finally(() => {
        if (!cancelled) setSyncing(false)
      })

    return () => {
      cancelled = true
      setArticleProgressCloudHook(undefined)
      cancelScheduledPush()
    }
  }, [user])

  const signIn = useCallback(async () => {
    setSyncError(null)
    await signInWithPopup(auth, googleProvider)
  }, [])

  const logOut = useCallback(async () => {
    cancelScheduledPush()
    setArticleProgressCloudHook(undefined)
    await signOut(auth)
  }, [])

  const value = useMemo(
    () => ({ user, ready, syncing, syncError, signIn, logOut }),
    [user, ready, syncing, syncError, signIn, logOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
