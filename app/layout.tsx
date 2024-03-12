import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCCG Tabernacle of David",
  description: "Tabernacle of David | The place of His presence",
};

const satoshi = localFont({
  src: [
    {
      path: "../font/satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../font/satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} font-sans`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
