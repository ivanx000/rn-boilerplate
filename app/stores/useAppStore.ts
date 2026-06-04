import { create } from "zustand"

/**
 * Global app store — add slices here as your app grows.
 *
 * Example usage:
 *   const count = useAppStore((s) => s.count)
 *   const increment = useAppStore((s) => s.increment)
 */

interface AppState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useAppStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
}))
