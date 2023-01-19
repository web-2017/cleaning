import React, { useState } from 'react'
import { Grid, Button, Typography, Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import { Link } from '@mui/material'

import { CustomAlert } from './CustomAlert'
import { CONSTANTS } from '@/utils'
import { CustomButton } from './CustomButton'

export const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [open, setOpen] = useState(false)
	const sendEmail = (e) => {
		e.preventDefault()
		if (!email || !phone || !message) {
			setOpen(true)
			return
		} else {
			setOpen(false)
			const fieldsData = {
				name,
				email,
				phone,
				message,
			}

			emailjs
				.send(
					CONSTANTS.emails.EMAILJS_SERVICE_ID,
					CONSTANTS.emails.EMAILJS_TEMPLATE_CONTACT_ID,
					fieldsData,
					CONSTANTS.emails.EMAILJS_PUBLIC_KEY
				)
				.then(
					(result) => {
						// console.log('emailjs result', result)
						// console.log('emailjs', result.text)

						if (result.status === 200) {
							setName('')
							setEmail('')
							setPhone('')
							setMessage('')
							alert('Success, See you soon')
						} else {
							alert('Oops, something was wrong! please try again or call me')
						}
					},
					(error) => {
						setOpen(false)
						console.log(error.text)
					}
				)
		}
	}

	return (
		<Grid
			container
			spacing={2}
			maxWidth='sm'
			style={{ display: 'flex', textAlign: 'center', margin: '100px auto' }}
		>
			<Grid
				item={true}
				flexDirection='column'
				alignContent='center'
				justifyContent='center'
				sx={{ textAlign: 'center' }}
			>
				<Typography mb={2} style={{ textAlign: 'center' }} variant='h4'>
					Contacts
				</Typography>
				<Typography
					component={Link}
					href={`tel:${CONSTANTS.phone.primary}`}
					style={{ textAlign: 'center' }}
					variant='h4'
				>
					{CONSTANTS.phone.primary}
				</Typography>
				<Typography mt={2} style={{ textAlign: 'center' }} variant='h6'>
					{CONSTANTS.company.address}
				</Typography>
			</Grid>

			{open && <CustomAlert setOpen={setOpen} title='Error' />}
			<Grid item={true} xs={12} sm={6} md={6}>
				<TextField
					label='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6} md={6}>
				<TextField
					required
					label='Phone'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6} md={12}>
				<TextField
					required
					label='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
				/>
			</Grid>

			<Grid item={true} xs={12}>
				<TextField
					multiline
					rows={4}
					fullWidth
					required
					label='Message'
					value={message}
					onChange={(e) => {
						// console.log(newValue?.toLocaleTimeString())
						setMessage(e.target.value)
					}}
				/>
			</Grid>
			<Grid
				style={{ marginTop: '20px' }}
				container
				xs={12}
				item={true}
				justifyContent='center'
			>
				<CustomButton
					text='Send'
					variant='contained'
					disabled={!email && !phone && !message}
					onClick={(e) => sendEmail(e)}
					color='success'
				/>
			</Grid>
		</Grid>
	)
}
