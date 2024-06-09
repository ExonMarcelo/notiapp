"use client"
import Link from "next/link";
import styles from "./index.module.css";
import Icons from "@/app/utils/icons";
import { useState } from "react";
import SearchBar from "../SearchBar";
import Image from "next/image";
import Modal from "../Modal";
import UserForm from "../UserForm";

// import { Copy } from "lucide-react"
 
// import { Button } from "@/components/ui/button"

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"



  

export default function Sidebar(){
    const [ itemSelected ] =  useState(1)
    const [ showRegister, setShowRegister ] =  useState<boolean>(false)
    const dataItems = [
        {   
            id: 1,
            label: "Noticias",
            icon: Icons.IconNews,
            url: "/"
        },
        {
            id: 2,
            label: "Partidos Políticos",
            icon: Icons.IconGroups,
            url: "/partidos-politicos"
        },
        {
            id: 3,
            label: "Encuestas",
            icon: Icons.IconList,
            url: "/encuestas"
        },
        {
            id: 4,
            label: "Favoritos",
            icon: Icons.IconFavorites,
            url: "/favoritos"
        },
    ]

    

    return(
        <nav role="banner" className={`min-h-screen col-start-1 col-end-4 relative bg-white`}>
            <div className={`${styles.sideBar} flex flex-col justify-between h-full`}>
                <div className="flex flex-col gap-24">
                    <Link href="/" className="flex justify-center">
                        <Image src="../../assets/logo.svg" alt="Logo NotiApp" width={180} height={40}/>
                    </Link>
                    <SearchBar/>
                    <ul className="mt-8 flex flex-col gap-24">
                        {
                            dataItems.map((item, index) => 
                                <li key={`itemList${index}`}>
                                    <Link 
                                        href={item.url} 
                                        className={`flex items-center gap-8 ${styles.sideBarItem} ${itemSelected === item.id ? styles.sideBarItemSelected: ''}`}>
                                        <div>
                                            {item.icon}
                                        </div>
                                        <span className="font-semibold text-[16px]" >{item.label}</span>
                                    </Link>

                                </li>    
                            )
                        }
                    </ul>
                </div>
                <div>
                    <p>incio de sesión</p>
                    <button onClick={()=>setShowRegister(true)}>open</button>
                    <Modal
                        open={showRegister} 
                        onOpenChange={setShowRegister}
                        title="Inicia Sesión"
                        description="Ingresa tus datos y empieza a interactuar">
                        <UserForm mode="register"/>
                    </Modal>
                </div>
            </div>
        </nav>
    )
}