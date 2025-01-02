"use client";

import { useRef } from "react";

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <div>
      <button className="btn" onClick={showModal}>
        削除
      </button>
      <dialog className="modal" ref={dialogRef}>
        <div className="modal-box">
          <p className="py-4">本当に選択された記事を削除しますか。</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">削除する</button>
            </form>
            <button className="btn" onClick={closeModal}>
              キャンセル
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
