"use client";

import { ArrowRight, MessageSquare, Mail, Linkedin } from "lucide-react";

export default function Contact() {
    const whatsappLink = "https://wa.me/5511999999999?text=Olá! Vi o site e quero construir uma solução.";
    const emailLink = "mailto:contato@bablerdev.com";
    const linkedinLink = "https://www.linkedin.com/in/babler/";

    const contacts = [
        {
            icon: MessageSquare,
            title: "WhatsApp",
            subtitle: "Resposta rápida",
            href: whatsappLink,
        },
        {
            icon: Mail,
            title: "Email",
            subtitle: "contato@bablerdev.com",
            href: emailLink,
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            subtitle: "linkedin.com/in/babler",
            href: linkedinLink,
        }
    ];

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-6 bg-white">
            <div className="max-w-3xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-zinc-900">
                        Vamos conversar?
                    </h1>

                    <p className="reveal-on-scroll delay-100 text-xl text-zinc-600">
                        Escolha o canal que preferir para iniciar nossa conversa.
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-6">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={contact.title}
                                href={contact.href}
                                target={contact.href.startsWith('http') ? "_blank" : undefined}
                                rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="group p-8 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl bg-white hover:scale-110 reveal-on-scroll"
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-zinc-900 mb-1">{contact.title}</h3>
                                        <p className="text-sm text-zinc-600">{contact.subtitle}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="pt-8 border-t border-blue-100 reveal-on-scroll delay-500">
                    <p className="text-sm text-zinc-500 mb-4">
                        Projetos a partir de R$ 15k
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all hover:gap-3"
                    >
                        Iniciar conversa agora
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
