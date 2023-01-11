import React from 'react'
import { Box, Button, Grid, useTheme } from '@mui/material'
import { CalendarMonthOutlined } from '@mui/icons-material'

import { roboto } from '../../utils/theme'
import { CustomImage, Title, CustomButton } from '@/ui'

const styles = {
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapperTitle: {
		position: 'absolute',
	},
}

export const Hero = () => {
	const theme = useTheme()
	return (
		<Grid
			container
			style={{
				// background: 'linear-gradient(-45deg, #bfedfd, #fff, #fff, #bfedfd)',
				background: 'url(/bg/bg-hero.png) top left no-repeat',
			}}
		>
			<Grid item={true} xs={12} md={6} style={styles.wrapper}>
				<Box sx={{ width: { xs: '100%', md: '400px' } }}>
					<Title variant='h3' size={20} pb={2}>
						HIGHLY PROFESSIONAL CLEANING
					</Title>
					<Title variant='h1' size={40}>
						<span style={{ color: theme.palette.primary.main }}>
							EASY TO CLEAN
						</span>{' '}
						HOUSE AND OFFICE
					</Title>
					<p>
						Amet minim mollit non deserunt ullamco sit aliqua dolor do amet
						sint. Velit officia enim velit mollit. Exercitation veniam consequat
						sunt nostrud amet.
					</p>
					<CustomButton
						variant='contained'
						text='Get a Quote'
						startIcon={<CalendarMonthOutlined />}
					/>
				</Box>
			</Grid>
			<Grid item={true} xs={12} md={6} style={{ textAlign: 'center' }}>
				<CustomImage
					alt='home page illinois maids images'
					width={300}
					height={400}
					src='/other/hero-girl.png'
				/>
			</Grid>
		</Grid>
	)
}
