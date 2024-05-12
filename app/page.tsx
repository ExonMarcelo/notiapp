import { Inter } from "next/font/google";
import Link from "next/link";
import icons from "./utils/icons";

const lato = Inter({subsets: ["latin"]});


export default function Home() {
  return (
    <>
      <h1 className="mt-[16px] text-[28px] font-bold text-[#2E3543] leading-normal">Noticias</h1>
      <div className="mt-[24px]">
        <Link href={`/noticias/23`}>
          <article className="p-[16px] flex flex-col bg-white rounded-xl">
            <div className="flex gap-[16px]">
                <img src="https://elperuano.pe/fotografia/thumbnail/2020/03/16/000075468M.jpg" className="w-[160px] h-[140px] object-cover rounded-xl"/>
              <div>
                <h2 className="text-[16px] font-semibold text-[#2E3543] leading-[20px]">Contraloría indaga por decretos emitidos por gobierno de Boluarte a favor de</h2>
                <div className="mt-4 flex gap-4">
                  <span className="p-[4px] pt-2 pb-2 text-[10px] font-medium bg-[#F2F2F2] text-[#303651] rounded-md">Wilfredo Oscorima</span>
                  <span className="p-[4px] pt-2 pb-2 text-[10px] font-medium bg-[#F2F2F2] text-[#303651] rounded-md">Dina Boluarte</span>
                </div>
                <p className={`mt-4 ${lato.className} text-[12px] leading-normal tracking-[0.2px]`}>Ente de control intervino las sedes regionales de Ayacucho y de Cusco, tras advertir también presuntas irregularidades en adjudicaciones a proveedor.</p>
                <div className="mt-4 flex gap-12">
                  <div className="flex items-center gap-4">
                    <div>
                      {icons.IconPencilBook}
                    </div>
                    <span className="text-[10px] text-[#2E3543] font-medium">Jorge Calmet</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      {icons.IconCalendar}
                    </div>
                    <span className="text-[10px] text-[#2E3543] font-medium">10/03/2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div>coments / likes</div>
          </article>
        </Link>
      </div>
    </>
  );
}
