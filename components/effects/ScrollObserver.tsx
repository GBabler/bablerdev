"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollObserver() {
    const pathname = usePathname();

    useEffect(() => {
        // Observer options
        const options = {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: "0px 0px -20px 0px" // Slightly above bottom
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add 'is-visible' class when in view
                    entry.target.classList.add("is-visible");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        const startObserving = () => {
            // Find all elements with our new classes
            const targets = document.querySelectorAll(
                ".reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right"
            );

            targets.forEach((target) => observer.observe(target));
        };

        // Run immediately
        startObserving();

        // Run again after a short delay to catch layout shifts
        const t1 = setTimeout(startObserving, 100);
        const t2 = setTimeout(startObserving, 500);

        return () => {
            observer.disconnect();
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [pathname]);

    return null;
}
