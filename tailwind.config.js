export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pastel-light': '#DACAA4',
                'pastel-blue': '#1B3C53',
                'pastel-sky': '#456882',
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
