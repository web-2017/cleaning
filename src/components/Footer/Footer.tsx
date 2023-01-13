import { Grid, IconButton } from '@mui/material'
import { Facebook, Instagram } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { memo } from 'react'
import { Box } from '@mui/system'

import { COLORS } from '../../utils/COLORS'
import { Text } from '@/ui'
import { MainLogo } from '../MainLogo'
import { FooterList } from './FooterList'
import { footerMenu } from 'src/utils/fakeData'
import { CONSTANTS } from '../../utils/constants'

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
			textTransform: 'capitalize',
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
		<Box sx={{ backgroundColor: COLORS.footerBg.main }}>
			<Grid
				item={true}
				height={470}
				sm={4}
				style={{
					color: '#fff',
					display: 'flex',
					alignItems: 'center',
					paddingLeft: 100,
				}}
			>
				<Grid
					container
					spacing={2}
					pl={2}
					sx={{
						flexDirection: 'row',
					}}
				>
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

					{footerMenu.map((elem, i) => (
						<Grid key={`FooterList-${i}`} item={true} sm={2.5} sx={{}}>
							<FooterList
								title={elem.title}
								menus={elem.menus}
								link={elem.menus[i].link}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Box
				sx={{
					padding: 2,
					display: 'flex',
					justifyContent: 'center',
					color: '#fff',
				}}
			>
				Copyright by
				<span style={{ textTransform: 'uppercase' }}>
					{CONSTANTS.mainTitle}
				</span>
				@ {new Date().getFullYear()}. All rights reserved
			</Box>
		</Box>
	)
}

export default memo(Footer)
