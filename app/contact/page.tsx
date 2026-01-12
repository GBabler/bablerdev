"use client";

import { ArrowRight, MessageSquare, Mail, Linkedin } from "lucide-react";

export default function Contact() {
    const whatsappLink = "https://wa.me/5519993051548?text=Olá! Vi o site e quero construir uma solução.";
    const emailLink = "mailto:gabriel.babler1@hotmail.com";
    const linkedinLink = "https://www.linkedin.com/in/babler/";

    const contacts = [
        {
            icon: MessageSquare,
            title: "WhatsApp",
            subtitle: "(19) 99305-1548",
            href: whatsappLink,
            gradient: "from-green-500 to-emerald-600",
            hoverColor: "hover:border-green-500/50"
        },
        {
            icon: Mail,
            title: "Email",
            subtitle: "gabriel.babler1@hotmail.com",
            href: emailLink,
            gradient: "from-cyan-500 to-blue-600",
            hoverColor: "hover:border-cyan-500/50"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            subtitle: "linkedin.com/in/babler",
            href: linkedinLink,
            gradient: "from-blue-500 to-indigo-600",
            hoverColor: "hover:border-blue-500/50"
        }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/15 to-purple-600/15 rounded-full blur-3xl"
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl"
            />

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 py-32">
                <div className="space-y-6">
                    <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-white">
                        Vamos conversar?
                    </h1>

                    <p className="reveal-on-scroll delay-100 text-xl text-slate-400">
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
                                className={`group p-8 rounded-2xl border border-white/10 ${contact.hoverColor} transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10 reveal-on-scroll`}
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <div className="space-y-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-1">{contact.title}</h3>
                                        <p className="text-sm text-slate-400">{contact.subtitle}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="pt-8 border-t border-white/10 reveal-on-scroll delay-500">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 font-semibold transition-all hover:gap-3"
                    >
                        Iniciar conversa agora
                        <ArrowRight className="w-5 h-5 text-purple-400" />
                    </a>
                </div>
            </div>
        </div>
    );
}
