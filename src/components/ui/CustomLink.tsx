import { COLORS } from '@/utils'
import Link from 'next/link'
import { CSSProperties } from 'react'

type CustomLinkType = {
    href: string
    text: string
    style?: CSSProperties
}

export const CustomLink = ({ href, text, style }: CustomLinkType) => {
    return (
        <Link style={{
            fontSize: 14,
            color: COLORS.blue,
            textDecoration: 'none',
            ...style
        }} href={href}>{text}</Link>
    )
}
