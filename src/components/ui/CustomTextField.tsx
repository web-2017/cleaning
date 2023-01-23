import { TextField, TextFieldProps } from '@mui/material'

type CustomTextFieldType = {
	value: string
	onChange: (param?: any) => void
	label: string
}

export const CustomTextField = ({
	value,
	onChange,
	label,
	...otherProps
}: CustomTextFieldType & TextFieldProps) => {
	return (
		<TextField
			{...otherProps}
			label={label}
			value={value}
			onChange={onChange}
			fullWidth
		/>
	)
}
