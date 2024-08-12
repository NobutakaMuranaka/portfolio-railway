// このコンポーネントは、特定の写真の詳細をモーダルで表示する`PhotoModal`コンポーネントです。
// URLのパラメータから写真のID (`id`) を取得し、そのIDに基づいて`fetchWorks`関数から取得した作品データを検索します。
// 該当するデータが見つからない場合は、「データが見つかりませんでした。」というメッセージを表示します。
// データが見つかった場合は、`Modal`コンポーネント内に`CardDetail`コンポーネントを表示し、写真の詳細情報をモーダルで表示します。

import CardDetail from "../../../components/CardDetail/CardDetail";
import Modal from "../../../components/Modal/Modal";
import { fetchWorks, Work } from "../../../../data";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const works: Work[] = await fetchWorks();
  const data = works.find((p) => p.workId === id);

  if (!data) {
    return <div>データが見つかりませんでした。</div>;
  }

  return (
    <Modal>
      <CardDetail data={data} />
    </Modal>
  );
}
