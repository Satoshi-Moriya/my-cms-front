"use client";

import Toast2 from "./toast2";
import { useToastStore } from "../lib/checked-id";

export default function Toaster() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div>
      {toasts.map((toast) => (
        <Toast2 key={toast.id} onRemove={removeToast} toast={toast} />
      ))}
    </div>
  );
}
