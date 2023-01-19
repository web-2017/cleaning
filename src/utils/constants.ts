import { v4 as uuidv4 } from 'uuid'
export const CONSTANTS = {
	mainTitle: 'Cleanexis',
	mainMenu: [
		{
			id: uuidv4(),
			link: 'home',
			href: '/',
		},
		{
			id: uuidv4(),
			link: 'about',
			href: 'about',
		},
		{
			id: uuidv4(),
			link: 'pricing',
			href: 'pricing',
		},
		{
			id: uuidv4(),
			link: 'services',
			href: 'services',
		},
		{
			id: uuidv4(),
			link: 'plans',
			href: 'plans',
		},
		{
			id: uuidv4(),
			link: 'contacts',
			href: 'contacts',
		},
	],
	company: {
		name: 'Cleanexis',
		phone: '+1 233 3333333',
		address:
			'Park Ridge, Skokie/Linkolnwood, Evanston, Winnetka, Barrington, Shaumburg, Oak Brook, Norridge/Rosemont, Northside Chicago, Lincoln Park',
	},
	phone: {
		primary: '+1 233 3333333',
		secondary: '+1 233 3333333',
	},
	emails: {
		EMAILJS_SERVICE_ID: 'service_2etjb4f',
		EMAILJS_TEMPLATE_ID: 'template_xja5pgn',
		EMAILJS_TEMPLATE_CONTACT_ID: 'template_ebyih3g',
		EMAILJS_PUBLIC_KEY: 'AEc9makvcDWxCV9nf',
		EMAILJS_PRIVATE_KEY: 'SnxIGhG_JCKtV29MPEoQJ',
	},
}
