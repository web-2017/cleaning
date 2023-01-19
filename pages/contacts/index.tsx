import { useRouter } from 'next/router'
import React from 'react'

import { ContactForm } from '@/ui'
import { CustomContainer } from '@/components/CustomContainer'
import { SEO } from 'src/seo/SEO'

const Contacts = () => {
	const router = useRouter()
	return (
		<CustomContainer
			title={SEO.contacts.title}
			description={SEO.contacts.description}
			keywords={SEO.contacts.keywords}
			router={router}
		>
			<ContactForm />
		</CustomContainer>
	)
}

export default Contacts
