import React from 'react'
import styled from 'styled-components'

const LoaderBlock = styled.div`
	width: 100%;
	padding-top: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Balls = styled.div`
	width: 5.5em;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	margin-top: 5px;
	div {
		width: 0.8em;
		height: 0.8em;
		border-radius: 50%;
		background-color: var(--main-color);
		transform: translateY(-100%);
		animation: wave 0.8s ease-in-out alternate infinite;
	}
	div:nth-of-type(1) {
		animation-delay: -0.4s;
	}
	div:nth-of-type(2) {
		animation-delay: -0.2s;
	}
	div:nth-of-type(3) {
		animation-delay: -0.1s;
	}
	@keyframes wave {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
`

const Loader = () => {
	return (
		<LoaderBlock>
			<picture>
				<source srcSet='/loader.webp' type='image/webp' />
				<img
					crossOrigin='anonymous'
					width='auto'
					height='75px'
					src='/loader.png'
					alt='logotype'
				/>
			</picture>
			<Balls>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</Balls>
		</LoaderBlock>
	)
}

export default Loader
