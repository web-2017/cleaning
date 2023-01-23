import { Grid, Paper, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'

import { CustomButton, CustomImage, Title, TitleSubtitle } from '@/ui'

import ServiceItems from './ServiceItems'

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
						onClick={() => null}
					/>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Services
