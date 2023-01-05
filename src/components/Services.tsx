import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Title } from '@/ui'
import { COLORS } from 'src/utils/COLORS'

const Services = () => {
    return (
        <Grid item={true} sm={12} m={2}>
            <Title size={18} variant={'h4'} style={{ textAlign: 'center' }} color={COLORS.blue}>our service</Title>
            <Title size={32} variant={'h4'} style={{ textAlign: 'center' }}>WHAT WE ARE OFFERING</Title>
            <Grid item={true}></Grid>
        </Grid>
    )
}

export default Services