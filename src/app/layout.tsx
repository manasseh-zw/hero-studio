import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { harper, manrope, roboto } from "./font";
import AppNavbar from "@/Components/Navbar";
import Footer from "@/Sections/Footer";

export const metadata: Metadata = {
  title: "Hero Studio",
  description: "AI Powered Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Hero Studio" />
      </head>
      <body
        className={`
        ${manrope.variable} 
        ${roboto.variable} 
        ${roboto.className} 
        ${harper.variable} 
        antialiased
        `}
      >
        <Providers>
          <AppNavbar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
