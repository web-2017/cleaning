import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'
import React from 'react'

import { CustomImage, Title, Text, CustomButton } from '@/ui'
import { COLORS } from '../utils/COLORS'

export const SectionAbout = () => {
	const theme = useTheme()
	return (
		<Grid container xs={12} mt={4} spacing={2} sx={{}}>
			<Grid item xs={12} sm={6}>
				<Box
					component={'h4'}
					style={{
						color: COLORS.blue,
						textTransform: 'uppercase',
					}}
				>
					about us
				</Box>
				<Title size={20} variant='h4'>
					QUICKLY AND EASY TO CLEAN YOUR OFFICE AND HOUSE
				</Title>
				<Text style={{ marginLeft: 0 }}>
					Amet minim mollit non deserunt ullamco sit aliqua dolor do consequat
					sunt nostrud amet. Amet minim mollit non deserunt ullamco aliqua dolo
					ame.
				</Text>
				<Title size={16} variant='h5' color={COLORS.blue}>
					AWARD WINNING COMPANY
				</Title>
				<Text style={{ marginLeft: 0 }}>
					Amet minim mollit non sit aliqua dolor do consequat sunt nostrud amet.
					Amet mollit ullamco aliqua dolo ame.
				</Text>
				<CustomButton variant='contained' text='Our Services' />
			</Grid>
			<Grid item xs={12} sm={6}>
				<Text>about us</Text>
			</Grid>
		</Grid>
	)
}
