import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import FloatingChatButton from "@/components/FloatingChatButton";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import LoaderWrapper from "@/components/LoaderWrapper";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Christian Faith Mestola | Full-Stack Web Developer",
  description: "Portfolio of Christian Faith Mestola, a Full-Stack Web Developer building modern, scalable, and beautifully designed web applications.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`overflow-x-hidden ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="overflow-x-hidden font-sans">
        <LoaderWrapper>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <FloatingChatButton />
        </LoaderWrapper>
      </body>
    </html>
  );
}
