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
import Tarifs from '@/components/home/Tarifs'
import { CustomModal } from '@/components/ui'
import { useState } from 'react'

export default function Home() {
	const [open, setOpen] = useState(false)
	const [text, setText] = useState('')
	const [title, setTitle] = useState('')

	const handleModal = () => {
		setOpen(!open)
	}
	0.90000008
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
			<Tarifs />
			{/* <OurTeam /> */}
			<Portfolio />
			<Awards />
			<Customers />
			<News />
		</CustomContainer>
	)
}
