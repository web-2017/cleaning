import { CustomContainer } from '@/components/CustomContainer'
import { CustomText, Title } from '@/components/ui'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { SEO } from 'src/seo/SEO'

const Price = () => {
    const router = useRouter()
    return <CustomContainer
        title={SEO.about.title}
        description={SEO.about.description}
        keywords={SEO.about.keywords}
        router={router}
    >
        <Title center size={40} variant='h1' style={{ margin: '50px 0' }}>pricing</Title>
        <Grid container spacing={2}>


        </Grid>
    </CustomContainer>
}

export default Price