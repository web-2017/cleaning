import React from 'react'
import { Grid } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import { Title, TitleSubtitle } from '@/ui'

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
				star: 4,
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
				{item.users.map((elem: string, i: number) => (
					<Grid
						key={i}
						item={true}
						style={{
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
						}}
						sm={12}
						md={4}
					>
						<Title>{elem.name}</Title>
						<Button className='CheckButton'>Check it out!</Button>
					</Grid>
				))}
			</Grid>
		)
	}
	return (
		<Grid container spacing={2}>
			<Grid sm={12} mt={5} mb={5}>
				<TitleSubtitle
					mb={5}
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
