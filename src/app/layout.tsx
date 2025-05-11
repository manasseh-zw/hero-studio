import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { harper, manrope, roboto } from "./font";

export const metadata: Metadata = {
  title: "Hero Studio",
  description: "AI App Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${manrope.className} ${manrope.variable} 
        ${roboto.variable} 
        ${harper.variable} 
        antialiased
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
