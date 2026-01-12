export default function Services() {
    const services = [
        {
            title: "Construção",
            desc: "Sistemas web completos. Painéis administrativos, dashboards e aplicações sob medida.",
            tags: ["ASP.NET Core", "React", "SQL Server"]
        },
        {
            title: "Automação",
            desc: "Robôs e integrações. WhatsApp, ERPs e fluxos que eliminam erro humano.",
            tags: ["Python", "APIs", "Webhooks"]
        },
        {
            title: "Arquitetura",
            desc: "Infraestrutura sólida. APIs escaláveis, bancos otimizados e segurança enterprise.",
            tags: ["Azure", "Docker", "CI/CD"]
        }
    ];

    return (
        <div className="min-h-screen py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="space-y-4">
                    <h1 className="reveal-on-scroll text-4xl md:text-6xl font-bold text-zinc-900">
                        Serviços
                    </h1>
                    <p className="reveal-on-scroll delay-100 text-xl text-zinc-600">
                        Três modos de operação.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="p-8 rounded-lg border border-blue-100 hover:border-blue-300 transition-all space-y-6 bg-white hover:shadow-xl hover:scale-105 reveal-on-scroll"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-blue-600">{service.title}</h2>
                                <p className="text-zinc-600">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-blue-100 text-zinc-700 hover:scale-110 transition-transform">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
