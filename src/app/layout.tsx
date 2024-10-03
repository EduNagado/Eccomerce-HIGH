import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";




const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Eduardo Nagado",
  description: "Primeiro Eccomerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={montserrat.className}>
        <Header/>
        {children}
        <Footer/>
      </body>

    </html> 
  );
} 