import { create } from "zustand";

type idsState = {
  ids: number[];
  checkId: (id: number) => void;
  removeId: (num: number) => void;
  reset: () => void;
};

export const useCheckedIdStore = create<idsState>((set) => ({
  ids: [],
  checkId: (id: number) => set((state) => ({ ids: [...state.ids, id] })),
  removeId: (id: number) => set((state) => ({ ids: state.ids.filter((i) => i !== id) })),
  reset: () => set({ ids: [] }),
}));
