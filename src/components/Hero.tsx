import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import { url } from 'inspector'
import { after } from 'node:test'
import { Title } from './Title'
import { roboto } from '../utils/theme'
import { useTheme } from '@mui/material/styles'

const styles = {
	wrapper: {
		background: `url(${'/bg/hero.jpg'}) center center/cover no-repeat`,
		width: '100%',
		height: '500px',
		backgroundPosition: 'left',
		backgroundSize: 'cover',
		position: 'relative',
	},
	wrapperTitle: {
		position: 'absolute',
	},
}

export const Hero = () => {
	const theme = useTheme()
	return (
		<Grid item xs={12}>
			<Paper style={styles.wrapper}>
				<Box
					component={'div'}
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						background: '#00000047',
						top: 0,
						left: 0,
						zIndex: 1,
					}}
				>
					<Title
						variant='h4'
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							color: '#fff',
							transform: 'translate(-50%,-50%)',
							width: '40%',
							textAlign: 'center',
							zIndex: 10,
						}}
					>
						PROFESSIONAL RESIDENTIAL AND COMMERCIAL CLEANING SERVICES
					</Title>
				</Box>
			</Paper>
		</Grid>
	)
}
