/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			"bg-white-0": "#fff",
			"foundation-darkest-blue-r50": "#e7e6eb",
			"foundation-darkest-blue-r300": "#1e293b",
			"foundation-darkest-blue-r75": "#9b96ab",
			"foundation-darkest-blue-r100": "#716b89",
			"foundation-darkest-blue-r200": "#342b56",
			"foundation-darkest-blue-r400": "#080024",
			"foundation-darkest-blue-r500": "#111827",
			"text-sub-500": "#525866",
			"neutral-900": "#0a0d14",
			"stroke-soft-200": "#e2e4e9",
			"foundation-green-g50": "#eafaf3",
			darkslategray: "#104632",
			"foundation-green-g75": "#a9ecce",
			"foundation-green-g100": "#86e4ba",
			whitesmoke: "#e8f0ed",
			"foundation-green-g200": "#52d99c",
			"foundation-green-g300": "#2ed188",
			"foundation-green-g400": "#20925f",
			"foundation-green-g500": "#1c7f53",
			"foundation-red-r50": "#f8e8e8",
			"foundation-red-r500": "#701111",
			"foundation-red-r75": "#e1a2a2",
			"foundation-red-r100": "#d57b7b",
			"foundation-red-r200": "#c34343",
			"foundation-red-r300": "#fb0007",
			"foundation-red-r400": "#801414",
			"foundation-orange-o50": "#fff4e8",
			"yellow-darker": "#693d11",
			"foundation-orange-o75": "#fed29f",
			"foundation-orange-o100": "#fec077",
			"foundation-orange-o200": "#fda53d",
			"foundation-orange-o300": "#fd9215",
			"foundation-orange-o400": "#b1660f",
			"foundation-orange-o500": "#9a590d",
			"foundation-blue-b50": "#ececfa",
			"foundation-blue-b300": "#3d42ce",
			"foundation-blue-b75": "#afb2eb",
			"foundation-blue-b100": "#8e91e3",
			"foundation-blue-b200": "#5e62d6",
			"foundation-blue-b400": "#2b2e90",
			"foundation-blue-b500": "#25287e",
			"foundation-grey-weak": "#f6f8fa",
			"neutral-100": "#fffbff",
			"neutral-300": "#cdd0d5",
			"neutral-400": "#868c98",
			"neutral-600": "#31353f",
			"neutral-700": "#20232d",
			"neutral-800": "#161922",
			"bg-white-0": "#fff",
			blueviolet: "#9747ff",
			"bg-weak-100": "#f6f8fa",
			gray: {
				"100": "#010101",
				"200": "rgba(255, 255, 255, 0.16)",
			},
			"bg-surface-700": "#20232d",
			"stroke-soft-200": "#e2e4e9",
			"text-sub-500": "#525866",
			"text-main-900": "#0a0d14",
			"neutral-900": "#161922",
			steelblue: "#0077b5",
			"branding-facebook": "#1977f3",
			"branding-google": "#f14336",
			"branding-apple": "#000",
			"neutral-300": "#cdd0d5",
			"blue-r": "linear-gradient(0deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), #1977F3",
			// "foundation-red-r500": "#701111",
			// "foundation-blue-b300": "#3d42ce",
			// "foundation-blue-b500": "#25287e",
			// "foundation-red-r50": "#f8e8e8",
			// "foundation-blue-b50": "#ececfa",
			snow: "#fffbff",
		  },
		  spacing: {},
		  fontFamily: {
			"paragraph-small": "Inter",
		  },
		},
		fontSize:{
			xs: "0.75rem",
			"2xs": "0.688rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			"5xl": "1.5rem",
			xl: "1.25rem",
			"13xl": "2rem",
			"21xl": "2.5rem",
			"29xl": "3rem",
			"37xl": "3.5rem",
			inherit: "inherit",
		},
		// screens: {
		// 	mq1500: {
		// 	  raw: "screen and (max-width: 1500px)",
		// 	},
		// 	mq1225: {
		// 	  raw: "screen and (max-width: 1225px)",
		// 	},
		// 	mq850: {
		// 	  raw: "screen and (max-width: 850px)",
		// 	},
		// 	mq450: {
		// 	  raw: "screen and (max-width: 450px)",
		// 	},
		// },
	},
	plugins: [],
}
