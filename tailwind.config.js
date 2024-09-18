/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#e11d48",
                    "base-100": "#fef9c3",
                },
            },
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                playfair: ["Playfair"],
            },
        },
    },
    plugins: [require("daisyui")],
};
