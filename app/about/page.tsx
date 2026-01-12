export default function About() {
    return (
        <div className="min-h-screen py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-6">
                    <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-zinc-900">
                        Sobre nós
                    </h1>

                    <div className="space-y-4 text-lg text-zinc-600">
                        <p className="reveal-on-scroll delay-100">
                            A Babler Dev nasceu para resolver um problema simples: a maioria das empresas de software vende horas, não soluções.
                        </p>
                        <p className="reveal-on-scroll delay-200">
                            Nossa missão é criar software que realmente impacta o resultado final. Sem burocracia, sem jargão técnico desnecessário.
                        </p>
                        <p className="font-medium text-zinc-900 reveal-on-scroll delay-300">
                            Apenas engenharia sólida focada em resultados.
                        </p>
                    </div>
                </div>

                <div className="space-y-6 reveal-on-scroll delay-200">
                    <h2 className="text-2xl font-bold text-zinc-900">Nossa metodologia</h2>

                    <div className="grid gap-6">
                        {[
                            { num: "01", title: "Diagnóstico", desc: "Entendemos a dor real, não o sintoma." },
                            { num: "02", title: "Arquitetura", desc: "Desenhamos a solução para escalar." },
                            { num: "03", title: "Construção", desc: "Código limpo, testado e documentado." },
                            { num: "04", title: "Evolução", desc: "Software vivo que cresce com você." }
                        ].map((item, index) => (
                            <div
                                key={item.num}
                                className="flex gap-4 p-6 rounded-lg border border-blue-100 hover:border-blue-300 transition-all bg-white hover:shadow-lg hover:scale-105 reveal-on-scroll-left"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="font-mono text-blue-600 font-bold">{item.num}</span>
                                <div>
                                    <h3 className="font-semibold mb-1 text-zinc-900">{item.title}</h3>
                                    <p className="text-zinc-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 reveal-on-scroll delay-300">
                    <h2 className="text-2xl font-bold text-zinc-900">Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {["C#", ".NET", "React", "Next.js", "TypeScript", "SQL Server", "Azure", "Docker"].map((tech, index) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full border border-blue-100 hover:border-blue-300 text-sm font-medium transition-all text-zinc-700 hover:scale-110 reveal-on-scroll"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
