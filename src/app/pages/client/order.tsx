import React, { useState } from 'react'
import AppList from '../../components/common/AppList'
import LinkIcon from '../../components/common/LinkIcon'
import OrderListItem from '../../components/common/OrderListItem'
import OrdersLoader from '../../components/common/OrdersLoader'
import PageTitle from '../../components/ui/PageTitle'
import SomeTextCenter from '../../components/ui/SomeTextCenter'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getActiveOrdersList, getArchiveOrdersList } from '../../store/order'
import { Order } from '../../types/order'

const ClientOrder = () => {
	const [active, setActive] = useState<'active' | 'archive'>('active')
	const activeOrders: Order[] = useAppSelector(getActiveOrdersList())
	const archiveOrders: Order[] = useAppSelector(getArchiveOrdersList())

	const orders = active === 'active' ? activeOrders : archiveOrders

	return (
		<>
			<LinkIcon path='/' iconName='home' iconColor='var(--main-color)' />
			<PageTitle title='Мои заказы' />
			<OrdersLoader active={active} setActive={setActive} />
			{orders.length ? (
				<AppList items={orders}>
					<OrderListItem item={orders[0]} />
				</AppList>
			) : (
				<SomeTextCenter
					text={
						active === 'active'
							? 'Нет активных заказов'
							: 'Нет заказов в архиве'
					}
				/>
			)}
		</>
	)
}

export default ClientOrder
