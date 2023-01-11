import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'

import styles from '../styles/Home.module.css'
import { CustomContainer } from '@/components/CustomContainer'
import { Hero } from '@/components/home/Hero'
import { SectionAbout } from '@/components/home/SectionAbout'
import { Brand } from '@/components/home/Brand'
import Services from '@/components/home/Services'
import OurTeam from '@/components/home/OurTeam'
import Portfolio from '@/components/home/Portfolio'
import Awards from '@/components/home/Awards'
import { Customers } from '@/components/home/Customers'
import News from '../src/components/home/News'

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
			<Customers />
			<News />
		</CustomContainer>
	)
}
