"use client";
import Link from "next/link";
import useNews from "./useNews";
import icons from "@/app/utils/icons";
import { Inter } from "next/font/google";
const inter = Inter({subsets: ["latin"]});

export default function News(){
    
    const {
        listPosts, isLoadingPosts
    } = useNews()

    return(
        <>
            <h1 className="mt-[16px] text-[28px] font-bold text-[#2E3543] leading-normal">Noticias</h1>
            {
                isLoadingPosts ?
                <p>Cargando...</p>
                :
                listPosts.map((item: any)=>
                    <div className="mt-[24px]">
                        <Link href={`/noticias/23`}>
                        <article className="p-[16px] flex flex-col bg-white rounded-xl">
                            <div className="flex gap-[16px]">
                                <img src={item.image} className="w-[160px] h-[140px] object-cover rounded-xl"/>
                            <div>
                                <h2 className="text-[16px] font-semibold text-[#2E3543] leading-[20px]">{item.title}</h2>
                                <div className="mt-4 flex gap-4">
                                    <span className="p-[4px] pt-2 pb-2 text-[10px] font-medium bg-[#F2F2F2] text-[#303651] rounded-md">Wilfredo Oscorima</span>
                                    <span className="p-[4px] pt-2 pb-2 text-[10px] font-medium bg-[#F2F2F2] text-[#303651] rounded-md">Dina Boluarte</span>
                                </div>
                                <p className={`mt-4 ${inter.className} text-[12px] leading-normal tracking-[0.2px]`}>{item.body}</p>
                                <div className="mt-4 flex gap-12">
                                <div className="flex items-center gap-4">
                                    <div>
                                    {icons.IconPencilBook}
                                    </div>
                                    <span className="text-[10px] text-[#2E3543] font-medium">{item.author.fullName}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div>
                                    {icons.IconCalendar}
                                    </div>
                                    <span className="text-[10px] text-[#2E3543] font-medium">{item.createdAt}</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="flex justify-end gap-12">
                            <div className="flex items-center gap-2">
                                <div>
                                {icons.IconCalendar}
                                </div>
                                <span className="text-[12px] text-[#605DFF]">{item.likes}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                {icons.IconCalendar}
                                </div>
                                <span className="text-[12px] text-[#605DFF]">{item.comments.length}</span>
                            </div>
                            </div>
                        </article>
                        </Link>
                    </div>
                )
            }
        </>
    )
}