import { Grid } from '@mui/material'
import React from 'react'
import { CustomCard, CustomImage, TitleSubtitle } from '@/ui'

const fakePortfolioData = [
	{
		src: '/other/portfolio1.jpg',
		alt: 'recent work',
	},
	{
		src: '/other/portfolio2.jpg',
		alt: 'recent work',
	},
	{
		src: '/other/portfolio3.jpg',
		alt: 'recent work',
	},
]

const Portfolio = () => {
	return (
		<Grid container spacing={2} mt={10} mb={10}>
			<TitleSubtitle
				title='RECENT WORK SHOWCASE'
				subTitle='OUR PORTFOLIO'
				style={{ marginBottom: 5 }}
			/>
			{fakePortfolioData?.map((image, index) => (
				<Grid
					key={`fakePortfolioData-${index}`}
					style={{ paddingLeft: 0 }}
					item={true}
					md={4}
					sm={6}
					display='flex'
					justifyContent='center'
				>
					<CustomImage
						key={index}
						alt={image?.alt}
						src={image.src}
						width={377}
						height={240}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default Portfolio
