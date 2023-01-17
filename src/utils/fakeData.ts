import { v4 as uuidv4 } from 'uuid';
import { IServices } from '@/types';
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
		content: [
			{
				id: uuidv4(),
				title: 'House cleaning',
				services: [
					'Dust surfaces', 'Dust and hand wipe furniture tops',
					'Dust baseboards, chair rails, and door panels',
					'Dust ceiling fans(within reach)',
					'Vacuum carpets',
					'Vacuum and damp mop floors',
					'Dust blinds, window sills, and lock ledges',
					'Dust furniture',
					'Dust pictures frames',
					'Dust lamp and lamp shades',
					'Dust and clean mirrors',
					'Empty all trash',
					'Cleaning and sanitizing the laundry rooms and the machines',
				]
			},
			{
				id: uuidv4(),
				title: 'Bathrooms',
				services: [
					'Dust surfaces',
					'Dust blinds, window sills, and lock ledges',
					'Dust cabinets, door panels, and baseboards',
					'Clean and disinfect surfaces',
					'Spot clean cabinet fronts',
					'Clean, disinfect, and shine showers and tubs',
					'Clean and disinfect toilets inside and out',
					'Clean and disinfect door knobs and switch plates',
					'Shine fixtures',
					'Vacuum and damp mop floors',
					'Empty trash'
				]
			},
			{
				id: uuidv4(),
				title: 'Kitchen',
				services: [
					'Dust surfaces',
					'Dust blinds, window sills, and lock ledges',
					'Dust chair rails, cabinets, door panels, and baseboards',
					'Dust top of refrigerator',
					'Clean and disinfect counter tops',
					'Spot clean cabinet fronts',
					'Clean and disinfect door knobs and switch plates',
					'Clean and disinfect sink',
					'Clean and disinfect microwave inside and out',
					'Clean, disinfect, and shine outside of oven and top of range',
					'Empty trash',
					'Clean, disinfect, and shine outside of dishwasher',
					'Clean, disinfect, and shine outside of refrigerator',
					'Clean and disinfect kitchen table',
					'Vacuum and damp mop floors',
					'Empty trash',
				]
			},
			{
				id: uuidv4(),
				title: 'Bedrooms',
				services: [
					'Dust surfaces',
					'Dust and hand wipe furniture tops',
					'Dust furniture',
					'Dust baseboards, chair rails, and door panels',
					'Dust blinds, window sills, and lock ledges',
					'Vacuum carpets',
					'Vacuum and damp mop floors (if non-carpet)',
					'Change sheets (upon request)',
					'Make beds (upon request)',
					'Empty trash',
				]
			}
		],
	},
	{
		id: uuidv4(),
		title: 'Office Cleaning',
		category: ['office'],
		content: [
			{
				id: uuidv4(),
				title: 'Reception / Common Area',
				services: [
					'Straighten entryway mats',
					'Clean front door / window glass inside and out',
					'Dust receptions area tables, countertops and all hard surfaces',
					'Vacuum all carpet and upholstered furniture',
					'Sweep all hard surface flooring',
					'Wipe down / disinfect all phones',
					'Empty all trash cans, replace liners',
				]
			},
			{
				id: uuidv4(),
				title: 'Conference Room',
				services: [
					'Dust filing cabinets, tanle, countertops, bookshelves and all hard surfaces',
					'Vacuum all carpet and sweep hard surface flooring',
					'Vacuum upholstered furniture',
					'Dust table, countertops and all flat surfaces',
					'Wipe down / disinfect all phones',
					'Empty all trash cans, replace liners',
				]
			},
			{
				id: uuidv4(),
				title: 'Restroom(s)',
				services: [
					'Clean / disinfect all hard surfaces (countertops, fixtures, mirrors, sinks)',
					'Sweep / mop hard surface flooring',
					'Wipe / disinfect stall partitions',
					'Clean / disinfect urinals and toilets',
					'Refill all paper products and soap dispensers',
					'Test hand dryers, if not working report to maintenance',
					'Empty all trash cans, replace liners',
				]
			},
			{
				id: uuidv4(),
				title: 'Break Room',
				services: [
					'Wipe / disinfect all hard surfaces (table, countertops, refrigerator, cabinets)',
					'Sweep / mop hard suraface flooring',
					'Wipe / disinfect outside and instide of microwave',
					'Straighten items on countertop',
					'Refll paper products and soap dispenser as needed',
					'Empty all trash cans, replace liners',
				],
			},
			{
				id: uuidv4(),
				title: 'Inner Offices / Cubicles',
				services: [
					'Dust filing cabinets, tablesm countertops, bookshelves and all hard surfaces',
					'Vacuum all carpet and sweep hard surface flooring',
					'Dust desks, countertops and all flat surfaces',
					'Dust all computer areas (fax machines, copiers)',
					'Wipe down / disinfect all phones',
					'Empty all trash cans, replace liners',
				],
			}
		],
	},
	{
		id: uuidv4(),
		title: 'Stairways Cleaning',
		category: ['home'],
		content: [
			{
				id: uuidv4(),
				title: 'Stairways Cleaning',
				services: [
					'Vacuuming and mopping the stairs',
					'Wiping the frames/baseboards/common doors/windows and walls',
					'Cleaning and sanitizing the tile floors by the entrances and removing all waste and unwanted mail papers from the floors',
					'Cleaning and sanitizing the laundry rooms and the machines',
				]
			},
		],
	}
]
