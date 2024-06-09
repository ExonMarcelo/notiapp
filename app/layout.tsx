import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotiApp",
  description: "Noticias políticas 100% verficadas",
  keywords: ["peru", "perú", "estado", "gobierno peruano", "gobierno", "peruano", "politicos", "políticos"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={workSans.className}>
        <div className="flex justify-center w-full">
          <div className="relative min-w-[1120px] w-[1120px] grid grid-cols-12 gap-[32px]">
            <Sidebar/>
            <main className="justify-center col-start-4 col-span-6">
              {children}
            </main>
            <aside className="min-h-screen col-start-10 col-end-13 relative bg-white">
              <p>Tendencias</p>
              <p>Noticias destacadas</p>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
