import { fakeTarif } from '@/utils'
import { Grid } from '@mui/material'
import React from 'react'

import { PriceCard } from '@/ui'

const Tariffs = () => {
	return (
		<Grid
			item={true}
			sm={12}
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
			}}
		>
			{fakeTarif?.map((data, i) => (
				<PriceCard key={`fakeTarif-${i}`} data={data} />
			))}
		</Grid>
	)
}

export default Tariffs
