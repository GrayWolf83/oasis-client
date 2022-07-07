import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoInner = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 0;
`

const LogoImage = styled.div`
	width: 80px;
`
const LogoText = styled.h3`
	font-family: 'Lobster', cursive;
	font-size: 28px;
	color: var(--white-color);
`

const AppLogo = () => {
	return (
		<Link to='/'>
			<LogoInner>
				<LogoImage>
					<picture>
						<source srcSet='/logo.webp' type='image/webp' />
						<img
							crossOrigin='anonymous'
							width='100%'
							height='auto'
							src='/logo.png'
							alt='logotype'
						/>
					</picture>
				</LogoImage>
				<LogoText>ОАЗИС</LogoText>
			</LogoInner>
		</Link>
	)
}

export default AppLogo
