import { FC, PropsWithChildren, CSSProperties } from 'react'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

type TitleType = {
	style?: CSSProperties,
	color?: any
}

export const Title: FC<PropsWithChildren<TitleType>> = ({
	children,
	style,
	color,
	...otherProps
}) => {
	const theme = useTheme()
	console.log(1, color);


	return (
		<Typography
			variant='h2'
			fontWeight={500}
			color={color ?? theme.palette.text.primary}
			style={{ fontFamily: theme.typography.fontFamily, ...style }}
			{...otherProps}
		>
			{children}
		</Typography>
	)
}
