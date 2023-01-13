import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { red, grey } from '@mui/material/colors'

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#2887FA',
			light: '#9bc2f0',
		},
		secondary: {
			main: '#19857b',
		},

		error: {
			main: red.A400,
		},
		text: {
			primary: '#5A5A5A',
			secondary: '#333',
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
})

export default theme
