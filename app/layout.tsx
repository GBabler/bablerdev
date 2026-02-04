import type { Metadata } from "next";
import { Ubuntu_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollObserver } from "@/components/effects/ScrollObserver";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  // Variable font does not require weight array
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BABLER. | Software Sob Medida",
  description: "Desenvolvimento de software, sistemas web e automação de processos.",
  keywords: ["software house", "desenvolvimento web", "automação", "Next.js", "C#"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntuSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505]`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5971787155500943"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <ScrollObserver />

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
