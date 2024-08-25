import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { useTranslation } from 'next-i18next'
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibm = IBM_Plex_Serif({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon是一个现代银行平台",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}${ibm.variable}`}>{children}</body>
    </html>
  );
}
