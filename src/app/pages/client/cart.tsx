import React from 'react'
import AppList from '../../components/common/AppList'
import CartListItem from '../../components/common/CartListItem'
import CartTotal from '../../components/common/CartTotal'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import SomeTextCenter from '../../components/ui/SomeTextCenter'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCartList } from '../../store/cart'

const Cart = () => {
	const cartItems = useAppSelector(getCartList())

	return (
		<>
			<LinkIcon path='/' iconName='home' iconColor='var(--main-color)' />
			<PageTitle title='Корзина' />

			{cartItems.length ? (
				<>
					<AppList items={cartItems}>
						<CartListItem item={cartItems[0]} />
					</AppList>
					<CartTotal items={cartItems} />
				</>
			) : (
				<SomeTextCenter text='Вы еще ничего не добавили' />
			)}
		</>
	)
}

export default Cart
