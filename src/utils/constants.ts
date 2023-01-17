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
			link: 'contacts',
			href: 'contacts',
		},
	],
}
