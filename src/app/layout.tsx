import type { Metadata } from "next";
import { Syne, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./provider";


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "CreatorLock",
  description: "Platform for creators",
  openGraph: {
  title: "CreatorLock — Join the Waitlist",
  description: "Get early access to CreatorLock.",
  images: ["/og-icon.png"], 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${syne.variable} ${inter.variable} ${spaceMono.variable}`}><Providers>{children}</Providers></body>
    </html>
  );
}
