import { Box, Grid, useTheme } from '@mui/material'
import { CalendarMonthOutlined } from '@mui/icons-material'

import { CustomImage, Title, CustomButton } from '@/ui'

const styles = {
	container: {
		position: 'relative',
		'&:before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			background: 'linear-gradient(-45deg, #bfedfd, #fff, #fff, #bfedfd)',
			width: '100%',
			height: '100%',
			zIndex: -1
		}
	},
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
		<Grid container sx={styles.container}>
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
						variant='outlined'
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
