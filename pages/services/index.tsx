import { CustomContainer } from '@/components/CustomContainer'
import { Box } from '@mui/material'
import React from 'react'
import { SEO } from 'src/seo/SEO'

const Services = () => {
	return <CustomContainer
		title={SEO.services.title}
		description={SEO.services.description}
		keywords={SEO.services.keywords}
	>

		<Box>
			Services
		</Box>
	</CustomContainer>
}

export default Services
