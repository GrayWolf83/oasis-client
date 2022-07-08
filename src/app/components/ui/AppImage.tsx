import React from 'react'
import config from '../../../config.json'

interface IProps {
	item: {
		image: string
		imageWebp: string
		name: string
	}
	width?: string
	height?: string
}

const AppImage = ({ item, width, height }: IProps) => {
	return (
		<picture>
			<source srcSet={config.PUBLIC + item.imageWebp} type='image/webp' />
			<img
				crossOrigin='anonymous'
				width={width ? width : '100%'}
				height={height ? height : 'auto'}
				src={config.PUBLIC + item.image}
				alt={item.name}
			/>
		</picture>
	)
}

export default AppImage
