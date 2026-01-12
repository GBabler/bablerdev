import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen py-32 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto space-y-24 relative z-10">

                {/* 1. Hero */}
                <div className="space-y-6 text-center">
                    <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-white">
                        Sobre a BABLER.
                    </h1>
                    <p className="reveal-on-scroll delay-100 text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        A BABLER. veio para facilitar a forma como softwares sob medida são desenvolvidos. Da comunicação à entrega, sem burocracia e sem complicações. Deixe a parte técnica com nosso time e foque no crescimento da sua empresa.
                    </p>
                </div>

                {/* 2. Fundador (Movido para cima para gerar conexão) */}
                <div className="reveal-on-scroll delay-200">
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0 shadow-2xl">
                            <Image
                                src="/perfil/perfil.jpeg"
                                alt="Gabriel Babler"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover scale-x-[-1]"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2 font-semibold">Fundador & CEO</p>
                            <h3 className="text-3xl font-bold text-white mb-4">Gabriel Babler</h3>
                            <p className="text-slate-300 leading-relaxed">
                                "Me chamo Gabriel, sou CEO e Fundador da BABLER. Criei essa empresa com um propósito claro, eliminar a dificuldade de comunicação técnica e usar a tecnologia para potencializar ideias reais, seja para um projeto pessoal, o pequeno empreendedor ou grandes empresas."
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Nosso diferencial */}
                <div className="space-y-8 reveal-on-scroll delay-300">
                    <h2 className="text-3xl font-bold text-white text-center">Nosso diferencial</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-colors group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Comunicação Simples</h3>
                            <p className="text-slate-400 text-sm">Nada de termos técnicos complicados. A gente explica tudo de um jeito simples, como uma conversa entre parceiros.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/30 transition-colors group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">Feito para Você</h3>
                            <p className="text-slate-400 text-sm">Seu projeto é único. Adaptamos o sistema para quem vai usar, facilitando a vida de quem tem dificuldade com tecnologia.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-pink-500/30 transition-colors group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-pink-400 transition-colors">Zero Templates</h3>
                            <p className="text-slate-400 text-sm">Não vendemos cópia. Cada projeto começa do zero, focado exclusivamente no problema que você precisa resolver.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-colors group">
                            <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">Identidade Própria</h3>
                            <p className="text-slate-400 text-sm">Layout, cores e fluxo. Tudo personalizado para que o sistema tenha a cara da sua empresa e fortaleça sua marca.</p>
                        </div>
                    </div>
                </div>

                {/* 4. Como funcionam as etapas */}
                <div className="space-y-8 reveal-on-scroll delay-400">
                    <h2 className="text-3xl font-bold text-white text-center">Como funcionam as etapas</h2>
                    <div className="space-y-4">
                        {[
                            { num: "01", title: "Conversa inicial", desc: "Você conta sua ideia e a gente entende o que precisa ser feito." },
                            { num: "02", title: "Proposta clara", desc: "Valor, prazo e escopo definidos. Sem surpresas." },
                            { num: "03", title: "Desenvolvimento", desc: "Mão na massa. Você recebe atualizações constantes." },
                            { num: "04", title: "Entrega e suporte", desc: "Seu sistema no ar e funcionando. Estamos aqui para ajudar." }
                        ].map((item) => (
                            <div key={item.num} className="flex gap-6 p-6 rounded-xl border border-white/10 bg-white/5 items-center">
                                <span className="text-4xl font-bold text-white/10 font-mono">
                                    {item.num}
                                </span>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Tecnologias */}
                <div className="space-y-8 reveal-on-scroll delay-500 text-center">
                    <h2 className="text-3xl font-bold text-white">Stack Tecnológica</h2>
                    <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                        {["C#", ".NET", "React", "Next.js", "TypeScript", "SQL Server", "Azure", "Docker"].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-slate-300 bg-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 6. CTA Final (Novo) */}
                <div className="pt-16 text-center reveal-on-scroll delay-500">
                    <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Tem um projeto em mente?</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Não deixe sua ideia na gaveta. Vamos conversar e entender como a tecnologia pode transformar o seu negócio.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                        >
                            Falar com a BABLER.
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
