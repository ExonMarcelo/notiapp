import { Suspense } from "react";
import News from "./components/News";

export default function Home() {

  return (
    <>
      <h1 className="mt-[16px] text-[28px] font-bold text-[#2E3543] leading-normal">Noticias</h1>
      <Suspense fallback="Cargando noticias...">
        <News/>
      </Suspense>
    </>
  );
}
