import { Grid } from '@mui/material'
import React, { CSSProperties } from 'react'
import { COLORS } from 'src/utils/COLORS'
import { Title } from './Title'

type TitleSubtitleType = {
	subTitle?: string
	subTitleStyle?: CSSProperties
	subTitleVariant?: string
	title: string
	titleStyle?: CSSProperties
	titleVariant?: string
	subtitleSize?: number
	titleSize?: number
	style?: CSSProperties
}

export const TitleSubtitle = ({
	subTitle,
	title,
	titleSize = 32,
	subtitleSize = 18,
	subTitleVariant = 'h4',
	titleVariant = 'h3',
	titleStyle,
	subTitleStyle,
	style,
	...otherProps
}: TitleSubtitleType) => {
	return (
		<Grid item={true} sm={12} style={style} {...otherProps}>
			<Title
				size={subtitleSize}
				variant={subTitleVariant}
				style={{ textAlign: 'center', marginBottom: 15, ...subTitleStyle }}
				color={COLORS.blue}
			>
				{subTitle}
			</Title>
			<Title
				size={titleSize}
				variant={titleVariant}
				style={{ textAlign: 'center', fontWeight: 500, ...titleStyle }}
			>
				{title}
			</Title>
		</Grid>
	)
}
