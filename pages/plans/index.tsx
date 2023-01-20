import { CustomContainer } from '@/components/CustomContainer'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { SEO } from 'src/seo/SEO'
import { blue } from '@mui/material/colors'
import { weeklyProgramData } from '@/utils'
import { IWeeklyProgramData, IWeeklyServicesType } from '@/types'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: blue[500],
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}))

type createDataType = {
	name: string
	calories: number
	fat: number
	carbs: number
	protein: number
}

function createData({ id, tariff, services }: IWeeklyProgramData) {
	return { id, tariff, services }
}

const rows = [
	weeklyProgramData?.map<IWeeklyProgramData>((elem) =>
		createData({
			id: elem.id,
			tariff: elem.tariff,
			services: elem.services,
		})
	),
].flat(1)
const rows2 = [
	weeklyProgramData
		?.map<IWeeklyProgramData>((elem) => elem.services)
		.map((elem) => elem),
]

console.log(1, rows.flat(1))

const Plans = () => {
	const router = useRouter()
	return (
		<CustomContainer
			title={SEO.plans.title}
			description={SEO.plans.description}
			keywords={SEO.plans.keywords}
			router={router}
		>
			<Grid item={true} paddingTop={4} paddingBottom={4}>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label='customized table'>
						<TableHead>
							<TableRow>
								<StyledTableCell></StyledTableCell>
								{weeklyProgramData.map((row, index) => (
									<StyledTableCell key={`title-${index}`}>
										{row?.tariff}
									</StyledTableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{weeklyProgramData
								?.map((elem, i) => elem.services)
								.map((item, y) => {
									return (
										<StyledTableRow key={y}>
											<StyledTableCell
												component='th'
												scope='row'
											></StyledTableCell>
											<StyledTableCell component='th' scope='row'>
												{item?.title}
											</StyledTableCell>
											{/* <StyledTableCell component='th' scope='row'>
												asfasasd
											</StyledTableCell>
											<StyledTableCell component='th' scope='row'>
												asfasasd
											</StyledTableCell>
											<StyledTableCell component='th' scope='row'>
												asfasasd
											</StyledTableCell> */}
										</StyledTableRow>
									)
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</CustomContainer>
	)
}

export default Plans
