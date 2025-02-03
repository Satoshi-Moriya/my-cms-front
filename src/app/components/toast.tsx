"use client";

import { useEffect } from "react";

type ToastType = "success" | "error" | null;

export default function Toast({ type, onClose }: { type: ToastType; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5秒後にonCloseを呼び出す

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="toast toast-end toast-top">
      {type === "success" ? (
        <div className="alert alert-success">
          <span>記事が作成されました。</span>
        </div>
      ) : (
        <div className="alert alert-error">
          <span>何かしらの不具合で記事が作成できませんでした。</span>
        </div>
      )}
    </div>
  );
}
