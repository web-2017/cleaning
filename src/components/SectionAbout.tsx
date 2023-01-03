import { useTheme } from '@mui/material/styles'
import { Grid } from '@mui/material'
import React from 'react'

import { CustomImage, Title, Text } from '@/ui'

export const SectionAbout = () => {
	const theme = useTheme()
	return (
		<Grid
			container
			xs={12}
			spacing={2}
			sx={{
				height: '400px',
				margin: '100px 0',
			}}
		>
			<Grid xs={6} sx={{ position: 'relative' }}>
				<CustomImage
					width={340}
					height={280}
					alt='cleaning'
					src='/other/img2.png'
					style={{
						position: 'absolute',
						top: '10px',
					}}
				/>
				<CustomImage
					width={40}
					height={40}
					alt='cleaning'
					src='/other/stars.png'
					style={{
						position: 'absolute',
						top: '50px',
						right: 150,
					}}
				/>

				<CustomImage
					width={340}
					height={280}
					alt='cleaning'
					src='/other/img1.png'
					style={{
						position: 'absolute',
						bottom: '0',
						left: 200,
					}}
				/>
				<CustomImage
					width={40}
					height={40}
					alt='cleaning'
					src='/other/stars.png'
					style={{
						position: 'absolute',
						bottom: '40px',
						left: 140,
					}}
				/>
			</Grid>
			<Grid item xs={6}>
				<Text style={{ color: theme.palette.primary.main }}>
					ABOUT SHIFT GROUP
				</Text>
			</Grid>
		</Grid>
	)
}
