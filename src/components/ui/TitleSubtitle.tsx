import { Grid } from '@mui/material'
import React, { CSSProperties } from 'react'
import { COLORS } from 'src/utils/COLORS'
import { Title } from './Title'

type TitleSubtitleType = {
	subTitle?: string
	subTitleVariant?: string
	title: string
	titleVariant?: string
	subtitleSize?: number
	titleSize?: number
	style?: CSSProperties
}

export const TitleSubtitle = ({ subTitle, title, titleSize = 32, subtitleSize = 18, subTitleVariant = 'h4', titleVariant = 'h3', style, ...otherProps }: TitleSubtitleType) => {
	return (
		<Grid item={true} sm={12} style={style} {...otherProps}>
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
				style={{ textAlign: 'center' }}
			>
				{title}
			</Title>
		</Grid>
	)
}

