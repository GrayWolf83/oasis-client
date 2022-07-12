import React from 'react'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'

const Cart = () => {
	return (
		<>
			<LinkIcon path='/' iconName='home' iconColor='var(--main-color)' />
			<PageTitle title='Корзина' />
		</>
	)
}

export default Cart
