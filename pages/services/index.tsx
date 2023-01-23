import { teal } from '@mui/material/colors'
import { Box, Chip, Grid, Typography } from '@mui/material'

import { CustomContainer } from '@/components/CustomContainer'
import { Title } from '@/ui'
import { servicesData } from '@/utils'
import { SEO } from 'src/seo/SEO'
import { useRouter } from 'next/router'
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
				<Title
					variant='h1'
					size={40}
					style={{ textAlign: 'center', margin: '50px 0' }}
				>
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
									<div>
										<Chip
											style={{
												background: teal[400],
												color: '#fff',
												margin: '20px 0',
											}}
											label={service.contents[i].title}
											variant='outlined'
										/>
									</div>
									{service.contents.map((elem, i) => {
										return (
											<div key={`service.contents-${i}`}>
												<Title variant='h5'>{elem.title}</Title>
												<ul>
													{elem.services.map((item, index) => {
														return (
															<div key={`service.content-${index}`}>
																<Typography
																	component='li'
																	variant='body2'
																	color='#000'
																>
																	<span>{item.text}</span>
																</Typography>
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
