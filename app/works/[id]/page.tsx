// このコンポーネントは、特定の作品ページを表示する`WorkPage`コンポーネントです。
// URLのパラメータから作品のID (`id`) を取得し、そのIDに基づいて`fetchWorks`関数から取得した作品データを検索します。
// 該当するデータが見つからない場合は、「データが見つかりませんでした。」というメッセージを表示します。
// データが見つかった場合は、`CardDetail`コンポーネントを使用して、指定された作品の詳細を表示します。
// レイアウトとして、ページ全体の横幅の8/12を使用し、コンテンツを中央に配置しています。

import { fetchWorks, Work } from "../../data";
import CardDetail from "../components/CardDetail/CardDetail";

export default async function WorkPage({ params }: { params: { id: string } }) {
  const works: Work[] = await fetchWorks();
  const data = works.find((work) => work.workId === params.id);

  if (!data) {
    return <div>データが見つかりませんでした。</div>;
  }

  return (
    <div className="w-8/12 container mx-auto my-10">
      <CardDetail data={data} />
    </div>
  );
}
