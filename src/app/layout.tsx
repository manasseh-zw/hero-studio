import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { harper, roboto } from "./font";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        ${roboto.variable} 
        ${roboto.className} 
        ${harper.variable}
        antialiased
        `}
      >
        <Providers>
          <AppNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
