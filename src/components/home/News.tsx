import React from 'react'
import { Grid } from '@mui/material'
import { CustomCard, TitleSubtitle } from '@/ui'
import { newsData } from '../../utils/fakeData'

const News = () => {
	return (
		<Grid container spacing={2}>
			<TitleSubtitle
				title='READ OUR LATEST BLOG'
				subTitle='LATEST NEWS'
				titleStyle={{ fontWeight: 600, marginBottom: 90 }}
			/>

			{newsData.map((post, i) => {
				return (
					<Grid
						key={i}
						item={true}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<CustomCard
							title={post.title}
							text={post.text}
							style={{ textAlign: 'center' }}
							img={post.src}
							width={278}
							height={177}
							userAvatar={post.user.src}
							userFullName={post.user.fullName}
							userPosition={post.user.position}
							cardTitleStyle={{ fontSize: 18 }}
							cardTextStyle={{ fontSize: 14 }}
							showDate
						/>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default News
