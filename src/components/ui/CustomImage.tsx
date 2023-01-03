import { CSSProperties } from 'react'
import Image from 'next/image'

type MyLoaderType = {
	src: string
	width: number
	height: number
	alt: string
	style?: CSSProperties
}

// const myLoader = () => {
// 	return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

export const CustomImage = ({
	src,
	alt = 'Picture of the author',
	width = 100,
	height = 100,
	style,
}: MyLoaderType) => {
	return (
		<Image src={src} alt={alt} width={width} height={height} style={style} />
	)
}
