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

const FooterText = styled.p`
	color: var(--white-color);
	margin: 5px;
`

const FooterContacts = styled.a`
	display: flex;
	align-items: center;
	color: var(--white-color);
	font-size: 20px;
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
					<FooterContacts href='tel:87052294464'>
						<span className='material-icons'>phone_in_talk</span>8
						705 229 44 64
					</FooterContacts>
				</FooterInner>
			</AppContainer>
		</FooterContainer>
	)
}

export default Footer
