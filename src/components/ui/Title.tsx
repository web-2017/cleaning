import { FC, PropsWithChildren, CSSProperties } from 'react'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

type TitleType = {
	style?: CSSProperties
	color?: any
	size?: number
	variant?: Variant
	bold?: boolean
	center?: boolean
}

export const Title: FC<PropsWithChildren<TitleType>> = ({
	children,
	style,
	color,
	size,
	center,
	bold,
	variant = 'h2',
	...otherProps
}) => {
	const theme = useTheme()

	return (
		<Typography
			variant={variant}
			fontWeight={500}
			fontSize={size}
			color={color ?? theme.palette.text.primary}
			style={{
				textTransform: 'uppercase',
				fontFamily: theme.typography.fontFamily,
				fontWeight: bold ? 'bold' : 'normal',
				textAlign: center ? 'center' : 'left',
				...style,
			}}
			{...otherProps}
		>
			{children}
		</Typography>
	)
}
