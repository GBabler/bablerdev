import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen py-32 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto space-y-16 relative z-10">

                {/* Hero */}
                <div className="space-y-6">
                    <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-white">
                        Sobre a BABLER.
                    </h1>
                    <p className="reveal-on-scroll delay-100 text-xl text-slate-400 leading-relaxed max-w-2xl">
                        A BABLER. existe para simplificar. Você compartilha sua ideia, a gente alinha as expectativas juntos e cuida de todo o desenvolvimento. O foco é no resultado, não na burocracia.
                    </p>
                </div>

                {/* O que nos move */}
                <div className="space-y-6 reveal-on-scroll delay-200">
                    <h2 className="text-2xl font-bold text-white">O que nos move</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="text-white font-semibold mb-2">Transparência</h3>
                            <p className="text-slate-400 text-sm">Você sabe exatamente o que está sendo feito e quando vai ficar pronto.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="text-white font-semibold mb-2">Simplicidade</h3>
                            <p className="text-slate-400 text-sm">Sem jargão técnico desnecessário. A gente explica tudo de forma clara.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="text-white font-semibold mb-2">Resultado</h3>
                            <p className="text-slate-400 text-sm">Software que funciona e resolve problemas reais do seu negócio.</p>
                        </div>
                    </div>
                </div>

                {/* Como funciona */}
                <div className="space-y-6 reveal-on-scroll delay-300">
                    <h2 className="text-2xl font-bold text-white">Como funciona</h2>
                    <div className="space-y-4">
                        {[
                            { num: "01", title: "Conversa inicial", desc: "Você conta sua ideia e a gente entende o que precisa ser feito." },
                            { num: "02", title: "Proposta clara", desc: "Valor, prazo e escopo definidos. Tudo combinado antes de começar." },
                            { num: "03", title: "Desenvolvimento", desc: "Atualizações frequentes para você acompanhar o progresso." },
                            { num: "04", title: "Entrega e suporte", desc: "Projeto entregue com suporte incluso. Você não fica na mão." }
                        ].map((item) => (
                            <div key={item.num} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold font-mono">
                                    {item.num}
                                </span>
                                <div>
                                    <h3 className="text-white font-semibold">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stack */}
                <div className="space-y-4 reveal-on-scroll delay-400">
                    <h2 className="text-2xl font-bold text-white">Tecnologias</h2>
                    <div className="flex flex-wrap gap-2">
                        {["C#", ".NET", "React", "Next.js", "TypeScript", "SQL Server", "Azure", "Docker"].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-300 bg-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Fundador */}
                <div className="pt-10 border-t border-white/10 reveal-on-scroll delay-500">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0">
                            <Image
                                src="/perfil/perfil.jpeg"
                                alt="Gabriel Babler"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover scale-x-[-1]"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">Fundador</p>
                            <h3 className="text-2xl font-bold text-white mb-3">Gabriel Babler</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Bacharel em Ciência da Computação pela turma de 2025. Criei a BABLER. para provar que desenvolver software não precisa ser complicado. Você traz a ideia, eu faço acontecer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
