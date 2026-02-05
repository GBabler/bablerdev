import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | BABLER. | Entre em Contato Conosco",
  description: "Fale conosco! Estamos prontos para transformar sua ideia em realidade. Contate a BABLER. por email, WhatsApp ou LinkedIn.",
  keywords: ["contato", "whatsapp", "email", "suporte"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
