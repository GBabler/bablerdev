import type { Metadata } from "next";
import { Ubuntu_Sans, JetBrains_Mono } from "next/font/google";
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
  description: "Desenvolvimento de software, sistemas web e automação de processos. Transformamos ideias em realidade digital com tecnologia de ponta.",
  keywords: ["software house", "desenvolvimento web", "automação", "Next.js", "C#", "software sob medida"],
  metadataBase: new URL("https://bablerdev.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bablerdev.com.br",
    title: "BABLER. | Software Sob Medida",
    description: "Desenvolvimento de software, sistemas web e automação de processos.",
    siteName: "BABLER.",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bablerdev.com.br" />
      </head>
      <body className={`${ubuntuSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505]`}>
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
