import {
	Grid,
	IconButton,
	OutlinedInputProps,
	TextField,
	TextFieldProps,
} from '@mui/material'
import { Facebook, Instagram } from '@mui/icons-material'
import { styled, useTheme, withStyles } from '@mui/material/styles'
import { memo } from 'react'
import { Box } from '@mui/system'

import { COLORS } from '../../utils/COLORS'
import { CustomButton, Text } from '@/ui'
import { MainLogo } from '../MainLogo'
import { FooterList } from './FooterList'
import { footerMenu } from 'src/utils/fakeData'
import { CONSTANTS } from '../../utils/constants'
import SendIcon from '@mui/icons-material/Send'

const Footer = () => {
	const theme = useTheme()

	const CssTextField = styled((props: TextFieldProps) => (
		<TextField {...props} />
	))(({ theme }) => ({
		'& label.Mui-focused': {
			color: '#fff',
		},
		'& label': {
			color: '#fff',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#fff',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#fff',
				color: '#fff',
			},
			'& > input': {
				borderColor: '#fff',
				color: '#fff',
			},

			// '&:hover fieldset': {
			// 	borderColor: '#f5f5f5',
			// },
			// '&.Mui-focused fieldset': {
			// 	borderColor: 'green',
			// },
		},
	}))

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
						<Box>
							<Text style={{ marginLeft: 0 }}>
								Subscribe our news letter to get latest news and updates
							</Text>
							<Box sx={{ display: 'flex' }}>
								<CssTextField
									fullWidth
									size='small'
									label='Enter your email'
									variant='outlined'
								/>
								<CustomButton
									style={{ padding: 0 }}
									variant='text'
									size={'large'}
									endIcon={<SendIcon style={{ fontSize: 40, color: '#fff' }} />}
								/>
							</Box>
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
				@ 2023. All rights reserved
				{/* @ {date}. All rights reserved */}
			</Box>
		</Box>
	)
}

export default memo(Footer)
