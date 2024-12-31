"use client";

export default function Modal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* todo refにする */}
      <button
        className="btn"
        onClick={() => {
          const modalElement = document.getElementById("my_modal_1") as HTMLDialogElement | null;
          modalElement?.showModal();
        }}
      >
        削除
      </button>
      <dialog className="modal" id="my_modal_1">
        <div className="modal-box">
          <p className="py-4">本当に選択された記事を削除しますか。</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">削除する</button>
            </form>
            {/* todo 通信を行わないモーダル画面をただ消すだけの「キャンセル」ボタンを作りたい */}
            {/* <button className="btn">キャンセル</button> */}
          </div>
        </div>
      </dialog>
    </div>
  );
}
