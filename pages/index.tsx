import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'

import styles from '../styles/Home.module.css'
import { CustomContainer } from '@/components/CustomContainer'
import { Hero } from '@/components/Hero'
import { SectionAbout } from '@/components/SectionAbout'
import { Box } from '@mui/system'
import { Brand } from '@/components/Brand'

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
			<Hero />
			<Brand />
			<SectionAbout />
		</CustomContainer>
	)
}
