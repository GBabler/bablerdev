"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => setIsOpen(false), [pathname]);

    // Lock scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const menuItems = [
        { href: "/", label: "Início", sub: "01" },
        { href: "/services", label: "Serviços", sub: "02" },
        { href: "/about", label: "Sobre", sub: "03" },
        { href: "/contact", label: "Contato", sub: "04" },
    ];

    return (
        <>
            {/* Floating Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled || isOpen ? "py-2" : "py-3"
                    }`}
            >
                <div className={`mx-auto max-w-[95%] md:max-w-6xl transition-all duration-500 ${scrolled && !isOpen
                    ? "rounded-full px-6 py-3 bg-white/30 backdrop-blur-md shadow-lg border border-white/20"
                    : "rounded-full px-6 py-3 bg-white/90 backdrop-blur-md shadow-sm"
                    }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="relative z-50 group">
                            <span className={`font-bold text-xl tracking-tighter transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-900"}`}>
                                BABLER
                                <span className="text-blue-600">.</span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-semibold text-zinc-800 hover:text-blue-600 transition-colors relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-md"
                            >
                                Vamos conversar
                            </Link>
                        </div>

                        {/* Mobile Menu Button - "Hamburger" reinvented */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-[6px] group"
                            aria-label="Toggle Menu"
                        >
                            <span className={`h-[2px] w-8 rounded-full transition-all duration-300 ${isOpen ? "bg-white rotate-45 translate-y-[8px]" : "bg-zinc-900"}`} />
                            <span className={`h-[2px] w-6 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "bg-zinc-900 group-hover:w-8"}`} />
                            <span className={`h-[2px] w-4 rounded-full transition-all duration-300 ${isOpen ? "bg-white -rotate-45 -translate-y-[8px] w-8" : "bg-zinc-900 group-hover:w-8"}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full Screen Overlay Menu */}
            <div
                className={`fixed inset-0 z-40 bg-zinc-950 transition-all duration-700 cubic-bezier(0.87, 0, 0.13, 1) ${isOpen ? "clip-path-open" : "clip-path-closed"
                    }`}
                style={{
                    clipPath: isOpen ? "circle(150% at top right)" : "circle(0% at top right)",
                    WebkitClipPath: isOpen ? "circle(150% at top right)" : "circle(0% at top right)"
                }}
            >
                <div className="h-full flex flex-col justify-center px-8 md:px-24">
                    <div className="space-y-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex items-baseline gap-6 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                            >
                                <span className="text-zinc-600 font-mono text-sm md:text-base">
                                    {item.sub}
                                </span>
                                <span className="text-5xl md:text-8xl font-bold text-white group-hover:text-blue-500 transition-colors tracking-tight">
                                    {item.label}
                                </span>
                                <ArrowUpRight className="text-zinc-600 w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </Link>
                        ))}
                    </div>

                    <div
                        className={`mt-16 pt-8 border-t border-zinc-800 grid grid-cols-2 gap-8 md:flex md:gap-16 transition-all duration-700 delay-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div>
                            <p className="text-zinc-500 text-sm font-mono mb-2">Contato</p>
                            <a href="mailto:gabriel.babler1@hotmail.com" className="text-white hover:text-blue-500 transition-colors block">
                                gabriel.babler1@hotmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-sm font-mono mb-2">Social</p>
                            <div className="flex gap-4">
                                <a href="https://linkedin.com/in/babler" className="text-white hover:text-blue-500 transition-colors">LinkedIn</a>
                                <a href="https://github.com/Gbabler" className="text-white hover:text-blue-500 transition-colors">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
