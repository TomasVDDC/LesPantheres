/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/react-list-player/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "600px", // reduced from 640px
				md: "700px", // reduced from 768px
				lg: "800px", // reduced from 1024px
				xl: "1000px", // reduced from 1280px
				"2xl": "1200px", // reduced from 1536px
			},
		},
	},
	plugins: [],
}
