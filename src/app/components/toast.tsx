"use client";

import { useEffect } from "react";

// type ToastType = "success" | "error" | null;
type ToastType = "success" | "error";

type ToastProps = {
  type: ToastType;
  onClose: () => void;
};

export default function Toast({ type = "success", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const alertColor = type === "success" ? "alert-success" : "alert-error";
  const alertMessage =
    type === "success"
      ? "記事が作成されました。"
      : "何かしらの不具合で記事が作成できませんでした。";

  return (
    <div className="toast toast-end toast-top">
      <div className={`alert ${alertColor}`}>{alertMessage}</div>
    </div>
  );
}
