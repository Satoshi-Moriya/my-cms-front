"use client";

import Toast from "./toast";
import { useToastStore } from "../lib/checked-id";

export default function Toaster() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div>
      {toasts.map((toast) => (
        <Toast key={toast.id} onRemove={removeToast} toast={toast} />
      ))}
    </div>
  );
}
