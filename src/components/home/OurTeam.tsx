import { Grid } from '@mui/material'
import React from 'react'
import { CustomCard, TitleSubtitle } from '@/ui'

const fakeStaff = [
	{
		name: 'Devon Lane',
		profession: 'Window cleaner',
		src: '/persons/user1.png',
	},
	{
		name: 'Cody Fisher',
		profession: 'House Cleaner',
		src: '/persons/user2.png',
	},
	{
		name: 'Ralph Edwards',
		profession: 'Commercial Cleaner',
		src: '/persons/user3.png',
	},
	{
		name: 'Bessie Cooper',
		profession: 'Floor cleaner',
		src: '/persons/user4.png',
	},
]

const OurTeam = () => {
	return (
		<Grid container spacing={2}>
			<TitleSubtitle subTitle='OUR TEAM' title='OUR EXPERT TEAM MEMBERS' style={{ marginBottom: 50 }} />
			{fakeStaff?.map((person, index) => (
				<Grid item={true} xs={6} md={3} key={index}>
					<CustomCard
						style={{ textAlign: 'center' }}
						title={person.name}
						text={person.profession}
						img={person.src}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default OurTeam
