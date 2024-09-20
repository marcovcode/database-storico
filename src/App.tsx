import { useEffect, useRef, useState } from "react";
import { useGetDates } from "./features/dates/useGetDates";
import { Tables } from "./types";
import { Input } from "./ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

const App = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState("");

    const { dates } = useGetDates();

    useEffect(() => {
        const handleKeyDown = () => {
            if (searchRef.current) searchRef.current.focus();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const filteredDates = searchValue
        ? dates!.filter((date: Tables<"dates">) => {
              const searchLower = searchValue.toLowerCase();

              const yearStart = String(date.year_start || "").toLowerCase();
              const yearEnd = String(date.year_end || "").toLowerCase();
              const title = (date.title || "").toLowerCase();
              const insight = (date.insight || "").toLowerCase();

              return (
                  yearStart.includes(searchLower) ||
                  yearEnd.includes(searchLower) ||
                  title.includes(searchLower) ||
                  insight.includes(searchLower)
              );
          })
        : [];

    return (
        <div className="p-4 font-playfair">
            <div
                className={`absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 space-y-4 transition-all duration-500 ${
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

                <Input
                    ref={searchRef}
                    type="text"
                    className="w-96"
                    placeholder="Anno, avvenimento, parola chiave..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <div
                className={`mt-20 grid grid-cols-1 gap-4 duration-500 lg:grid-cols-2 ${searchValue ? "opacity-100" : "opacity-0"}`}
            >
                {filteredDates.length > 0
                    ? filteredDates.map((date) => (
                          <Card key={date.id}>
                              <CardHeader>
                                  <CardTitle className="text-primary">
                                      {date.title}
                                  </CardTitle>
                                  <CardDescription>
                                      {date.year_start}
                                      {date.year_end && " - " + date.year_end}
                                  </CardDescription>
                              </CardHeader>
                              <CardContent>
                                  <p>{date.insight}</p>
                              </CardContent>
                          </Card>
                      ))
                    : searchValue && <p>No results found</p>}
            </div>
        </div>
    );
};

export default App;
