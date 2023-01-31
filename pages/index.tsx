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
import { SEO } from 'src/seo/SEO'
import Tariffs from '@/components/home/Tariffs'
import { CustomModal } from '@/components/ui'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
	const [open, setOpen] = useState(false)
	const [text, setText] = useState('')
	const [title, setTitle] = useState('')

	const router = useRouter()

	const handleModal = () => {
		setOpen(!open)
	}
	return (
		<CustomContainer
			title={SEO.mainPage.title}
			description={SEO.mainPage.description}
			keywords={SEO.mainPage.keywords}
			setModal={setOpen}
			open={open}
			router={''}
		>
			<CustomModal
				open={open}
				setModal={handleModal}
				text={text}
				title={title}
			/>
			<Hero
				open={open}
				setModal={handleModal}
				text={text}
				title={title}
				setText={setText}
				setTitle={setTitle}
			/>
			<Brand />
			<SectionAbout />
			<Services />
			<Tariffs />
			{/* <OurTeam /> */}
			<Portfolio />
			<Awards />
			<Customers />
			<News />
		</CustomContainer>
	)
}
