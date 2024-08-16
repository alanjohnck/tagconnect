import type { Metadata } from "next";
import { Roboto_Flex, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

//const inter = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const inter = Roboto_Flex({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TagDynamix",
  description: "Providing Automation Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden ">
     
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        </body>
    </html>
  );
}
