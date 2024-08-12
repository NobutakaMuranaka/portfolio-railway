// このコンポーネントは、作品の概要を表示するための`Card`コンポーネントです。
// `workId`, `title`, `imageSrc`を受け取り、作品のリンク付きカードを作成します。
// カード全体がリンクになっており、クリックすると対応する作品の詳細ページ (`/works/{workId}`) へ遷移します。
// カード内には、指定された画像 (`imageSrc`) が表示され、その下に作品のタイトル (`title`) が表示されます。
// 画像は指定の高さと幅で表示され、カードのスタイルは角が丸められた白い背景を持ち、適切なパディングとマージンが設定されています。

import Link from "next/link";
import Image from "next/image";

export default function Card({
  workId,
  title,
  imageSrc,
}: {
  workId: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <Link href={`/works/${workId}`}>
      {" "}
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
        <Image
          alt=""
          src={imageSrc}
          height={300}
          width={400}
          className="w-full object-cover mb-5"
        />
        <h2 className="text-[1.5rem]">{title}</h2>
      </div>
    </Link>
  );
}
