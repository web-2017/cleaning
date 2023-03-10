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

type CustomTextType = {
	variant?: VariantType
	style?: CSSProperties
	size?: number
}

export const CustomText: FC<PropsWithChildren<CustomTextType>> = ({
	variant,
	style,
	size,
	children,
	...otherProps
}) => {
	return (
		<Typography
			{...otherProps}
			variant={variant}
			gutterBottom
			m={2}
			style={{ fontSize: size ?? 16, ...style }}
		>
			{children}
		</Typography>
	)
}
