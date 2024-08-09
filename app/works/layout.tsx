export default function WorksLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className="bg-gray-200 h-max py-[2rem]">
      <h2 className="text-[3rem] w-[30rem] border-b border-solid border-gray-400 mb-[2rem] mx-8 max-w-fit">
        Works
      </h2>
      <p className="mx-8 text-[1.5rem]">
        村中（<a href="https://x.com/wage790">@ayatakaa_chan</a>）の旅の記憶
      </p>
      <p className="mx-8 text-[1.5rem]">見過ごしてた景色は億千万</p>
      {props.children}
      {props.modal}
    </main>
  );
}
