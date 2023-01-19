import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

type kindOfError = 'error' | 'success'

type CustomAlertType = {
	setOpen: (param: boolean) => boolean
	title: string
	kindOfError: kindOfError
	text: string
}

export const CustomAlert = ({
	setOpen,
	title = '',
	kindOfError = 'error',
	text = 'All fields are required!',
}: CustomAlertType) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert
				severity={kindOfError} // error || success
				action={
					<IconButton
						aria-label='close'
						color='inherit'
						size='small'
						onClick={() => {
							setOpen(false)
						}}
					>
						<CloseIcon fontSize='inherit' />
					</IconButton>
				}
			>
				<AlertTitle>{title}</AlertTitle>
				{text}
			</Alert>
		</Stack>
	)
}
