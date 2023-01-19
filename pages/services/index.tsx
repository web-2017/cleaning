import { useState, useEffect, Fragment } from 'react'
import {
	Box,
	Grid,
	Typography,
} from '@mui/material'

import { Inter } from '@next/font/google'


import { CustomContainer } from '@/components/CustomContainer'
import { Title } from '@/ui'
import { COLORS, servicesData } from '@/utils'
import { SEO } from 'src/seo/SEO'
import { useRouter } from 'next/router'
import { ServiceItem } from './ServiceItem'
import styles from '@/styles/services/Services.module.css'

const Services = () => {
	const router = useRouter()

	return (
		<CustomContainer
			title={SEO.services.title}
			description={SEO.services.description}
			keywords={SEO.services.keywords}
			router={router}
		>
			<Box>
				<Title variant='h1' size={40} style={{ textAlign: 'center', margin: '50px 0' }}>
					Our services
				</Title>
				<Grid container spacing={2}>
					{servicesData.map((service, i) => {
						return (
							<Grid key={`servicesData-${i}`} item={true} sm={8} md={6}>
								<Box className={styles.serviceBox}>
									<Title
										variant='h4'
										style={{
											borderBottom: '1px solid #000',
											display: 'inline-block',
											marginBottom: 5,
										}}
									>
										{service.title}
									</Title>
									<Title variant='h6'>{service.contents[i].title}</Title>
									{service.contents.map((elem, i) => {
										return (
											<div key={`service.contents-${i}`}>
												<Title variant='h5'>{elem.title}</Title>
												<ul>
													{elem.services.map((item, index) => {
														return (
															<div key={`service.content-${index}`}>
																<ServiceItem elem={item} />
															</div>
														)
													})}
												</ul>
											</div>
										)
									})}
								</Box>
							</Grid>
						)
					})}
				</Grid>
			</Box>
		</CustomContainer>
	)
}

export default Services
