import { FC, PropsWithChildren, CSSProperties } from 'react'
import { CustomImage, Text } from '@/ui'
import { Box } from '@mui/system'
import { CONSTANTS } from '../utils/constants'

interface IMainLogoProps {
	style?: CSSProperties
	textStyle?: CSSProperties
	variant?: boolean
}

export const MainLogo: FC<PropsWithChildren<IMainLogoProps>> = ({
	style,
	textStyle,
	variant,
	children,
}) => {
	return (
		<Box
			component={'div'}
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				...style,
			}}
		>
			{variant ? (
				<>
					<CustomImage
						src='/icons/icon.png'
						width={45}
						height={40}
						alt={'icon'}
					/>
					<Text
						style={{
							fontWeight: 'bold',
							textTransform: 'uppercase',
							...textStyle,
						}}
					>
						{CONSTANTS.mainTitle}
					</Text>
				</>
			) : (
				<>
					<CustomImage
						src='/icons/icon2.png'
						width={45}
						height={40}
						alt={'icon'}
					/>
					<Text
						style={{
							fontWeight: 'bold',
							textTransform: 'uppercase',
							...textStyle,
						}}
					>
						{CONSTANTS.mainTitle}
					</Text>
				</>
			)}
		</Box>
	)
}
