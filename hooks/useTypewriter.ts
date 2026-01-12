import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let currentIndex = 0;

        const startTyping = () => {
            timeout = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(timeout);
                    setIsComplete(true);
                }
            }, speed);
        };

        const delayTimeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(delayTimeout);
            clearInterval(timeout);
        };
    }, [text, speed, delay]);

    return { displayText, isComplete };
}
