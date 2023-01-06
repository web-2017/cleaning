import { Button, ButtonProps } from '@mui/material'
import Link from 'next/link'
import { FC, CSSProperties } from 'react'
import { COLORS } from '../../utils/COLORS'

type CustomButtonType = {
	text: string
	afterIcon?: any
	href?: string
	linkStyle?: CSSProperties
}

export const CustomButton: FC<ButtonProps & CustomButtonType> = ({
	text,
	variant,
	size,
	startIcon,
	endIcon,
	href,
	linkStyle,
}) => {
	return (
		<Button
			variant={variant}
			size={size}
			startIcon={startIcon}
			endIcon={endIcon}
		>
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
