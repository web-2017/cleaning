import { FC, PropsWithChildren } from 'react'
import {
	Box,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
} from '@mui/material'

import { Header } from './Header'
import ResponsiveAppBar from './AppBar'
import Footer from './Footer'

type ContainerType = {
	title: string
}

export const CustomContainer: FC<PropsWithChildren<ContainerType>> = ({
	title,
	children,
	...props
}) => {
	return (
		<>
			<CssBaseline />
			<Container {...props} maxWidth='lg'>
				<Header title={title} />
				<ResponsiveAppBar />
				<main className={''}>
					<Grid container spacing={2}>
						{children}
					</Grid>
				</main>
				<Footer />
			</Container>
		</>
	)
}
