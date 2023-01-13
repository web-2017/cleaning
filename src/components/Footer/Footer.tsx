import {
	Grid,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { Facebook, Instagram } from '@mui/icons-material'
import { memo } from 'react'

import { COLORS } from '../../utils/COLORS'
import { Box } from '@mui/system'
import { Text } from '@/ui'
import { MainLogo } from '../MainLogo'
import { FooterList } from './FooterList'
import { footerMenu } from 'src/utils/fakeData'
import SendIcon from '@mui/icons-material/Send'
import { useTheme } from '@mui/material/styles'

const Footer = () => {
	const theme = useTheme()

	const styles = {
		listBtn: {
			color: theme.palette.text.disabled,

			'&:hover': {
				color: '#fff',
			},
			'& > span': {
				fontSize: 18,
			},
		},
		title: {
			'& > span': {
				fontSize: 20,
				fontWeight: 'bold',
				'&:before': {
					content: "''",
					borderBottom: '1px solid #fff',
					position: 'absolute',
					bottom: 0,
					width: 60,
				},
			},
			fontWeight: 'bold',
		},
	}

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
				alignItems: 'center',
				paddingLeft: 100,
				paddingBottom: 20,
			}}
		>
			<Grid container spacing={2} pl={2}>
				<Grid item={true} sm={4}>
					<Box>
						<MainLogo variant />
						<Text style={{ marginLeft: 0 }}>
							Amet minim mollit non deserunt ullamc est sit aliqua dolor amet
							sint. Amet minim mollit non deserunt ullamco est sit aliqua.
						</Text>
					</Box>
					<Box sx={{ textAlign: 'center' }}>
						<IconButton
							href='https://www.facebook.com/'
							aria-label='upload picture'
							target={'_blank'}
							style={{ color: '#fff' }}
						>
							<Facebook />
						</IconButton>
						<IconButton
							style={{ color: '#fff' }}
							aria-label='upload picture'
							target={'_blank'}
							href='https://twitter.com/'
						>
							<Instagram />
						</IconButton>
					</Box>
				</Grid>

				<Grid item={true} sm={4}>
					<ListItemButton href='services'>
						<ListItemText sx={styles.title} primary='Services' />
					</ListItemButton>
					<ListItemButton href='#' style={styles.title}>
						<ListItemText
							sx={{
								...styles.listBtn,
							}}
							primary='House Cleaning'
						/>
					</ListItemButton>
					<ListItemButton href='#'>
						<ListItemText sx={styles.listBtn} primary='Office Cleaning' />
					</ListItemButton>
					<ListItemButton href='#'>
						<ListItemText sx={styles.listBtn} primary='Window Cleaning' />
					</ListItemButton>
					<ListItemButton href='#'>
						<ListItemText sx={styles.listBtn} primary='Floor Cleaning' />
					</ListItemButton>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default memo(Footer)
