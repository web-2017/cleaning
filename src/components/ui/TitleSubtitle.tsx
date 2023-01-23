import { Grid, TypographyProps } from '@mui/material'
import React, { CSSProperties } from 'react'
import { COLORS } from 'src/utils/COLORS'
import { Title } from './Title'
import { Variant } from '@mui/material/styles/createTypography'

type TitleSubtitleType = {
	subTitle?: string
	subTitleStyle?: CSSProperties
	subTitleVariant?: Variant
	title: string
	titleStyle?: CSSProperties
	titleVariant?: Variant
	subtitleSize?: number
	titleSize?: number
	style?: CSSProperties
	otherProps?: TypographyProps
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
