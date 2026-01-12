"use client";

import { useState } from "react";

export default function Services() {
    const tagExplanations: Record<string, string> = {
        "Gestão": "Organize clientes, vendas e processos em um só lugar",
        "CRM": "Sistema para gerenciar relacionamento com clientes",
        "SaaS": "Software como serviço, acessível de qualquer lugar",
        "Métricas": "Números que mostram como seu negócio está performando",
        "Relatórios": "Resumos visuais dos dados do seu negócio",
        "KPIs": "Indicadores-chave de performance do seu negócio",
        "iOS": "Sistema operacional do iPhone e iPad",
        "Android": "Sistema operacional de celulares Samsung, Motorola, etc",
        "Desktop": "Computadores e notebooks",
        "Mobile": "Celulares e tablets",
        "Autoatendimento": "Cliente faz sozinho, sem precisar de atendente",
        "Catálogos": "Mostra produtos e preços de forma visual",
        "Lojas": "Estabelecimentos comerciais físicos"
    };

    const services = [
        {
            title: "Apps Mobile",
            desc: "Aplicativos nativos para iOS e Android. Coloque seu negócio na palma da mão do seu cliente com experiência fluida.",
            tags: ["iOS", "Android"],
            gradient: "from-green-500 to-emerald-600"
        },
        {
            title: "Sistemas Web",
            desc: "Plataformas completas para gestão do seu negócio. CRMs, agendamentos e controle financeiro. Tudo integrado e acessível de qualquer lugar.",
            tags: ["Gestão", "CRM", "SaaS"],
            gradient: "from-cyan-500 to-blue-600"
        },
        {
            title: "Dashboards",
            desc: "Painéis visuais com métricas e KPIs em tempo real. Transforme dados em decisões inteligentes com relatórios claros e intuitivos.",
            tags: ["Métricas", "Relatórios", "KPIs"],
            gradient: "from-purple-500 to-pink-600"
        },
        {
            title: "Design Responsivo",
            desc: "Interfaces que se adaptam perfeitamente a qualquer dispositivo. Do smartphone ao monitor ultra-wide, sua marca brilha em todas as telas.",
            tags: ["Desktop", "Mobile"],
            gradient: "from-orange-500 to-red-600"
        },
        {
            title: "Totens Interativos",
            desc: "Telas touch para sua loja ou estabelecimento. Cardápios digitais, catálogos de produtos, check-in automático e autoatendimento. Seu cliente se serve sozinho.",
            tags: ["Autoatendimento", "Catálogos", "Lojas"],
            gradient: "from-yellow-500 to-amber-600"
        }
    ];

    // Split services into left and right columns
    const leftColumn = services.filter((_, i) => i % 2 === 0);
    const rightColumn = services.filter((_, i) => i % 2 === 1);

    const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
        <div
            className="p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10 reveal-on-scroll"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${service.gradient} mb-3`} />
            <h2 className="text-lg font-bold text-white mb-2">{service.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            <div className="flex flex-wrap gap-1 mt-3">
                {service.tags.map(tag => (
                    <div key={tag} className="relative group/tag">
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-slate-400 cursor-help hover:bg-white/10 hover:text-white transition-colors">
                            {tag}
                        </span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-800 text-white text-xs rounded-lg whitespace-nowrap shadow-xl border border-white/10 z-50 opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-200">
                            {tagExplanations[tag]}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen py-24 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="absolute -top-40 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-pink-500/15 to-purple-600/15 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                <div className="space-y-3 text-center">
                    <h1 className="reveal-on-scroll text-4xl md:text-5xl font-bold text-white">
                        O que fazemos
                    </h1>
                    <p className="reveal-on-scroll delay-100 text-lg text-slate-400 max-w-2xl mx-auto">
                        Sistemas sob medida para pequenas, médias e grandes empresas.
                    </p>
                </div>

                {/* Staggered Two-Column Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {leftColumn.map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i * 2} />
                        ))}
                    </div>

                    {/* Right Column - Offset by 50% of card height */}
                    <div className="space-y-6 md:mt-24">
                        {rightColumn.map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i * 2 + 1} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center pt-6 reveal-on-scroll delay-200">
                    <p className="text-slate-400 mb-4">Tire sua ideia do papel e faça seu negócio crescer.</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/20"
                    >
                        Falar com a BABLER.
                    </a>
                </div>
            </div>
        </div>
    );
}
