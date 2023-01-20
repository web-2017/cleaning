import { v4 as uuidv4 } from 'uuid'
import { IServices, IWeeklyProgramData } from '@/types'

export const itemData = [
	{
		img: '/other/Rectangle 8.png',
		title: 'Burger',
		rows: 2,
		cols: 2,
	},
	{
		img: '/other/Rectangle 9.png',
		title: 'Burger',
		rows: 1,
		cols: 2,
	},
	{
		img: '/other/Rectangle 10.png',
		title: 'Camera',
		rows: 2,
		cols: 2,
	},
	{
		img: '/other/Rectangle 11.png',
		title: 'Coffee',
		rows: 1,
		cols: 2,
	},
]

export const newsData = [
	{
		id: 1,
		src: '/other/news1.png',
		title: 'HIGH CLASS CLEANING',
		text: 'Amet minim mollit non deserunt ullamcosit aliqua dolor.',
		user: {
			fullName: 'Kristin Watson',
			position: 'Marketing Coordinator',
			src: '/other/new1User.png',
		},
		date: new Date().toLocaleDateString(),
	},
	{
		id: 2,
		src: '/other/news2.png',
		title: 'QUICK WORKER FINDING',
		text: 'Amet minim mollit non deserunt ullamcosit aliqua dolor.',
		user: {
			fullName: 'Ralph Edwards',
			position: 'Nursing Assistant',
			src: '/other/new2User.png',
		},
		date: new Date().toLocaleDateString(),
	},
	{
		id: 3,
		src: '/other/news3.png',
		title: 'CUSTOMIZED SERVICE',
		text: 'Amet minim mollit non deserunt ullamcosit aliqua dolor.',
		user: {
			fullName: 'Albert Flores',
			position: 'President of Sales',
			src: '/other/new3User.png',
		},
		date: new Date().toLocaleDateString(),
	},
	{
		id: 4,
		src: '/other/news4.png',
		title: 'CUSTOMIZED SERVICE',
		text: 'Amet minim mollit non deserunt ullamcosit aliqua dolor.',
		user: {
			fullName: 'Jacob Jones',
			position: 'Dog Trainer',
			src: '/other/new4User.png',
		},
		date: new Date().toLocaleDateString(),
	},
]

export const footerMenu = [
	{
		id: 1,
		title: 'Services',
		menus: [
			{
				link: 'house-cleaning',
				text: 'House Cleaning',
			},
			{
				link: 'office-cleaning',
				text: 'Office Cleaning',
			},
			{
				link: 'window-cleaning',
				text: 'Window Cleaning',
			},
			{
				link: 'floor-cleaning',
				text: 'Floor Cleaning',
			},
		],
	},
	{
		id: 2,
		title: 'Useful Links',
		menus: [
			{
				link: '/',
				text: 'Home Page',
			},
			{
				link: 'services',
				text: 'Service Page',
			},
			{
				link: 'faq',
				text: 'FAQ’s Page',
			},
			{
				link: 'contacts',
				text: 'Contact Us',
			},
		],
	},

	{
		id: 3,
		title: 'Contact',
		menus: [
			{
				link: '#',
				text: '(+021) 254 4458 187',
			},
			{
				link: '#',
				text: 'info@email.com',
			},
			{
				link: '#',
				text: 'Illinois, USA',
			},
		],
	},
]

