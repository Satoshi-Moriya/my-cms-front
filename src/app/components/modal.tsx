"use client";

import { useActionState, useEffect, useRef } from "react";

import { deletePost } from "../lib/actions";
import { useCheckedIdStore, useToastStore } from "../lib/checked-id";

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();
  const { ids } = useCheckedIdStore();
  const [lastResult, action] = useActionState(deletePost.bind(null, ids), undefined);
  const addToast = useToastStore((state) => state.addToast);

  useEffect(() => {
    console.log("lastResult", lastResult);
    if (lastResult?.status === "success") {
      addToast("記事が削除されました。", "success");
    } else if (lastResult?.status === "error") {
      addToast("何かしらの不具合で記事が 削除できませんでした。", "error");
    } else {
      return;
    }
  }, [lastResult, addToast]);

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
