import { useEffect, useRef } from "react";

const App = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = () => {
            if (inputRef.current) inputRef.current.focus();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="p-4 font-playfair">
            <div className="flex h-dvh flex-col items-center justify-center gap-4">
                <h1 className="text-5xl font-bold">Database Storico</h1>
                <input
                    ref={inputRef}
                    type="text"
                    className="input input-primary w-96"
                    placeholder="Anno, avvenimento, parola chiave..."
                />
            </div>
        </div>
    );
};

export default App;
