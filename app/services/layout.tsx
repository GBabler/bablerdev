import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | BABLER. | Software Sob Medida",
  description: "Conheça os serviços da BABLER: desenvolvimento web, aplicativos mobile, sistemas de gestão, CRM, SaaS e muito mais.",
  keywords: ["serviços", "desenvolvimento", "web", "mobile", "SaaS", "CRM"],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
