import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'

import styles from '../styles/Home.module.css'
import { CustomContainer } from '@/components/CustomContainer'
import { Hero } from '@/components/Hero'
import { SectionAbout } from '@/components/SectionAbout'
import { Brand } from '@/components/Brand'
import Services from '@/components/Services'
import OurTeam from '@/components/OurTeam'
import Portfolio from '@/components/Portfolio'
import Awards from '@/components/Awards'

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
			<Services />
			<OurTeam />
			<Portfolio />
			<Awards />
		</CustomContainer>
	)
}
