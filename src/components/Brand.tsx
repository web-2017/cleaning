import { Grid } from '@mui/material'
import {
	Google,
	Apple,
	YouTube,
	Pinterest,
	Facebook,
} from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'

import { COLORS } from 'src/utils/COLORS'
import { Title } from './ui'

export const Brand = () => {
	return (
		<>
			<Grid
				item
				md={4}
				sm={12}
				style={{ paddingLeft: 0, marginBottom: 10, marginTop: 10 }}
			>
				<Title variant='h5' size={16} color={COLORS.blue}>
					TRUSTED PARTNERS
				</Title>
				<Title variant='h5'>BRANDS WHO TRUST US</Title>
			</Grid>
			<Grid
				container
				justifyContent={'center'}
				height={100}
				alignItems='center'
				style={{ backgroundColor: COLORS.blue }}
			>
				<Grid item xs={2}>
					<Box sx={{ textAlign: 'center' }}>
						<Google style={{ color: '#fff', fontSize: 30 }} />
					</Box>
				</Grid>
				<Grid item xs={2}>
					<Box sx={{ textAlign: 'center' }}>
						<Apple style={{ color: '#fff', fontSize: 30 }} />
					</Box>
				</Grid>
				<Grid item xs={2}>
					<Box sx={{ textAlign: 'center' }}>
						<YouTube style={{ color: '#fff', fontSize: 30 }} />
					</Box>
				</Grid>
				<Grid item xs={2}>
					<Box sx={{ textAlign: 'center' }}>
						<Pinterest style={{ color: '#fff', fontSize: 30 }} />
					</Box>
				</Grid>
				<Grid item xs={2}>
					<Box sx={{ textAlign: 'center' }}>
						<Facebook style={{ color: '#fff', fontSize: 30 }} />
					</Box>
				</Grid>
			</Grid>
		</>
	)
}
