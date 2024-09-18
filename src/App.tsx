import { useEffect, useRef, useState } from "react";

const App = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const handleKeyDown = () => {
            if (searchRef.current) searchRef.current.focus();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="p-4 font-playfair">
            <div className="flex h-dvh flex-col items-center justify-center gap-4">
                <h1
                    className={`text-5xl font-bold transition-opacity duration-200 ${
                        searchValue ? "opacity-0" : "opacity-100"
                    }`}
                >
                    Database Storico
                </h1>
                <input
                    ref={searchRef}
                    type="text"
                    className="input input-primary w-96"
                    placeholder="Anno, avvenimento, parola chiave..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default App;
