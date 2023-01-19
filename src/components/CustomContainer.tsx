import { FC, PropsWithChildren } from 'react'
import { Container, CssBaseline, Grid } from '@mui/material'
import { NextRouter } from 'next/router'

import { Header, HeaderType } from './Header'
import ResponsiveAppBar from './AppBar'
import Footer from './Footer/Footer'
import { CustomBreadcrumbs } from '@/ui'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


interface ICustomContainerProps extends HeaderType {
	router: NextRouter
}

export const CustomContainer: FC<PropsWithChildren<ICustomContainerProps>> = ({
	title,
	description,
	keywords,
	router,
	children,
	...props
}) => {
	return (
		<>
			<CssBaseline />
			<Container {...props}>
				<Header title={title} description={description} keywords={keywords} />
				<ResponsiveAppBar />
				<main
					className={inter.className}
					style={{
						background: 'url(/bg/bg-hero.png) top left no-repeat',
						minHeight: '60vh',
						overflowX: 'auto',
					}}
				>
					<Grid container spacing={2}>
						<Grid item={true} sm={12}>
							<CustomBreadcrumbs router={router} />
							{children}
						</Grid>
					</Grid>
				</main>
				<Footer />
			</Container>
		</>
	)
}
