"use client";

import { Toast } from "../lib/checked-id";

type ToastProps = {
  toast: Toast;
  onRemove: (id: string) => void;
};

export default function Toast2({ toast, onRemove }: ToastProps) {
  const { id, message, type } = toast;

  const alertColor = type === "success" ? "alert-success" : "alert-error";

  return (
    <div className="toast toast-end toast-top" onClick={() => onRemove(id)}>
      <div className={`alert ${alertColor}`}>{message}</div>
    </div>
  );
}
