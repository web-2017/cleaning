import { CalendarMonthOutlined } from '@mui/icons-material'
import { Button, ButtonProps } from '@mui/material'
import { FC } from 'react'

type CustomButtonType = {
	text: string
	afterIcon?: any
}

export const CustomButton: FC<ButtonProps & CustomButtonType> = ({
	text,
	variant,
	size,
	startIcon,
	endIcon,
}) => {
	return (
		<Button
			variant={variant}
			size={size}
			startIcon={startIcon}
			endIcon={endIcon}
		>
			{text}
		</Button>
	)
}
