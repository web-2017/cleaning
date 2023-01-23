import { Box, Grid } from '@mui/material'
import React from 'react'
import { grey } from '@mui/material/colors'

import { Title } from './Title'
import { ITarif } from '@/types'
import { CustomText } from './CustomText'
import { CustomButton } from './CustomButton'
import theme from 'src/utils/theme'
import { COLORS } from '@/utils'
import Link from 'next/link'
import { CustomLink } from './CustomLink'

export const PriceCard = ({ data }: { data: ITarif }) => {
	return (
		<Grid
			item={true}
			sx={{
				boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.06)',
				borderRadius: 10,
				padding: '25px',
				with: '340px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CustomText style={{ fontSize: 24, margin: 0, marginBottom: 30 }}>
				{data?.tarif}
			</CustomText>
			<Title size={24} mb={4} bold>
				{data?.title}
			</Title>
			<CustomText
				style={{
					fontSize: 18,
					margin: 0,
					marginBottom: 30,
					color: grey[400],
				}}
			>
				{data?.subtitle}
			</CustomText>
			<Box mb={10} sx={{ color: grey[900] }}>
				{data?.lists?.map((list, index) => {
					return (
						<div key={`lists-${index}`}>
							<label>
								<input disabled name='newsletter' type='checkbox' checked />
								{list?.item}
							</label>
						</div>
					)
				})}
			</Box>
			<Box>
				<CustomButton
					onClick={() => {}}
					text='Request now'
					variant='outlined'
					bold
					style={{ fontSize: 16 }}
				/>
				<CustomText
					style={{
						marginLeft: 0,
						fontSize: 14,
						color: '#2F7FF6',
					}}
				>
					<CustomLink href={'tarif'} text='Compare features.' />
				</CustomText>
			</Box>
		</Grid>
	)
}
