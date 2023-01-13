import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useTheme,
} from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'

type menuType = {
	link: string
	text: string
}

type FooterListType = {
	title: string
	menus: menuType[]
	link: string
}

export const FooterList = ({ link, title, menus }: FooterListType) => {
	const theme = useTheme()

	const styles = {
		listBtn: {
			color: theme.palette.text.disabled,

			'&:hover': {
				color: '#fff',
			},
			'& > span': {
				fontSize: 18,
			},
		},
		title: {
			'& > span': {
				fontSize: 20,
				fontWeight: 'bold',
				'&:before': {
					content: "''",
					borderBottom: '1px solid #fff',
					position: 'absolute',
					bottom: 0,
					width: 60,
				},
			},
			fontWeight: 'bold',
		},
	}

	return (
		<>
			<ListItemButton href={link}>
				<ListItemText sx={styles.title} primary={title} />
			</ListItemButton>
			{
				<>
					{menus?.map((menu: menuType, i) => (
						<ListItemButton key={`menu-${i}`} href={menu.link}>
							<ListItemText sx={styles.listBtn} primary={menu.text} />
						</ListItemButton>
					))}
				</>
			}
		</>
	)
}
