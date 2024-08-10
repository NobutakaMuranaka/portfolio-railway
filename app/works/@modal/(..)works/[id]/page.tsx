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
