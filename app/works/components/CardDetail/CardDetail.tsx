// このコンポーネントは、特定の作品の詳細情報を表示する`CardDetail`コンポーネントです。
// `data`として渡された作品データ (`Work` 型) を受け取り、作品の画像、タイトル、および説明を表示します。
// 画像は指定された高さと幅で表示され、カード全体は中央揃えで配置され、角が丸められた白い背景を持つデザインになっています。
// カードは適切なパディングを持ち、グレーの境界線で囲まれています。
// タイトルは中央に配置され、作品の説明がその下に表示されます。

import Image from "next/image";
import { Work } from "../../../data";

export default function CardDetail({ data }: { data: Work }) {
  return (
    <div className="p-6 lg:p-10 w-50 bg-white rounded-lg flex flex-col items-center border-gray-700 border-2">
      <Image
        alt=""
        src={data.imageSrc}
        height={600}
        width={800}
        className="col-span-2 mb-6"
      />
      <div>
        <h2 className="text-[1.5rem] mb-2 text-center">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
