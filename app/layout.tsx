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
  title: "Dan Gomes",
  description: `Portfolio of ${siteConfig.name}, ${siteConfig.role}. TypeScript, React, and Next.js. Building polished, scalable products across web and mobile.`,
  metadataBase: new URL("https://thedangomes.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: `Portfolio of ${siteConfig.name}, ${siteConfig.role}. TypeScript, React, and Next.js. Building polished, scalable products across web and mobile.`,
    url: "https://thedangomes.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: `Portfolio of ${siteConfig.name}, ${siteConfig.role}. TypeScript, React, and Next.js. Building polished, scalable products across web and mobile.`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className="font-mono">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-fg focus:text-bg focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
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