export const servicesData: IServices[] = [
	{
		id: uuidv4(),
		title: 'Hose cleaning',
		category: ['home'],
		contents: [
			{
				id: uuidv4(),
				title: 'House cleaning',
				services: [
					{
						text: 'Dust surfaces',
					},
					{
						text: 'Dust and hand wipe furniture tops',
					},
					{
						text: 'Dust baseboards, chair rails, and door panels',
					},

					{
						text: 'Dust ceiling fans(within reach)',
					},
					{
						text: 'Vacuum carpets',
					},
					{
						text: 'Vacuum and damp mop floors',
					},
					{
						text: 'Dust blinds, window sills, and lock ledges',
					},
					{
						text: 'Dust furniture',
					},
					{
						text: 'Dust pictures frames',
					},
					{
						text: 'Dust lamp and lamp shades',
					},
					{
						text: 'Dust and clean mirrors',
					},
					{
						text: 'Cleaning and sanitizing the laundry rooms and the machines',
					},
					{
						text: 'Empty all trash',
					},
				],
			},
			{
				id: uuidv4(),
				title: 'Bathrooms',
				services: [
					{
						text: 'Dust surfaces',
					},
					{
						text: 'Dust blinds, window sills, and lock ledges',
					},
					{
						text: 'Dust cabinets, door panels, and baseboards',
					},
					{
						text: 'Clean and disinfect surfaces',
					},
					{
						text: 'Spot clean cabinet fronts',
					},
					{
						text: 'Clean, disinfect, and shine showers and tubs',
					},
					{
						text: 'Clean and disinfect toilets inside and out',
					},
					{
						text: 'Clean and disinfect door knobs and switch plates',
					},
					{
						text: 'Shine fixtures',
					},
					{
						text: 'Vacuum and damp mop floors',
					},
					{
						text: 'Empty trash',
					},
				],
			},
			{
				id: uuidv4(),
				title: 'Kitchen',
				services: [
					{
						text: 'Dust surfaces',
					},
					{
						text: 'Dust blinds, window sills, and lock ledges',
					},
					{
						text: 'Dust chair rails, cabinets, door panels, and baseboards',
					},
					{
						text: 'Dust top of refrigerator',
					},
					{
						text: 'Clean and disinfect counter tops',
					},
					{
						text: 'Spot clean cabinet fronts',
					},
					{
						text: 'Clean and disinfect door knobs and switch plates',
					},
					{
						text: 'Clean and disinfect sink',
					},
					{
						text: 'Clean and disinfect microwave inside and out',
					},
					{
						text: 'Clean, disinfect, and shine outside of oven and top of range',
					},
					{
						text: 'Empty trash',
					},
					{
						text: 'Clean, disinfect, and shine outside of dishwasher',
					},
					{
						text: 'Clean, disinfect, and shine outside of refrigerator',
					},
					{
						text: 'Clean and disinfect kitchen table',
					},
					{
						text: 'Vacuum and damp mop floors',
					},
					{
						text: 'Empty trash',
					},
				],
			},
			{
				id: uuidv4(),
				title: 'Bedrooms',
				services: [
					{ text: 'Dust surfaces' },
					{ text: 'Dust and hand wipe furniture tops' },
					{ text: 'Dust furniture' },
					{ text: 'Dust baseboards, chair rails, and door panels' },
					{ text: 'Dust blinds, window sills, and lock ledges' },
					{ text: 'Vacuum carpets' },
					{ text: 'Vacuum and damp mop floors (if non-carpet)' },
					{ text: 'Change sheets (upon request)' },
					{ text: 'Make beds (upon request)' },
					{ text: 'Empty trash' },
				],
			},
		],
	},
	{
		id: uuidv4(),
		title: 'Office Cleaning',
		category: ['office'],
		contents: [
			{
				id: uuidv4(),
				title: 'Reception / Common Area',
				services: [
					{ text: 'Straighten entryway mats' },
					{ text: 'Clean front door / window glass inside and out' },
					{
						text: 'Dust receptions area tables, countertops and all hard surfaces',
					},
					{ text: 'Vacuum all carpet and upholstered furniture' },
					{ text: 'Sweep all hard surface flooring' },
					{ text: 'Wipe down / disinfect all phones' },
					{ text: 'Empty all trash cans, replace liners' },
				],
			},
			{
				id: uuidv4(),
				title: 'Conference Room',
				services: [
					{
						text: 'Dust filing cabinets, tanle, countertops, bookshelves and all hard surfaces',
					},
					{ text: 'Vacuum all carpet and sweep hard surface flooring' },
					{ text: 'Vacuum upholstered furniture' },
					{ text: 'Dust table, countertops and all flat surfaces' },
					{ text: 'Wipe down / disinfect all phones' },
					{ text: 'Empty all trash cans, replace liners' },
				],
			},
			{
				id: uuidv4(),
				title: 'Restroom(s)',
				services: [
					{
						text: 'Clean / disinfect all hard surfaces (countertops, fixtures, mirrors, sinks)',
					},
					{ text: 'Sweep / mop hard surface flooring' },
					{ text: 'Wipe / disinfect stall partitions' },
					{ text: 'Clean / disinfect urinals and toilets' },
					{ text: 'Refill all paper products and soap dispensers' },
					{ text: 'Test hand dryers, if not working report to maintenance' },
					{ text: 'Empty all trash cans, replace liners' },
				],
			},
			{
				id: uuidv4(),
				title: 'Break Room',
				services: [
					{
						text: 'Wipe / disinfect all hard surfaces (table, countertops, refrigerator, cabinets)',
					},
					{ text: 'Sweep / mop hard suraface flooring' },
					{ text: 'Wipe / disinfect outside and instide of microwave' },
					{ text: 'Straighten items on countertop' },
					{ text: 'Refll paper products and soap dispenser as needed' },
					{ text: 'Empty all trash cans, replace liners' },
				],
			},
			{
				id: uuidv4(),
				title: 'Inner Offices / Cubicles',
				services: [
					{
						text: 'Dust filing cabinets, tablesm countertops, bookshelves and all hard surfaces',
					},
					{ text: 'Vacuum all carpet and sweep hard surface flooring' },
					{ text: 'Dust desks, countertops and all flat surfaces' },
					{ text: 'Dust all computer areas (fax machines, copiers)' },
					{ text: 'Wipe down / disinfect all phones' },
					{ text: 'Empty all trash cans, replace liners' },
				],
			},
		],
	},
	// {
	// 	id: uuidv4(),
	// 	title: 'Stairways Cleaning',
	// 	category: ['home'],
	// 	content: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Stairways Cleaning',
	// 			services: [
	// 				'Vacuuming and mopping the stairs',
	// 				'Wiping the frames/baseboards/common doors/windows and walls',
	// 				'Cleaning and sanitizing the tile floors by the entrances and removing all waste and unwanted mail papers from the floors',
	// 				'Cleaning and sanitizing the laundry rooms and the machines',
	// 			],
	// 		},
	// 	],
	// },
]

