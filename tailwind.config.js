/** @type {import('tailwindcss').Config} */
import tailwindcssanimate from "tailwindcss-animate";
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: {
					DEFAULT: '#fdc10d'
				},
				secondary: {
					'100': '#60a5fa'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

