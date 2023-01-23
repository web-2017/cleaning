import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal, { ModalProps } from '@mui/material/Modal'
import { CSSProperties } from 'react'
import { ContactForm } from './ContactForm'

const styles = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 2,
}

interface ICustomModal {
	open: boolean
	setModal?: any
	title?: string
	text?: string
	style?: CSSProperties
	props?: ModalProps
	address?: boolean
}

export const CustomModal = ({
	open = false,
	setModal,
	title,
	text,
	style,
	address,
	props,
}: ICustomModal) => {
	return (
		<div>
			<Modal
				{...props}
				open={open}
				onClose={setModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				style={style}
			>
				<Box sx={styles}>
					<ContactForm address={address} />
				</Box>
			</Modal>
		</div>
	)
}