export const weeklyProgramData: IWeeklyProgramData[] = [
	{
		id: 1,
		tariff: 'one time',
		services: [
			{
				id: 1,
				title: 'dust one time',
				includes: true,
			},
			{
				id: 2,
				title: 'dasfasdf',
				includes: false,
			},
			{
				id: 3,
				title: 'asdf332 23',
				includes: true,
			},
			{
				id: 4,
				title: '33333',
				includes: false,
			},
			{
				id: 4,
				title: 'wet windows',
				includes: [
					{
						tariff: '',
					},
				],
			},
		],
	},
	{
		id: 2,
		tariff: 'weekly',
		services: [
			{
				id: 1,
				title: 'dust weekly',
				includes: true,
			},
			{
				id: 2,
				title: 'dasfasdf',
				includes: false,
			},
			{
				id: 3,
				title: 'asdf332 23',
				includes: true,
			},
			{
				id: 4,
				title: '33333',
				includes: false,
			},
		],
	},
	{
		id: 3,
		tariff: 'bi-weekly',
		services: [
			{
				id: 1,
				title: 'dust bi-weekly',
				includes: true,
			},
			{
				id: 2,
				title: 'dasfasdf',
				includes: false,
			},
			{
				id: 3,
				title: 'asdf332 23',
				includes: true,
			},
			{
				id: 4,
				title: '33333',
				includes: false,
			},
		],
	},
	{
		id: 4,
		tariff: 'monthly',
		services: [
			{
				id: 1,
				title: 'dust monthly',
				includes: true,
			},
			{
				id: 2,
				title: 'dasfasdf monthly',
				includes: false,
			},
			{
				id: 3,
				title: 'asdf332 23 monthly',
				includes: true,
			},
			{
				id: 4,
				title: '33333',
				includes: false,
			},
		],
	},
]
