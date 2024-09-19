import { useEffect, useRef, useState } from "react";
import { useGetDates } from "./features/dates/useGetDates";

const App = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState("");

    const { dates, isLoading } = useGetDates();

    useEffect(() => {
        const handleKeyDown = () => {
            if (searchRef.current) searchRef.current.focus();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (!isLoading) console.log(dates);
    }, [isLoading, dates]);

    return (
        <div className="font-playfair">
            <div
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 transition-all duration-500 ${
                    !searchValue ? "top-1/2" : "top-4"
                }`}
            >
                <h1
                    className={`text-center text-5xl font-black text-primary transition-opacity duration-500 ${
                        searchValue ? "opacity-0" : "opacity-100"
                    }`}
                >
                    Database Storico
                </h1>
                <input
                    ref={searchRef}
                    type="text"
                    className="input input-primary w-96 placeholder:text-primary placeholder:opacity-40"
                    placeholder="Anno, avvenimento, parola chiave..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default App;
