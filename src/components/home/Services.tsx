import { Grid, Paper, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CustomButton, CustomImage, Title, Text, TitleSubtitle } from '@/ui'
import { COLORS } from 'src/utils/COLORS'
import { useState } from 'react'
import ServiceItems from './ServiceItems'
import Link from 'next/link'

const Services = () => {
	const theme = useTheme()
	return (
		<Grid container justifyContent={'center'} spacing={2} mt={2} mb={5}>
			<Grid item={true} sm={12}>
				<TitleSubtitle
					subTitle='our service'
					title='WHAT WE ARE OFFERING'
					style={{ marginBottom: 90 }}
				/>
			</Grid>
			<ServiceItems />
			<Grid item={true} sm={12}>
				<Box sx={{ textAlign: 'center' }}>
					<CustomButton
						size='small'
						variant='outlined'
						text='show more...'
						href={'/services'}
					/>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Services
