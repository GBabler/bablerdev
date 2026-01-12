"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-blue-100 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div>
                        <span className="font-bold text-blue-600">Babler Dev</span>
                        <p className="text-sm text-zinc-600 mt-1">Software sob medida</p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="mailto:contato@bablerdev.com"
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-zinc-600 hover:text-blue-600"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/babler/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-zinc-600 hover:text-blue-600"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/Gbabler"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-zinc-600 hover:text-blue-600"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center text-sm text-zinc-500">
                    © {currentYear} Babler Dev. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
