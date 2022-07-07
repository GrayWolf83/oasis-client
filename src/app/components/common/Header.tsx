import React from 'react'
import styled from 'styled-components'
import AppContainer from '../ui/AppContainer'
import AppLogo from '../ui/AppLogo'
import LinkIcon from './LinkIcon'

const HeaderBlock = styled.header`
	width: 100%;
	background-color: var(--main-color);
`

const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const HeaderIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Header = () => {
	return (
		<HeaderBlock>
			<AppContainer>
				<HeaderInner>
					<AppLogo />

					<HeaderIcons>
						<LinkIcon
							path='/cart'
							iconName='shopping_cart'
							iconColor='white'
						/>
						<LinkIcon
							path='/auth'
							iconName='login'
							iconColor='white'
						/>
					</HeaderIcons>
				</HeaderInner>
			</AppContainer>
		</HeaderBlock>
	)
}
export default Header
