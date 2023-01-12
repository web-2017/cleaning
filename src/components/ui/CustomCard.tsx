import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CSSProperties } from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Box } from '@mui/material'
import { COLORS } from '../../utils/COLORS'

type CustomCardType = {
	title: string
	cardTitleStyle?: CSSProperties
	text: string
	cardTextStyle?: CSSProperties
	img?: string
	btn?: string[]
	style?: CSSProperties
	width?: number
	height?: number
	userFullName?: string
	userPosition?: string
	userAvatar?: string
	showDate?: boolean
}

export const CustomCard = ({
	title,
	text,
	img,
	btn,
	style,
	width = 345,
	height = 340,
	userFullName,
	userPosition,
	userAvatar,
	cardTitleStyle,
	cardTextStyle,
	showDate,
}: CustomCardType) => {
	return (
		<Card sx={{ maxWidth: width }} style={style}>
			{img && (
				<CardMedia sx={{ height: height }} image={img} title='green iguana' />
			)}
			<CardContent>
				<Box sx={{ position: 'relative', marginBottom: 2 }}>
					{userFullName && (
						<Stack
							direction='row'
							spacing={2}
							style={{
								textAlign: 'left',
								alignItems: 'center',
								position: 'relative',
							}}
						>
							<Avatar
								alt={userFullName}
								src={userAvatar}
								sx={{ width: 30, height: 30 }}
								variant='rounded'
							/>
							<Stack direction='column'>
								<Typography gutterBottom variant='body2' component='span'>
									{userFullName}
								</Typography>
								<Typography gutterBottom variant='body2' component='p'>
									{userPosition}
								</Typography>
							</Stack>
						</Stack>
					)}
					{showDate && (
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								right: 0,
								fontSize: 12,
								backgroundColor: COLORS.blue,
								color: '#fff',
								padding: 0.2,
								borderRadius: 0.6,
							}}
						>
							{new Date().toLocaleDateString()}
						</Box>
					)}
				</Box>

				<Typography
					gutterBottom
					variant='h5'
					component='div'
					style={{ ...cardTitleStyle }}
				>
					{title}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					style={{ ...cardTextStyle }}
				>
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
