import { FC, PropsWithChildren, CSSProperties } from 'react'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

type TitleType = {
	style?: CSSProperties
	color?: any
	size?: number
	variant?: string
	bold?: boolean
}

export const Title: FC<PropsWithChildren<TitleType>> = ({
	children,
	style,
	color,
	size,
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
				...style,
			}}
			{...otherProps}
		>
			{children}
		</Typography>
	)
}
