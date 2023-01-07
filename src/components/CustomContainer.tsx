import { FC, PropsWithChildren } from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'

import { Header } from './Header'
import ResponsiveAppBar from './AppBar'

type ContainerType = {
	title: string
}

export const CustomContainer: FC<PropsWithChildren<ContainerType>> = ({
	title,
	children,
	...props
}) => {
	return (
		<Container {...props} maxWidth='lg' >
			<Header title={title} />
			<ResponsiveAppBar />
			<main className={''}>
				<Grid container spacing={2}>
					{children}
				</Grid>
			</main>
		</Container>
	)
}
