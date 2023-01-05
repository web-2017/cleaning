import { Grid, Paper, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CustomButton, CustomImage, Title, Text } from '@/ui'
import { COLORS } from 'src/utils/COLORS'
import { useState } from 'react'
import ServiceItems from './ServiceItems'

const Services = () => {
	const theme = useTheme()
	const [elevation, setElevation] = useState(8)
	return (
		<Grid container justifyContent={'center'} spacing={2} mt={2} mb={2}>
			<Grid item={true} sm={12}>
				<Title
					size={18}
					variant={'h4'}
					style={{ textAlign: 'center', marginBottom: 15 }}
					color={COLORS.blue}
				>
					our service
				</Title>
				<Title
					size={32}
					variant={'h4'}
					style={{ textAlign: 'center', marginBottom: 100 }}
				>
					WHAT WE ARE OFFERING
				</Title>
			</Grid>
			<ServiceItems />
			<Grid item={true} sm={12}>
				<Box mt={4} sx={{ textAlign: 'center' }}>
					<CustomButton size='small' variant='outlined' text='more...' />
				</Box>
			</Grid>
		</Grid>
	)
}

export default Services
