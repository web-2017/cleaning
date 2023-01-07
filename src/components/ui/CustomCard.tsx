import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CSSProperties } from 'react'

type CustomCardType = {
	title: string
	text: string
	img?: string
	btn?: string[]
	style?: CSSProperties
	width?: number
	height?: number
}

export const CustomCard = ({
	title,
	text,
	img,
	btn,
	style,
	width = 345,
	height = 340
}: CustomCardType) => {
	return (
		<Card sx={{ maxWidth: width }} style={style}>
			{img && (
				<CardMedia sx={{ height: height }} image={img} title='green iguana' />
			)}
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{text}
				</Typography>
			</CardContent>
			<CardActions>
				{btn &&
					btn?.map((txt, index) => (
						<Button key={index} size='small'>
							{txt}
						</Button>
					))}
			</CardActions>
		</Card>
	)
}
