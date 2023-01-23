import React, { useState } from 'react'
import { Grid, Button, Typography, Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import { Link } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { CustomAlertField } from './CustomAlertField'
import { CONSTANTS } from '@/utils'
import { CustomButton } from './CustomButton'
import { CustomTextField } from './CustomTextField'

export const ContactForm = ({ address }: { address?: boolean }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [textarea, setTextarea] = useState('')
	const [date, setDate] = useState<Date>(new Date())
	const [open, setOpen] = useState(false)

	const sendEmail = (e: any) => {
		e.preventDefault()

		if (!email || !phone || textarea.length < 5) {
			setOpen(true)
			return
		} else {
			setOpen(false)
			const fieldsData = {
				name,
				email,
				phone,
				message: textarea,
				date: new Intl.DateTimeFormat('en-US').format(date),
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
							setTextarea('')
							setDate(new Date())
							alert('Success, See you soon')
						} else {
							alert('Oops, something was wrong! please try again or call me')
						}
					},
					(error) => {
						setOpen(false)
						console.log(error?.text)
					}
				)
		}
	}

	return (
		<Grid
			container
			spacing={2}
			maxWidth='sm'
			style={{ display: 'flex', textAlign: 'center', margin: '20px' }}
		>
			<Grid
				item={true}
				flexDirection='column'
				alignContent='center'
				justifyContent='center'
				sx={{ textAlign: 'center' }}
				sm={12}
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
			</Grid>

			{open && <CustomAlertField setOpen={setOpen} title='Error' />}
			<Grid item={true} xs={12} sm={6} md={6}>
				<CustomTextField
					label='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6} md={6}>
				<CustomTextField
					required
					label='Phone'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6}>
				<CustomTextField
					required
					label='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label='Prefer date'
						value={date}
						minDate={new Date()}
						onChange={(newValue) => {
							setDate(newValue as Date)
						}}
						renderInput={(params) => <CustomTextField {...params} />}
					/>
				</LocalizationProvider>
			</Grid>

			<Grid item={true} xs={12}>
				<CustomTextField
					multiline
					rows={4}
					fullWidth
					required
					label='Message'
					value={textarea}
					onChange={(e) => {
						// console.log(newValue?.toLocaleTimeString())
						setTextarea(e.target.value)
					}}
				/>
			</Grid>
			{address && (
				<Typography mt={2} style={{ textAlign: 'center' }} variant='h6'>
					{CONSTANTS.company.address}
				</Typography>
			)}
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
					disabled={!email && !phone && !textarea}
					onClick={(e) => sendEmail(e)}
					color='success'
				/>
			</Grid>
		</Grid>
	)
}
