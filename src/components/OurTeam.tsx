import { Grid } from '@mui/material'
import React from 'react'
import { CustomCard } from '@/ui'

const OurTeam = () => {
	return (
		<Grid container>
			<Grid item={true} xs={6} md={4}>
				<CustomCard
					title='Devon Lane'
					text={'Window cleaner'}
					img={'/persons/user1.png'}
				/>
			</Grid>
		</Grid>
	)
}

export default OurTeam
