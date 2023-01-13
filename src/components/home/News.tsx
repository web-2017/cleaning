import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import { ArrowRightAlt, ArrowRightAltOutlined } from '@mui/icons-material'

import { CustomButton, CustomCard, Text, Title, TitleSubtitle } from '@/ui'
import { newsData } from '../../utils/fakeData'
import { CONSTANTS } from '../../utils/constants'
import { COLORS } from '../../utils/COLORS'

const News = () => {
	return (
		<Grid container spacing={2} mb={12} style={{ position: 'relative' }}>
			<TitleSubtitle
				title='READ OUR LATEST BLOG'
				subTitle='LATEST NEWS'
				titleStyle={{ fontWeight: 600, marginBottom: 90 }}
			/>
			<Grid
				item={true}
				sm={12}
				sx={{
					position: 'relative',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					alignItems: 'center',
					borderBottom: '1px solid',
					marginBottom: 2,
					'&:before': {
						content: "''",
						position: 'absolute',
						left: 0,
						bottom: -2.5,
						width: 200,
						height: 5,
						backgroundColor: COLORS.blue,
					},
				}}
			>
				<Title size={18} bold>
					<span style={{ color: COLORS.blue }}>{CONSTANTS.mainTitle}</span> blog
				</Title>
				<CustomButton
					text='See All'
					variant='text'
					color={'inherit'}
					endIcon={<ArrowRightAltOutlined />}
					href='/news'
				/>
			</Grid>
			{newsData.map((post, i) => {
				return (
					<Grid
						key={i}
						item={true}
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
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
