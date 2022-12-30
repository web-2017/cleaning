import { useEffect, useState } from 'react'
import { Box, Container, Link, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '../styles/Home.module.css'
import { Header } from '../src/components/Header'
import { CustomContainer } from '../src/components/CustomContainer'

const inter = Inter({ subsets: ['latin'] })

interface UserProps {
	name: string
	lastName: string
	location: string
}

export default function Home() {
	const [data, setData] = useState<UserProps>()

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		fetch('http://localhost:3000/api/user')
			.then((js) => js.json())
			.then((data) => {
				setData(data)
			})
			.catch((err) => console.error(err))
	}

	return (
		<CustomContainer title='Home page'>
			<TextField />
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant='h4' component='h1' gutterBottom>
					MUI v5 + Next.js with TypeScript example
				</Typography>
				<Link href='/about' color='secondary'>
					Go to the about page
				</Link>
			</Box>
		</CustomContainer>
	)
}
