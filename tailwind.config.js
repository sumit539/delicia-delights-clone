/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ef4444", // Tomato Red
                secondary: "#22c55e", // Fresh Green
                accent: "#f59e0b", // Golden Amber
                warm: "#fafafa", // Off-white background
                dark: "#1f2937", // Dark gray text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
