import { Button, ButtonProps } from '@mui/material'
import Link from 'next/link'
import { FC, CSSProperties } from 'react'
import { COLORS } from '../../utils/COLORS'

type CustomButtonType = {
	text?: string
	afterIcon?: any
	href?: string
	linkStyle?: CSSProperties
	style?: CSSProperties
}

export const CustomButton: FC<ButtonProps & CustomButtonType> = ({
	text,
	size,
	startIcon,
	endIcon,
	href,
	linkStyle,
	style,
}) => {
	return (
		<Button size={size} startIcon={startIcon} endIcon={endIcon} style={style}>
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
