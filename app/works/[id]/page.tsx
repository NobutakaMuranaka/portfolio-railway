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
