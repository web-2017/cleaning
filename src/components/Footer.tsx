import { Grid } from '@mui/material'
import { memo } from 'react'
import { COLORS } from '../utils/COLORS'
import { Box } from '@mui/system'
import { CustomImage } from './ui'
import { MainLogo } from './MainLogo'

const Footer = () => {
	return (
		<Grid
			item={true}
			height={470}
			sm={4}
			style={{
				backgroundColor: COLORS.footerBg.main,
				color: '#fff',
				display: 'flex',
				justifyContent: 'space',
				alignItems: 'flex-end',
			}}
		>
			<Grid container spacing={2} pl={2}>
				<Grid item={true} sm={4}>
					<Box>
						<MainLogo variant />
					</Box>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default memo(Footer)
