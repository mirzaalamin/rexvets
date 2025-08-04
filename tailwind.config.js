module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // if using App Router
        './pages/**/*.{js,ts,jsx,tsx}', // if using Pages Router
        './components/**/*.{js,ts,jsx,tsx}', // for reusable components
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
                helvetica: ['var(--font-helvetica)']
            },
            keyframes: {
                glow: {
                    '0%, 100%': { boxShadow: '0 0 10px 2px rgba(99, 102, 241, 0.6)' },
                    '50%': { boxShadow: '0 0 20px 4px rgba(99, 102, 241, 0.9)' },
                },
            },
            animation: {
                glow: 'glow 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}