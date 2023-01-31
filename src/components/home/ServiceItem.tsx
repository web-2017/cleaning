import { Grid, Paper, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { CustomImage, Title, CustomText } from '@/ui'
import { COLORS } from 'src/utils/COLORS'

type ServiceItemType = {
	icon: any
	title: string
	text: string
}

export const ServiceItem = ({ icon, title, text }: ServiceItemType) => {
	const theme = useTheme()
	return (
		<Grid
			item={true}
			sm={6}
			md={4}
			lg={3}
			style={{ marginBottom: 80, display: 'flex', justifyContent: 'center' }}
		>
			<Paper
				elevation={1}
				sx={{
					width: 278,
					minHeight: 184,
					border: `1px solid ${theme.palette.grey[300]}`,
					borderRadius: 3,
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
					paddingTop: 5,
					'&:hover': {
						backgroundColor: COLORS.blue,
						h2: {
							color: '#fff',
						},
						p: {
							color: '#fff',
						},
					},
				}}
			>
				<Box
					sx={{
						width: 100,
						height: 100,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: '50%',
						position: 'absolute',
						top: '0',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						backgroundColor: '#fff',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{icon?.src && (
						<CustomImage
							alt='home icon'
							src={icon?.src}
							width={40}
							height={40}
						/>
					)}
					{icon?.component && icon?.component}
				</Box>
				<Box p={2} sx={{ textAlign: 'center' }}>
					<Title
						center
						size={20}
						color={COLORS.blue}
						style={{ paddingBottom: 10 }}
					>
						{title}
					</Title>
					<CustomText size={14} style={{ margin: 0 }}>
						{text}
					</CustomText>
				</Box>
			</Paper>
		</Grid>
	)
}
