import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { CustomImage, Title, Text, CustomButton } from '@/ui'
import { COLORS } from '@/utils'

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows
			}&fit=crop&auto=format&dpr=2 2x`,
	}
}

export const SectionAbout = () => {
	const theme = useTheme()
	return (
		<Grid container mt={4} spacing={2}>
			<Grid item={true} xs={12} sm={6} style={{ alignSelf: 'center' }}>
				<Box
					component={'h4'}
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
			<Grid item={true} xs={12} sm={6} style={{ alignSelf: 'center' }}>
				<ImageList
					// sx={{ width: 500, height: 450, }}
					variant='quilted'
					cols={4}
					rowHeight={150}
				>
					{itemData.map((item) => (
						<ImageListItem
							key={item.img}
							cols={item.cols || 1}
							rows={item.rows || 1}
						>
							<img
								{...srcset(item.img, 0, item.rows, item.cols)}
								alt={item.title}
								loading='lazy'
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Grid>
		</Grid>
	)
}

const itemData = [
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
