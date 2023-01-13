import { FC, PropsWithChildren, CSSProperties } from 'react'
import { CustomImage, Text } from '@/ui'
import { Box } from '@mui/system'
import { CONSTANTS } from '../utils/constants'

interface IMainLogoProps {
	style?: CSSProperties
	textStyle?: CSSProperties
}

export const MainLogo: FC<PropsWithChildren<IMainLogoProps>> = ({
	style,
	textStyle,
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
			<CustomImage src='/icons/icon.png' width={45} height={40} alt={'icon'} />
			<Text
				style={{ fontWeight: 'bold', textTransform: 'uppercase', ...textStyle }}
			>
				{CONSTANTS.mainTitle}
			</Text>
		</Box>
	)
}
