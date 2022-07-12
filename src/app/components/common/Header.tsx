import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCartItemsCount } from '../../store/cart'
import { getUser } from '../../store/user'
import AppContainer from '../ui/AppContainer'
import AppLogo from '../ui/AppLogo'
import LinkIcon from './LinkIcon'
import UserProfile from './UserProfile'

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
const CartIcons = styled.span`
	display: flex;
	align-items: center;
	color: var(--white-color);
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}
`
const CartIcon = styled.span`
	font-size: 36px;
`
const CartCount = styled.span`
	font-size: 16px;
`

const Header = () => {
	const user = useAppSelector(getUser())
	const cartItemsCount = useAppSelector(getCartItemsCount())

	return (
		<HeaderBlock>
			<AppContainer>
				<HeaderInner>
					<AppLogo />

					<HeaderIcons>
						<Link to='/cart'>
							<CartIcons>
								<CartIcon className='material-icons'>
									shopping_cart
								</CartIcon>
								<CartCount>{cartItemsCount}</CartCount>
							</CartIcons>
						</Link>

						{user ? (
							<UserProfile />
						) : (
							<LinkIcon
								path='/auth'
								iconName='login'
								iconColor='white'
							/>
						)}
					</HeaderIcons>
				</HeaderInner>
			</AppContainer>
		</HeaderBlock>
	)
}
export default Header
