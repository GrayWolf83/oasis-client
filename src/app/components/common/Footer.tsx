import React from 'react'
import styled from 'styled-components'
import AppContainer from '../ui/AppContainer'

const FooterContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: var(--main-color);
`

const FooterInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`

const FooterAddress = styled.div`
	display: flex;
	flex-direction: column;
`
const FooterPhones = styled.div`
	display: flex;
	flex-direction: column;
`

const FooterText = styled.p`
	color: var(--white-color);
	margin: 5px;

	@media (max-width: 360px) {
		font-size: 14px;
	}
`

const FooterPhone = styled.a`
	height: 32px;
	display: flex;
	align-items: center;
	color: var(--white-color);
	font-size: 18px;

	@media (max-width: 360px) {
		font-size: 16px;
	}

	span {
		margin: 10px 5px;
	}
`

const Footer = () => {
	return (
		<FooterContainer>
			<AppContainer>
				<FooterInner>
					<FooterAddress>
						<FooterText>г. Костанай</FooterText>
						<FooterText>ул. Киевская, 28</FooterText>
					</FooterAddress>
					<FooterPhones>
						<FooterPhone href='tel:87773425687'>
							<span className='material-icons'>
								phone_in_talk
							</span>
							8 777 342 56 87
						</FooterPhone>
						<FooterPhone href='tel:87142557030'>
							<span className='material-icons'>
								phone_in_talk
							</span>
							8 7142 55 70 30
						</FooterPhone>
					</FooterPhones>
				</FooterInner>
			</AppContainer>
		</FooterContainer>
	)
}

export default Footer
