import { CustomContainer } from '@/components/CustomContainer'
import { CustomText, Title } from '@/components/ui'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { SEO } from 'src/seo/SEO'

const About = () => {
	const router = useRouter()
	return <CustomContainer
		title={SEO.about.title}
		description={SEO.about.description}
		keywords={SEO.about.keywords}
		router={router}
	>
		<Title center size={40} style={{ margin: '50px 0' }}>About us</Title>
		<Grid container spacing={2}>
			<Grid item={true} sm={12} md={6} mb={3}>
				<CustomText size={16}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium officia quae, adipisci corrupti minima sequi! Quam laudantium molestias, totam cupiditate laboriosam facilis ipsam expedita inventore velit eum doloremque eius quisquam error sint placeat voluptatem libero quae eaque? Amet blanditiis autem molestias ipsa! Voluptatum ipsum, provident labore molestiae harum magni repellendus quam, quas aliquam quisquam similique vero tempore pariatur neque ad commodi assumenda veritatis beatae molestias deserunt ea. Odit blanditiis ducimus sit nemo beatae in repudiandae tenetur laboriosam ipsam eos rerum voluptatem dolor ratione repellat cum sapiente eveniet exercitationem nisi harum minus molestiae, autem officiis eius. Doloremque sit magni veniam nulla, velit veritatis dolorem tenetur, dolore corrupti iure at earum iste, voluptatem fugit itaque. Dolores assumenda at magnam facilis est qui, ratione et culpa veniam itaque, eveniet soluta adipisci nobis ad quam nisi laboriosam animi ipsum! Nulla dignissimos dolore eligendi, sed, blanditiis mollitia tempora maiores natus corporis illum debitis quaerat repudiandae?
				</CustomText>
			</Grid>
			<Grid item={true} sm={12} md={6}>
				google map
			</Grid>
		</Grid>
	</CustomContainer>
}

export default About
