import React from 'react'
import { Box, Grid, Rating } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import { CustomText, Title, TitleSubtitle } from '@/ui'

const fakeCustomers = [
	{
		id: 1,
		users: [
			{
				id: 1,
				name: 'Courtney Henry',
				position: 'Nursing Assistant',
				text: 'Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
				star: 4,
			},
			{
				id: 2,
				name: 'Courtney Henry 2',
				position: 'Nursing Assistant',
				text: 'Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
				star: 5,
			},
			{
				id: 3,
				name: 'Courtney Henry 3',
				position: 'Nursing Assistant',
				text: 'Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
				star: 4,
			},
		],
	},
	{
		id: 2,
		users: [
			{
				id: 1,
				name: 'Courtney Henry 4',
				position: 'Nursing Assistant',
				text: 'Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
				star: 4,
			},
			{
				id: 2,
				name: 'Courtney Henry 5',
				position: 'Nursing Assistant',
				text: 'Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
				star: 4,
			},
			{
				id: 3,
				name: 'Courtney Henry 6',
				position: 'Nursing Assistant',
				text: 'Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
				star: 4,
			},
		],
	},
]

export const Customers = () => {
	function Item({ item, index }: { item: any; index: number }) {
		return (
			<Grid container spacing={2} flexDirection='row'>
				{item.users.map((elem: any, i: number) => (
					<Grid
						key={i}
						item={true}
						style={{
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
							padding: 30,
							boxSizing: 'border-box',
						}}
						sm={12}
						md={4}
					>
						<TitleSubtitle
							title={elem.name}
							subTitle={elem.position}
							titleSize={20}
							subtitleSize={16}
						/>
						<CustomText size={14}>{elem.text}</CustomText>
						<Box>
							<Rating name='read-only' value={elem.star} readOnly />
						</Box>
					</Grid>
				))}
			</Grid>
		)
	}
	return (
		<Grid container spacing={2}>
			<Grid item={true} sm={12} mt={5} mb={10}>
				<TitleSubtitle
					style={{ marginBottom: 10 }}
					title='WHAT OUR CUSTOMERS SAY'
					subTitle='HAPPY CUSTOMERS'
				/>
				<Carousel swipe={true} navButtonsAlwaysVisible={true}>
					{fakeCustomers.map((item, i) => (
						<Item key={i} item={item} index={i} />
					))}
				</Carousel>
			</Grid>
		</Grid>
	)
}
