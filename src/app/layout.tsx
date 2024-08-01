import type { Metadata } from "next";
import { Roboto_Flex, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

//const inter = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const inter = Roboto_Flex({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TagConnect",
  description: "Providing Automation Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        {/* <nav className="overflow-x-hidden">
          <Navbar />
        </nav> */}
        {children}
        </body>
    </html>
  );
}
