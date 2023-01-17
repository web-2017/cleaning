import { Grid, Paper, Box } from '@mui/material'
import React from 'react'
import NightShelterIcon from '@mui/icons-material/NightShelter'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import CountertopsIcon from '@mui/icons-material/Countertops'

import { COLORS } from 'src/utils/COLORS'
import theme from 'src/utils/theme'
import { CustomImage, Title, Text } from '@/ui'

const ServiceItems = () => {
	return (
		<>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 80, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CustomImage
							alt='home icon'
							src='/icons/house.png'
							width={40}
							height={40}
						/>
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							house Cleaning
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 80, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{/* <CustomImage
							alt='home icon'
							src='/icons/house.png'
							width={40}
							height={40}
						/> */}
						<NightShelterIcon style={{ fontSize: 50 }} color={'primary'} />
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Living room
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 80, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{/* <CustomImage
							alt='home icon'
							src='/icons/house.png'
							width={40}
							height={40}
						/> */}
						<BedIcon style={{ fontSize: 50 }} color={'primary'} />
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Bed room
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 80, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{/* <CustomImage
							alt='home icon'
							src='/icons/house.png'
							width={40}
							height={40}
						/> */}
						<BathtubIcon style={{ fontSize: 50 }} color={'primary'} />
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Bath room
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{/* <CustomImage
							alt='home icon'
							src='/icons/house.png'
							width={40}
							height={40}
						/> */}
						<CountertopsIcon style={{ fontSize: 50 }} color={'primary'} />
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Kitchen
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CustomImage
							alt='home icon'
							src='/icons/floor.png'
							width={40}
							height={40}
						/>
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Floor Cleaning
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{
					marginBottom: 40,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CustomImage
							alt='home icon'
							src='/icons/window.png'
							width={40}
							height={40}
						/>
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Window Cleaning
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
			<Grid
				item={true}
				sm={6}
				md={4}
				lg={3}
				style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}
			>
				<Paper
					elevation={1}
					sx={{
						width: 278,
						minHeight: 184,
						border: `1px solid ${theme.palette.grey[300]}`,
						borderRadius: 3,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						paddingTop: 5,
						'&:hover': {
							backgroundColor: COLORS.blue,
							h2: {
								color: '#fff',
							},
							p: {
								color: '#fff',
							},
						},
					}}
				>
					<Paper
						sx={{
							width: 100,
							height: 100,
							border: `1px solid ${theme.palette.grey[300]}`,
							borderRadius: '50%',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CustomImage
							alt='home icon'
							src='/icons/office.png'
							width={40}
							height={40}
						/>
					</Paper>
					<Box p={2} sx={{ textAlign: 'center' }}>
						<Title size={20} color={COLORS.blue} style={{ paddingBottom: 10 }}>
							Office Cleaning
						</Title>
						<Text size={14} style={{ margin: 0 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet
						</Text>
					</Box>
				</Paper>
			</Grid>
		</>
	)
}

export default ServiceItems
