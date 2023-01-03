import { Typography } from '@mui/material'
import { FC, PropsWithChildren, CSSProperties } from 'react'

type VariantType =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'caption'
	| 'overline'

type TextType = {
	variant?: VariantType
	style?: CSSProperties
}

export const Text: FC<PropsWithChildren<TextType>> = ({
	variant,
	style,
	children,
	...otherProps
}) => {
	return (
		<Typography
			{...otherProps}
			variant={variant}
			gutterBottom
			m={2}
			style={style}
		>
			{children}
		</Typography>
	)
}
