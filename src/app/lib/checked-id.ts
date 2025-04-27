import { create } from "zustand";

type idsState = {
  ids: number[];
  checkId: (id: number) => void;
  removeId: (num: number) => void;
  reset: () => void;
};

export type Toast = {
  id: string;
  message: string;
  type: "success" | "error";
};

type ToastState = {
  toasts: Toast[];
  addToast: (message: string, type?: "success" | "error") => void;
  removeToast: (id: string) => void;
};

export const useCheckedIdStore = create<idsState>((set) => ({
  ids: [],
  checkId: (id: number) => set((state) => ({ ids: [...state.ids, id] })),
  removeId: (id: number) => set((state) => ({ ids: state.ids.filter((i) => i !== id) })),
  reset: () => set({ ids: [] }),
}));

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (message, type = "success") => {
    const id = crypto.randomUUID();
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3000);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
