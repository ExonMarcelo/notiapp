import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="relative min-w-[1120px] w-[1120px] grid grid-cols-12 gap-[32px]">
        {/* <header role="banner" className="min-h-screen grid col-span-3 fixed">header</header> */}
        <Sidebar/>
        <main className="justify-center col-start-4 col-span-6 h-[3000px] bg-white">
          <article className="">
            <p>Notice 1</p>
          </article>
        </main>
        <aside className="min-h-screen grid col-start-10 col-span-3 fixed">
          <p>sidebar</p>
        </aside>
      </div>
    </div>
  );
}
