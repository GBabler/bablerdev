"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-[#fdf8f6] dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-[#eaddd7] dark:hover:border-zinc-800"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-[#bfa094]" />
            ) : (
                <Moon className="w-5 h-5 text-[#846358]" />
            )}
        </button>
    );
}
