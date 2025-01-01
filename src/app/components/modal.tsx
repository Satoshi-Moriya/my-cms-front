"use client";

import { useRef } from "react";

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleShowModal = () => dialogRef.current?.showModal();
  const handleCloseModal = () => dialogRef.current?.close();

  return (
    <div>
      <button className="btn" onClick={handleShowModal}>
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
            <button className="btn" onClick={handleCloseModal}>
              キャンセル
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
