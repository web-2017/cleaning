import { Grid } from '@mui/material'
import React from 'react'
import { COLORS } from 'src/utils/COLORS'
import { Title } from './Title'

type TitleSubtitleType = {
	subTitle?: string
	subTitleVariant?: string
	title: string
	titleVariant?: string
	subtitleSize?: number
	titleSize?: number
}

export const TitleSubtitle = ({ subTitle, title, titleSize = 32, subtitleSize = 18, subTitleVariant = 'h4', titleVariant = 'h3', ...otherProps }: TitleSubtitleType) => {
	return (
		<Grid item={true} sm={12} {...otherProps}>
			<Title
				size={subtitleSize}
				variant={subTitleVariant}
				style={{ textAlign: 'center', marginBottom: 15 }}
				color={COLORS.blue}
			>
				{subTitle}
			</Title>
			<Title
				size={titleSize}
				variant={titleVariant}
				style={{ textAlign: 'center', marginBottom: 100 }}
			>
				{title}
			</Title>
		</Grid>
	)
}

