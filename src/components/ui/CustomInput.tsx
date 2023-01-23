import { TextFieldProps, TextField, OutlinedInputProps } from '@mui/material'
import styled from 'styled-components'

interface ICustomInputProps {
	labelColor?: string
}

const CustomInput = styled(
	(labelColor, props: TextFieldProps & ICustomInputProps) => (
		<TextField
			InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
			{...props}
		/>
	)
)(({ theme }) => ({
	'& label.Mui-focused': {
		color: '#000',
	},
	'& label': {
		color: '#808080',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#fff',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#fff',
			color: '#fff',
		},
		// '&:hover fieldset': {
		// 	borderColor: '#f5f5f5',
		// },
		// '&.Mui-focused fieldset': {
		// 	borderColor: 'green',
		// },
	},
}))
