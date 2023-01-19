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
import { SEO } from 'src/seo/SEO'


export default function Home() {
	return (
		<CustomContainer
			title={SEO.mainPage.title}
			description={SEO.mainPage.description}
			keywords={SEO.mainPage.keywords}
			router={''}
		>
			<Hero />
			<Brand />
			<SectionAbout />
			<Services />
			{/* <OurTeam /> */}
			<Portfolio />
			<Awards />
			<Customers />
			<News />
		</CustomContainer>
	)
}
