"use client";

import { useRef } from "react";

import { deletePost } from "../lib/actions";
import { useCheckedIdStore } from "../lib/checked-id";

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();
  const { ids } = useCheckedIdStore();
  const action = deletePost.bind(null, ids);

  return (
    <div>
      <button className="btn" onClick={showModal}>
        削除
      </button>
      <dialog className="modal" ref={dialogRef}>
        <div className="modal-box">
          <p className="py-4">本当に選択された記事を削除しますか。</p>
          <div className="modal-action">
            <form action={action}>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={closeModal}>
                削除する
              </button>
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
