import { Button, ButtonProps } from '@mui/material'
import Link from 'next/link'
import { FC, CSSProperties } from 'react'
import { COLORS } from '../../utils/COLORS'

type VariantType = 'text' | 'outlined' | 'contained'

type CustomButtonType = {
	text: string
	startIcon?: any
	endIcon?: any
	href?: string
	linkStyle?: CSSProperties
	style?: CSSProperties
	size?: ButtonProps
	variant?: VariantType
	bold?: boolean
	disabled?: boolean
	onClick: (param?: any) => void
}

export const CustomButton: FC<ButtonProps & CustomButtonType> = ({
	text,
	size,
	startIcon,
	endIcon,
	href,
	bold,
	linkStyle,
	style,
	variant,
	disabled,
	onClick,
}) => {
	return (
		<Button
			size={size}
			startIcon={startIcon}
			endIcon={endIcon}
			variant={variant}
			style={{
				fontWeight: bold ? 'bold' : 'normal',
				borderWidth: variant === 'outlined' && bold ? '3px' : '1px',
				...style,
			}}
			disabled={disabled}
			onClick={onClick}
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
