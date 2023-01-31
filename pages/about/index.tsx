import { CustomContainer } from '@/components/CustomContainer'
import { CustomText, Title } from '@/components/ui'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { SEO } from 'src/seo/SEO'
import { seoContent } from '../../src/seo/seoContent'

const About = () => {
	const router = useRouter()
	return (
		<CustomContainer
			title={SEO.about.title}
			description={SEO.about.description}
			keywords={SEO.about.keywords}
			router={router}
		>
			<Title variant='h1' center size={40} style={{ margin: '50px 0' }}>
				{seoContent.about.title}
			</Title>
			<Grid container spacing={2}>
				<Grid item={true} sm={12} md={6} mb={3}>
					<CustomText size={16}>{seoContent.about.text}</CustomText>
				</Grid>
				<Grid item={true} sm={12} md={6}>
					google map
				</Grid>
			</Grid>
		</CustomContainer>
	)
}

export default About
