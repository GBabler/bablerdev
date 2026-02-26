import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leitor de QR Code | BABLER',
  description: 'Aplicação para ler e decodificar QR codes. Ferramenta rápida e prática para seus códigos QR.',
  keywords: ['QR code', 'leitor', 'códigos QR', 'decodificador'],
};

export default function LeitorBarrasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="canonical" href="https://leitorbarras.bablerdev.com.br" />
      </head>
      <body className="antialiased bg-[#050505]">
        {children}
      </body>
    </html>
  );
}
