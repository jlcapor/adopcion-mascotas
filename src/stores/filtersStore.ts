import { create } from "zustand"

type FilterStatus = "idle" | "visible"

interface FilterStore {
  status: FilterStatus
  set: (value: FilterStatus) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  status: "idle",
  set: (value: FilterStatus) => set(() => ({ status: value })),
}))