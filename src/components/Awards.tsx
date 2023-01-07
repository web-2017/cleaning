import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { CSSProperties } from 'react'
import { CustomImage } from './ui'
import { COLORS } from 'src/utils/COLORS'

const fakeAwards = [
    {
        counts: 567 + '+',
        src: '/icons/Group.png',
        title: 'Happy Customers'
    },
    {
        counts: 48,
        src: '/icons/Group1.png',
        title: 'Team Members'
    },
    {
        counts: 26,
        src: '/icons/Group2.png',
        title: 'Award Winning'
    },
    {
        counts: 759 + '+',
        src: '/icons/Group3.png',
        title: 'Project Complete'
    }
]


const Awards = () => {

    const GridItem = ({ item }) => (
        <Box sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <CustomImage alt='' width={53} height={50} src={item.src} style={{ marginRight: 20 }} />
            <div style={{ textAlign: 'left' }}>
                <p style={{ color: '#fff', fontSize: 36, margin: 0, fontWeight: 'bold' }}>
                    {item.counts}
                </p>
                <p style={{ color: '#fff', fontSize: 18, margin: 0 }}>
                    {item.title}
                </p>
            </div>
        </Box>
    )

    return (
        <Grid container spacing={2} mb={5} style={{
            backgroundColor: COLORS.blue,
            height: 165,
            display: 'flex',
            alignItems: 'center'
        }}>
            {
                fakeAwards.map((item, index) => (
                    <Grid key={index} item={true} sm={6} md={3}>
                        <GridItem item={item} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Awards