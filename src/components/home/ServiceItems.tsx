import React from 'react'
import NightShelterIcon from '@mui/icons-material/NightShelter'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import CountertopsIcon from '@mui/icons-material/Countertops'

import { COLORS } from 'src/utils/COLORS'

import { seoContent } from 'src/seo/seoContent'
import { ServiceItem } from './ServiceItem'

const styles = {
	icon: {
		fontSize: 50,
		color: COLORS.blue,
	},
}

const iconPath = [
	{
		src: '/icons/house.png',
	},
	{
		component: <NightShelterIcon style={styles.icon} />,
	},
	{
		component: <BedIcon style={styles.icon} />,
	},
	{
		component: <NightShelterIcon style={styles.icon} />,
	},
	{
		component: <BathtubIcon style={styles.icon} />,
	},
	{
		component: <CountertopsIcon style={styles.icon} />,
	},
	{
		src: '/icons/floor.png',
	},
	{
		src: '/icons/window.png',
	},
]

const ServiceItems = () => {
	return (
		<>
			{seoContent.servicesListData.map((ctx, i) => {
				return (
					<ServiceItem
						key={i}
						text={ctx?.text}
						title={ctx.title}
						icon={iconPath[i]}
					/>
				)
			})}
		</>
	)
}

export default ServiceItems
