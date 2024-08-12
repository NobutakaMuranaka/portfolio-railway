// このコンポーネントは、モーダルウィンドウを表示するための`Modal`コンポーネントです。
// モーダルの背景クリックやエスケープキー押下時にモーダルを閉じ、前のページに戻る機能を提供します。
// `useRef`フックを使用して、モーダルのオーバーレイとコンテンツのラッパー要素にアクセスします。
// `useCallback`フックを使って、オーバーレイのクリックやエスケープキー押下時に`onDismiss`関数を呼び出し、`router.back()`で前のページに戻ります。
// `useEffect`フックを使って、コンポーネントのマウント時にキーボードイベントリスナーを追加し、アンマウント時にリスナーを削除します。
// モーダルは画面全体に固定され、半透明の黒背景が適用されており、中央にモーダルコンテンツが表示されます。

"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  );
}
