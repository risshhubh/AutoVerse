export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pastel-light': '#000000',
                'pastel-blue': '#94A3B8',
                'pastel-sky': '#3F3F46',
            },
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                playfair: ['Playfair Display', 'serif'],
                sans: ['Outfit', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
