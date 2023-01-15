import { FC, PropsWithChildren } from 'react'
import {
	Container,
	CssBaseline,
	Grid,
} from '@mui/material'

import { Header, HeaderType } from './Header'
import ResponsiveAppBar from './AppBar'
import Footer from './Footer/Footer'

export const CustomContainer: FC<PropsWithChildren<HeaderType>> = ({
	title,
	description,
	keywords,
	children,
	...props
}) => {
	return (
		<>
			<CssBaseline />
			<Container {...props} maxWidth='lg' >
				<Header title={title} description={description} keywords={keywords} />
				<ResponsiveAppBar />
				<main className={''} style={{
					background: 'url(/bg/bg-hero.png) top left no-repeat',
				}}>
					<Grid container spacing={2}>
						{children}
					</Grid>
				</main>
				<Footer />
			</Container>
		</>
	)
}
