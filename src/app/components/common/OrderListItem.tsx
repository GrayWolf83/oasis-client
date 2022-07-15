import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { loadActiveOrdersList, updateOrderStatus } from '../../store/order'
import { getIsManage } from '../../store/user'
import { Order } from '../../types/order'
import getDateTimeString from '../../utils/getDateTimeString'
import getOrderStatusName from '../../utils/getOrderStatusName'
import AppImage from '../ui/AppImage'

type IProps = {
	item: Order
}

const OrderItemBlock = styled.div`
	flex-basis: 45%;
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 5px;
	box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.5);

	@media (max-width: 768px) {
		flex-basis: 100%;
	}
`

const OrderItemRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const OrderItemColumn = styled.div`
	width: 100%;
	flex-basis: 100%;
	display: flex;
	flex-direction: column;
`
const OrderProductBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
	padding: 5px;

	@media (max-width: 768px) {
		flex-basis: 100%;
	}
`

const OrderTitle = styled.h4``

const OrderInnerBlock = styled.div`
	flex-basis: 45%;

	@media (max-width: 768px) {
		flex-basis: 100%;
	}
`

const OrderIcon = styled.span`
	font-size: 28px;
	cursor: pointer;
	margin-left: 10px;
`
const OrderInnerText = styled.p`
	margin: 10px 0;
	display: flex;
	align-items: center;
	font-size: 14px;
`
const OrderInnerTextCenter = styled.p`
	margin: 10px auto 10px 10px;
	display: flex;
	align-items: center;
	font-size: 14px;
`

const OrderListItem = ({ item }: IProps) => {
	const dispatch = useAppDispatch()
	const isManage = useAppSelector(getIsManage())

	const handleUpdateOrderStatus = () => {
		if (isManage) {
			dispatch(updateOrderStatus(item.id))
		} else {
			dispatch(loadActiveOrdersList())
		}

		toast.success('Статус обновлен!')
	}

	return (
		<OrderItemBlock key={item.id}>
			<OrderItemRow>
				<OrderTitle>Заказ № {item.id.split('-')[0]}</OrderTitle>
				{item.status !== 'end' && (
					<OrderInnerText>
						Обновить статус
						<OrderIcon
							className='material-icons'
							onClick={handleUpdateOrderStatus}>
							{isManage ? 'send' : 'refresh'}
						</OrderIcon>
					</OrderInnerText>
				)}
			</OrderItemRow>
			<OrderItemRow>
				<OrderInnerBlock>
					<OrderInnerText>
						Дата заказа: {getDateTimeString(item.createdAt)}
					</OrderInnerText>
					<OrderInnerText>
						Статус: {getOrderStatusName(item.status)}
					</OrderInnerText>
					<OrderInnerText>
						Изменения: {getDateTimeString(item.updatedAt)}
					</OrderInnerText>
					{isManage && (
						<OrderInnerText>Имя: {item.name}</OrderInnerText>
					)}
					<OrderInnerText>Телефон: {item.phone}</OrderInnerText>
					<OrderInnerText>Адрес: {item.address}</OrderInnerText>
				</OrderInnerBlock>
			</OrderItemRow>
			<OrderItemColumn>
				{item.OrderProducts.map((prod) => (
					<OrderProductBlock key={prod.id}>
						<AppImage width='70px' item={prod.Product} />
						<OrderInnerTextCenter>
							{prod.Product.name}
						</OrderInnerTextCenter>
						<OrderInnerText>{prod.count}</OrderInnerText>
					</OrderProductBlock>
				))}
			</OrderItemColumn>

			<OrderItemRow>
				<OrderTitle>Общая стоимость: {item.price} ₸</OrderTitle>
			</OrderItemRow>
		</OrderItemBlock>
	)
}

export default OrderListItem
