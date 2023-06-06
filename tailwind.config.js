/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#051923",
				foreground: "#ffffff",
				lightgray: "#ebebeb",
				accent: "#00A6FB",
				"accent-light": "#82c8ff",
			},
		},
	},
	plugins: [],
};
