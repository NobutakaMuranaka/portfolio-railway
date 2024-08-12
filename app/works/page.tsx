// このコンポーネントは、作品一覧ページを表示する`Works`コンポーネントです。
// データ取得用の`fetchWorks`関数を呼び出し、取得した作品データを`Work[]`として受け取ります。
// 取得した作品データを`Card`コンポーネントに渡し、グリッドレイアウトで一覧表示します。
// グリッドレイアウトは、画面サイズに応じて1列から最大3列まで変化し、各カード間にギャップを設けています。
// 各カードは`workId`をキーとして一意に識別され、タイトルと画像を表示します。

import { fetchWorks, Work } from "../data";
import Card from "./components/Card/Card";

export default async function Works() {
  const works: Work[] = await fetchWorks();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-5">
      {works.map(({ workId, title, imageSrc }) => (
        <Card key={workId} workId={workId} title={title} imageSrc={imageSrc} />
      ))}
    </div>
  );
}
