import { FC, PropsWithChildren, useState } from 'react'
import { Container, CssBaseline, Grid } from '@mui/material'
import { NextRouter } from 'next/router'
import { Inter } from '@next/font/google'

import { Header, HeaderType } from './Header'
import ResponsiveAppBar from './AppBar'
import Footer from './Footer/Footer'
import { CustomBreadcrumbs, CustomModal } from '@/ui'

const inter = Inter({ subsets: ['latin'] })

interface ICustomContainerProps extends HeaderType {
	router: NextRouter
	open?: boolean
	setModal?: any
	modalTitle?: string
	modalText?: string
}

export const CustomContainer: FC<PropsWithChildren<ICustomContainerProps>> = ({
	title,
	description,
	keywords,
	router,
	open = false,
	setModal,
	modalTitle = '',
	modalText = '',
	children,
	...props
}) => {
	const [titles, setTitle] = useState('')
	const [text, setText] = useState('')

	return (
		<>
			<CssBaseline />
			<Container
				{...props}
				style={{
					background: 'url(/bg/bg-hero.png) top left no-repeat',
					// backgroundAttachment: 'fixed',
				}}
			>
				<Header title={title} description={description} keywords={keywords} />
				<ResponsiveAppBar />
				<main
					className={inter.className}
					style={{
						minHeight: '60vh',
						overflowX: 'auto',
					}}
				>
					<CustomModal
						open={open}
						setModal={setModal}
						title={modalTitle}
						text={modalText}
					/>
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
