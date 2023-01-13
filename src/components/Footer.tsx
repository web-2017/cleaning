import { Grid } from '@mui/material'
import { memo } from 'react'
import { COLORS } from '../utils/COLORS'

const Footer = () => {
	return (
		<Grid
			item={true}
			height={470}
			style={{ backgroundColor: COLORS.footerBg.main, color: '#fff' }}
		>
			Footer
		</Grid>
	)
}

export default memo(Footer)
