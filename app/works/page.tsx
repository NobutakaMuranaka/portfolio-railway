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
