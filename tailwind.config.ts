import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			small: '415px',
  			xs: '480px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px',
  			xxl: '1600px'
  		},
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			montserrat: [
  				'montserrat'
  			]
  		},
  		colors: {
  			white: 'var(--background)',
  			darkGrey: 'var(--dark-gray)',
  			green: 'var(--green)',
  			blue: {
  				'600': 'var(--blue-600)',
  				'700': 'var(--blue-700)'
  			},
  			red: 'var(--red)'
  		},
  		backgroundImage: {
  			'custom-gradient-cards': 'linear-gradient(to bottom, #1A1A25, #2E3095)',
  			'landing-gradient': 'linear-gradient(to top, #0F0F2F, #2E3095)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		container: {
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				'2xl': '6rem'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
