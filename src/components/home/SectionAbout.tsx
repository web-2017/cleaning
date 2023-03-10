/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { Title, CustomButton, CustomText } from '@/ui'
import { COLORS, itemData } from '@/utils'

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
		width: size * cols,
		height: size * rows,
	}
}

export const SectionAbout = () => {
	const theme = useTheme()
	return (
		<Grid container mt={4} spacing={2}>
			<Grid item={true} xs={12} sm={6} style={{ alignSelf: 'center' }}>
				<Box
					component={'h3'}
					style={{
						color: COLORS.blue,
						textTransform: 'uppercase',
					}}
				>
					about us
				</Box>
				<Title bold size={20} variant='h4'>
					QUICKLY AND EASY TO CLEAN YOUR OFFICE AND HOUSE
				</Title>
				<CustomText style={{ marginLeft: 0 }}>
					We are dedicated to providing high-quality cleaning services to homes
					and businesses across Illinois, USA. With a team of experienced and
					professional cleaners, we strive to make every space spotless and
					hygienic.
				</CustomText>
				{/* <Title size={16} variant='h5' color={COLORS.blue}>
					AWARD WINNING COMPANY
				</Title>
				<CustomText style={{ marginLeft: 0 }}>
					Amet minim mollit non sit aliqua dolor do consequat sunt nostrud amet.
					Amet mollit ullamco aliqua dolo ame.
				</CustomText> */}
				<CustomButton
					variant='contained'
					text='Our Services'
					onClick={() => null}
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6} style={{ alignSelf: 'center' }}>
				<ImageList variant='quilted' cols={4} rowHeight={150}>
					{itemData.map((item) => {
						return (
							<ImageListItem
								key={item.img}
								cols={item.cols || 1}
								rows={item.rows || 1}
							>
								<img
									{...srcset(item.img, 0, item.rows, item.cols)}
									alt={item.title}
									width={srcset(item.img, 0, item.rows, item.cols)?.width}
									height={srcset(item.img, 0, item.rows, item.cols)?.height}
									loading='lazy'
								/>
							</ImageListItem>
						)
					})}
				</ImageList>
			</Grid>
		</Grid>
	)
}
