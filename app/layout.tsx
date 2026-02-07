import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: `Portfolio of ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className="font-mono">
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  );
}
