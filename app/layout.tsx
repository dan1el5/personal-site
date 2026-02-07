import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Nav } from "@/components/layout/Nav";
import { PageLoader } from "@/components/layout/PageLoader";
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
        <CustomCursor />
        <PageLoader>
          <ScrollProgress />
          <Nav />
          {children}
        </PageLoader>
      </body>
    </html>
  );
}
