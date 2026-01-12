"use client";

import Link from "next/link";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 px-6 bg-[#050505] border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <span className="font-bold text-2xl tracking-tighter text-white">
                            BABLER<span className="text-blue-600">.</span>
                        </span>
                        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                            Transformamos ideias em realidade digital.
                            <br />Software sob medida, design agressivo.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navegação</h4>
                        <div className="space-y-3">
                            <Link href="/" className="block text-slate-400 hover:text-white transition-colors text-sm">
                                Início
                            </Link>
                            <Link href="/services" className="block text-slate-400 hover:text-white transition-colors text-sm">
                                Serviços
                            </Link>
                            <Link href="/about" className="block text-slate-400 hover:text-white transition-colors text-sm">
                                Sobre
                            </Link>
                            <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors text-sm">
                                Contato
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contato</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:gabriel.babler1@hotmail.com"
                                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                            >
                                <Mail size={16} />
                                gabriel.babler1@hotmail.com
                            </a>
                            <a
                                href="https://wa.me/5519993051548"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm"
                            >
                                <Phone size={16} />
                                (19) 99305-1548
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="https://www.linkedin.com/in/babler/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-white/5 hover:bg-blue-600/20 rounded-lg transition-colors text-slate-400 hover:text-blue-400"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://github.com/Gbabler"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-white/5 hover:bg-purple-600/20 rounded-lg transition-colors text-slate-400 hover:text-purple-400"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {currentYear} BABLER. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Termos
                        </Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacidade
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
