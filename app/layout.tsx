import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
