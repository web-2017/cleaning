import { IServices } from '@/types'
import { Typography } from '@mui/material'

export const ServiceItem = ({ elem }: { elem: IServices | any }) => {
    return (
        <Typography
            component='li'
            variant='body2'
            color='#000'
        >
            <span>{elem.text}</span>
        </Typography>
    )
}
