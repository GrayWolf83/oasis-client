import React from 'react'
import styled from 'styled-components'
import AppContainer from '../ui/AppContainer'
import AppLogo from './AppLogo'
import LinkIcon from './LinkIcon'

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
		<div className='header'>
			<AppContainer>
				<HeaderInner>
					<AppLogo />

					<HeaderIcons>
						<LinkIcon
							path='/manage'
							iconName='settings'
							iconColor='white'
						/>
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
		</div>
	)
}
export default Header
