import { Box, Link, Breadcrumbs } from '@mui/material'
import { breadcrumbsHelper } from 'src/utils/breadcrumbsHelper'
import { NextRouter } from 'next/router'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import { grey } from '@mui/material/colors'

export const CustomBreadcrumbs = ({ router }) => {
	if (!router) {
		return null
	}
	return (
		<Box
			sx={{
				borderBottom: `1px solid #cccccc64`,
				padding: 2,
				color: grey[500],
				fontSize: 15,
				letterSpacing: 1,
				display: 'flex',
				flexDirection: 'row',
				alignContent: 'center',
			}}
		>
			<Link
				underline='hover'
				color='inherit'
				href='/'
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
				Home
			</Link>
			<span style={{ padding: '0 5px' }}>|</span>
			<Typography
				component={'span'}
				sx={{ textTransform: 'capitalize', fontSize: 14 }}
			>
				{breadcrumbsHelper(router).breadcrumb}
			</Typography>
		</Box>
	)
}
