import type { Metadata } from "next";
import { Roboto_Flex, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

//const inter = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tagdynamix",
  description: "Providing Automation Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      
     
      <body>
        <SmoothScroll>
          
          {children}
          <Footer />
        </SmoothScroll>
        </body>
    </html>
  );
}
