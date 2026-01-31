"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2, Database, Terminal, Cpu, Layers, Braces, Hash } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden selection:bg-pink-500 selection:text-white">

      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-dot-pattern opacity-20 pointer-events-none" />

      {/* 2. Geometric Ribbons (The "Neon Tech" reference) */}

      {/* Bottom Left Ribbon - Neon Pink/Purple */}
      <div
        className="absolute -bottom-20 -left-20 w-[600px] h-[300px] bg-gradient-to-r from-pink-600 to-purple-600 transform -rotate-12 opacity-90 z-0"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
      />

      {/* Top Right Ribbon - Cyan/Blue */}
      <div
        className="absolute -top-32 -right-10 w-[700px] h-[400px] bg-gradient-to-l from-cyan-500 to-blue-600 transform -rotate-[25deg] opacity-80 z-0"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />




      {/* NAVBAR PLACEHOLDER */}

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: CONTENT (Vertically Centered) */}
          <div className="flex flex-col justify-center space-y-8 hero-animate relative">




            {/* Headline - "Neon Tech" Style */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-[20ch]">
              Tiramos sua ideia do papel
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 block mt-2">
                realidade digital.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-lg">
              Construímos o <span className="text-cyan-400 font-semibold">motor</span> do seu próximo sucesso.
              Tecnologia de ponta, design agressivo e performance absoluta.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-xl border border-pink-500/50 text-white font-bold transition-all hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  TIRAR DO PAPEL
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: 3D ISOMETRIC COMPOSITION */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px] hero-animate delay-300"
          >
            {/* The 3D Container */}
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">

              {/* Laptop Base/Screen Simulation */}
              <div className="absolute inset-0 bg-[#0f0f0f] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl transform transition-transform hover:scale-[1.02] duration-500 group">
                {/* Glow effect underneath */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>

                {/* Header */}
                <div className="relative z-10 h-10 bg-black/80 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-auto text-[10px] text-slate-500 font-mono">CODE_V2.tsx</div>
                </div>

                {/* Code Content */}
                <div className="relative z-10 p-5 space-y-2 font-mono text-xs md:text-sm bg-black/90 h-full overflow-hidden">
                  <div className="text-slate-500 text-[10px]">{"// babler.dev"}</div>

                  <div className="h-1"></div>

                  <div className="flex gap-2">
                    <span className="text-pink-500">function</span>
                    <span className="text-yellow-400">olaMundo</span>
                    <span className="text-white">() {"{"}</span>
                  </div>

                  <div className="pl-4 border-l border-cyan-500/30 ml-2">
                    <div className="flex gap-2">
                      <span className="text-cyan-400">console</span>
                      <span className="text-white">.</span>
                      <span className="text-yellow-400">log</span>
                      <span className="text-white">(</span>
                      <span className="text-green-400">{'"Olá, Mundo!"'}</span>
                      <span className="text-white">)</span>
                    </div>
                  </div>

                  <div className="text-white">{"}"}</div>

                  <div className="h-2"></div>

                  <div className="flex gap-2">
                    <span className="text-pink-500">for</span>
                    <span className="text-white">(</span>
                    <span className="text-pink-500">let</span>
                    <span className="text-cyan-400"> i</span>
                    <span className="text-white"> = </span>
                    <span className="text-orange-400">0</span>
                    <span className="text-white">;</span>
                    <span className="text-cyan-400"> i</span>
                    <span className="text-white"> {"<"} </span>
                    <span className="text-orange-400">3</span>
                    <span className="text-white">;</span>
                    <span className="text-cyan-400"> i</span>
                    <span className="text-white">++) {"{"}</span>
                  </div>

                  <div className="pl-4 border-l border-pink-500/30 ml-2">
                    <div className="flex gap-2">
                      <span className="text-yellow-400">olaMundo</span>
                      <span className="text-white">()</span>
                    </div>
                  </div>

                  <div className="text-white">{"}"}</div>

                  <div className="h-3"></div>

                  <div className="text-slate-400 text-[10px]">{">"} Olá, Mundo!</div>
                  <div className="text-slate-400 text-[10px]">{">"} Olá, Mundo!</div>
                  <div className="text-slate-400 text-[10px]">{">"} Olá, Mundo!</div>
                </div>
              </div>

              {/* Floating Icons that follow mouse */}
              {/* Pink - Code */}
              <div
                className={`absolute -left-12 top-20 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` } : {}}
              >
                <div className="bg-black p-3 border border-pink-500/50 shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] rounded-lg">
                  <Code2 className="text-pink-500 w-6 h-6" />
                </div>
              </div>

              {/* Cyan - CPU */}
              <div
                className={`absolute -right-8 bottom-32 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim-delay' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)` } : {}}
              >
                <div className="bg-black p-3 border border-cyan-500/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] rounded-lg">
                  <Cpu className="text-cyan-500 w-6 h-6" />
                </div>
              </div>

              {/* Purple - Database */}
              <div
                className={`absolute -right-10 top-16 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` } : {}}
              >
                <div className="bg-black p-3 border border-purple-500/50 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] rounded-lg">
                  <Database className="text-purple-500 w-6 h-6" />
                </div>
              </div>

              {/* Green - Terminal */}
              <div
                className={`absolute -left-8 bottom-24 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim-delay' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px)` } : {}}
              >
                <div className="bg-black p-3 border border-green-500/50 shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)] rounded-lg">
                  <Terminal className="text-green-500 w-6 h-6" />
                </div>
              </div>

              {/* Yellow - Braces */}
              <div
                className={`absolute left-1/2 -top-8 -translate-x-1/2 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 1.8}px, ${mousePosition.y * 1.8}px)` } : {}}
              >
                <div className="bg-black p-2 border border-yellow-500/50 shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)] rounded-lg">
                  <Braces className="text-yellow-500 w-5 h-5" />
                </div>
              </div>

              {/* Orange - Hash */}
              <div
                className={`absolute left-1/2 -bottom-6 -translate-x-1/2 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim-delay' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 2.2}px, ${mousePosition.y * 2.2}px)` } : {}}
              >
                <div className="bg-black p-2 border border-orange-500/50 shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] rounded-lg">
                  <Hash className="text-orange-500 w-5 h-5" />
                </div>
              </div>

              {/* Blue - Layers */}
              <div
                className={`absolute -left-16 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 3.5}px, ${mousePosition.y * 3.5}px)` } : {}}
              >
                <div className="bg-black p-2 border border-blue-500/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] rounded-lg">
                  <Layers className="text-blue-500 w-5 h-5" />
                </div>
              </div>

              {/* Red - Code */}
              <div
                className={`absolute -right-14 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${!isHovering ? 'float-anim-delay' : ''}`}
                style={isHovering ? { transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)` } : {}}
              >
                <div className="bg-black p-2 border border-red-500/50 shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] rounded-lg">
                  <Code2 className="text-red-500 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION (Bridging the gap) */}




      {/* PORTFOLIO & SERVICES (Dark Mode for contrast) */}
      <div className="bg-[#050505] pt-20 pb-20">
        <section className="px-6 relative text-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Desenvolvidos</span></h2>
            <p className="text-slate-400">Obras digitais construídas para durar.</p>
          </div>

          {/* Simple Grid for Portfolio Preview */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Card 1 - TRIVU - Clean Vertical Layout */}
            <a href="https://www.trivu.com.br" target="_blank" rel="noopener noreferrer" className="group block bg-[#0f0f0f] border border-white/5 overflow-hidden rounded-2xl transition-all hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">

              {/* Image Section - Full Width Fill */}
              <div className="relative w-full h-72 overflow-hidden bg-black">
                <img
                  src="/img/trivu/trivu.png"
                  alt="Trivu Landing Page"
                  className="w-full h-auto object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section - Compact */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">TRIVU</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">SAAS</span>
                </div>

                <p className="text-slate-200 font-medium leading-snug">"Agendamentos e gestão em um só lugar."</p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Ecossistema completo: agendamento online, controle financeiro, CRM e fidelização.
                </p>

                <p className="text-xs text-purple-400 font-medium">
                  Desenvolvido em parceria com <span
                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.open('https://www.linkedin.com/in/fernando-paiva-12b8371b1/', '_blank'); }}
                    className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
                  >@FernandoPaiva</span>
                </p>

                <div className="flex gap-2 flex-wrap pt-3 border-t border-white/10">
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">Next.js</span>
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">C#</span>
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">ASP.NET</span>
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">Tailwind</span>
                </div>
              </div>
            </a>

            {/* Card 2 - Leitor de Barras */}
            <a href="https://leitorbarras.bablerdev.com.br/" target="_blank" rel="noopener noreferrer" className="group block bg-[#0f0f0f] border border-white/5 overflow-hidden rounded-2xl transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10">

              {/* Image Section - Hover Reveal Effect */}
              <div className="relative w-full h-72 overflow-hidden bg-black">
                {/* Static Cover (Visible by Default) */}
                <img
                  src="/img/img-leitorbarras/leitorbarra.png"
                  alt="Leitor de Barras - Capa"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* GIF Demo (Visible on Hover) */}
                <img
                  src="/img/img-leitorbarras/leitorbarrasgif.gif"
                  alt="Leitor de Barras - Demonstração"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ transform: 'translateY(-15px)' }}
                />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">Leitor de Barras</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">WEB APP</span>
                </div>

                <p className="text-slate-200 font-medium leading-snug">"Digitalize, valide e documente com precisão."</p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Leitura inteligente via câmera ou upload, com verificação automática de integridade. Gere relatórios PDF detalhados com evidências visuais e dados técnicos prontos para auditoria.
                </p>

                <p className="text-xs text-cyan-400 font-medium">
                  Projeto interno <span className="text-slate-500">@BablerDev</span>
                </p>

                <div className="flex gap-2 flex-wrap pt-3 border-t border-white/10">
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">React</span>
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">Vite</span>
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">PDFGen</span>
                  <span className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">Camera API</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
