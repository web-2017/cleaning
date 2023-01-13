import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'

type FooterListType = {
	title: string
	menu: string
	icon
}

export const FooterList = ({ title, menu, icon }: FooterListType) => {
	console.log()

	return (
		<div>
			<ListItemButton>
				<ListItemIcon>
					<SendIcon style={{ color: '#fff' }} />
				</ListItemIcon>
				<ListItemText primary={'hello'} />
			</ListItemButton>
		</div>
	)
}
