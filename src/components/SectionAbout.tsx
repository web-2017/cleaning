import { Grid } from '@mui/material'
import React from 'react'
import { CustomImage } from './CustomImage'

export const SectionAbout = () => {
	return (
		<Grid
			item
			xs={12}
			sx={{
				position: 'relative',
			}}
		>
			<CustomImage
				width={340}
				height={280}
				alt='cleaning'
				src='/other/img2.png'
				props={{
					position: 'absolute',
					top: '10px',
				}}
			/>
		</Grid>
	)
}
