// このコードは、Next.jsアプリケーションのルートレイアウトを定義する`RootLayout`コンポーネントです。
// グローバルスタイルをインポートし、フォントとして`Inter`と`PT_Serif`をGoogle Fontsから読み込みます。
// `PT_Serif`フォントのウェイトは400で、ラテン文字のサブセットのみを使用し、プリロードを無効にしています。
// メタデータとして、ページタイトルと説明を設定しています。
// `RootLayout`コンポーネントは、HTMLの基本構造を定義し、`PT_Serif`フォントを全体に適用します。
// `header`タグ内にタイトル「Portfolio Page」が表示され、レイアウト内で`props.children`が描画されます。

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PT_Serif } from "next/font/google";

const PTSerif400 = PT_Serif({
  weight: "400",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={PTSerif400.className}>
      <body>
        <header className="text-[4rem] h-60 bg-white flex relative">
          <h1 className="left-[4rem] bottom-[2rem] absolute">Portfolio Page</h1>
        </header>
        {props.children}
      </body>
    </html>
  );
}
