import { useState, useEffect, Fragment } from 'react'
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material'

import { CustomContainer } from '@/components/CustomContainer'
import { Title } from '@/ui'
import { COLORS, servicesData } from '@/utils'
import { SEO } from 'src/seo/SEO'
import { useRouter } from 'next/router'
import { CustomBreadcrumbs } from '@/components/ui/CustomBreadcrumbs'
import { IServices } from '@/types'

const Services = () => {
	const router = useRouter()
	console.log(servicesData)

	const services = servicesData
		.map((service: IServices, i) => {
			return service.contents
		})
		.flat(1)
		.map((elem) => {
			return elem.services
		})
		.flat(1)

	const ServicesList = ({ elem }: { elem: IServices | any }) => {
		return (
			<Typography
				sx={
					{
						// borderBottom: 1,
						// borderBottomWidth: 1,
					}
				}
				component='li'
				variant='body2'
				color='#000'
			>
				<span>{elem.text}</span>
			</Typography>
		)
	}

	return (
		<CustomContainer
			title={SEO.services.title}
			description={SEO.services.description}
			keywords={SEO.services.keywords}
		>
			<CustomBreadcrumbs router={router} />
			<Box>
				<Title variant='h1' size={40} style={{ textAlign: 'center' }}>
					Our services
				</Title>
				<List dense>
					<Grid container spacing={2}>
						{servicesData.map((service, i) => {
							console.log(1, service?.contents)
							return (
								<Grid key={`servicesData-${i}`} item={true} sm={12} md={6}>
									<Box>
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
										{service.contents.map((elem) => {
											return (
												<>
													<Title variant='h5'>{elem.title}</Title>
													<ol>
														{service.contents[i].services.map((item, index) => {
															return (
																<p key={`service.content-${index}`}>
																	{' '}
																	{item.text}
																</p>
																// <div key={`service.content-${index}`}>
																// 	<ServicesList elem={elem} />
																// </div>
															)
														})}
													</ol>
												</>
											)
										})}
									</Box>
								</Grid>
							)
						})}
					</Grid>
				</List>
			</Box>
		</CustomContainer>
	)
}

export default Services
