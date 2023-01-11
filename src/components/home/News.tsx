import React from 'react'
import { Grid } from '@mui/material'
import { TitleSubtitle } from '@/ui'

const News = () => {
	return (
		<Grid container spacing={2}>
			<TitleSubtitle
				title='READ OUR LATEST BLOG'
				subTitle='LATEST NEWS'
				titleStyle={{ fontWeight: 600 }}
			/>
			<Grid></Grid>
		</Grid>
	)
}

export default News
