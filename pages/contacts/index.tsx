import { useRouter } from 'next/router'
import React from 'react'

import { ContactForm } from '@/ui'
import { CustomContainer } from '@/components/CustomContainer'
import { SEO } from 'src/seo/SEO'
import { Box } from '@mui/material'

const Contacts = () => {
	const router = useRouter()
	return (
		<CustomContainer
			title={SEO.contacts.title}
			description={SEO.contacts.description}
			keywords={SEO.contacts.keywords}
			router={router}
		>
			<Box sx={{ display: 'flex', justifyContent: 'center', margin: '60px 0' }}>
				<ContactForm address />
			</Box>
		</CustomContainer>
	)
}

export default Contacts
