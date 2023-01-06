import { Grid } from '@mui/material'
import React from 'react'
import { COLORS } from 'src/utils/COLORS'
import { Title } from './Title'

type TitleSubtitleType = {}

const TitleSubtitle = ({ subTitle, title, ...otherProps }) => {
	return (
		<Grid item={true} sm={12} {...otherProps}>
			<Title
				size={18}
				variant={'h4'}
				style={{ textAlign: 'center', marginBottom: 15 }}
				color={COLORS.blue}
			>
				{subTitle}
			</Title>
			<Title
				size={32}
				variant={'h4'}
				style={{ textAlign: 'center', marginBottom: 100 }}
			>
				{title}
			</Title>
		</Grid>
	)
}

export default TitleSubtitle
