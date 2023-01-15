import { Button, ButtonProps } from '@mui/material'
import Link from 'next/link'
import { FC, CSSProperties } from 'react'
import { COLORS } from '../../utils/COLORS'

type VariantType = "text" | "outlined" | "contained"

type CustomButtonType = {
	text?: string
	startIcon?: any
	endIcon?: any
	href?: string
	linkStyle?: CSSProperties
	style?: CSSProperties
	size?: number
	variant?: VariantType
}

export const CustomButton: FC<ButtonProps & CustomButtonType> = ({
	text,
	size,
	startIcon,
	endIcon,
	href,
	linkStyle,
	style,
	variant
}) => {
	return (
		<Button size={size} startIcon={startIcon} endIcon={endIcon} variant={variant} style={style}>
			{href ? (
				<Link
					style={{ textDecoration: 'none', color: COLORS.blue, ...linkStyle }}
					href={href ?? ''}
					passHref
				>
					{text}
				</Link>
			) : (
				text
			)}
		</Button>
	)
}
