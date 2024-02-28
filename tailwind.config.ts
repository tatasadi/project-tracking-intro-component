import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        'red': 'hsl(0, 100%, 68%)',
        'very-dark-blue': 'hsl(230, 29%, 20%)',
        'dark-grayish-blue': 'hsl(230, 11%, 40%)',
        'grayish-blue': 'hsl(231, 7%, 65%)',
        'light-grayish-blue': 'hsl(207, 33%, 95%)',
      },
    },
  },
  plugins: [],
}
export default config
