
import { create } from 'zustand'

type User = { id: string; name: string; xp: number }
type State = { user: User | null, login: (u: User) => void, logout: () => void }
export const useAuthStore = create<State>((set) => ({
  user: { id: 'me', name: 'Guest', xp: 120 },
  login: (u) => set({ user: u }),
  logout: () => set({ user: { id: 'me', name: 'Guest', xp: 0 } })
}))
