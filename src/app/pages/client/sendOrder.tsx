import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import FormComponent from '../../components/common/form/FormComponent'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import orderService from '../../services/order.service'
import { clearCart, getCartList } from '../../store/cart'
import { Order } from '../../types/order'
import { sendOrderSchema } from '../../validate'

const Table = styled.table`
	width: calc(100% - 20px);
	padding: 0 10px;
`

const OrderTotal = styled.h3`
	margin: 20px 10px;
`

const SendOrder = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const cartItems = useAppSelector(getCartList())
	const total = cartItems.reduce(
		(acc, item) => (acc += item.price * item.count),
		0,
	)

	const handleSubmit = async (data: { [key: string]: string }) => {
		const order: Order = {
			name: data.name,
			phone: data.phone,
			address: data.address,
			price: total,
			orderProducts: cartItems.map((item) => ({
				ProductId: item.id,
				count: item.count,
			})),
		}

		await orderService.sendOrder(order)
		dispatch(clearCart())
		toast.success('Заказ оформлен!')
		navigate('/')
	}

	return (
		<>
			<LinkIcon
				path='/cart'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Заказ' />
			<Table>
				<thead>
					<tr>
						<th scope='col' align='left'>
							Наименование
						</th>
						<th scope='col' align='left'>
							Количество
						</th>
						<th scope='col' align='left'>
							Цена
						</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((item, index) => (
						<tr key={index}>
							<td>{item.name}</td>
							<td>{item.count}</td>
							<td>{item.price} ₸</td>
						</tr>
					))}
				</tbody>
			</Table>
			<OrderTotal>Сумма: {total} ₸</OrderTotal>
			<FormComponent
				onSubmit={handleSubmit}
				btnLabel='Отправить'
				validationShema={sendOrderSchema}>
				<TextField
					name='name'
					label='Имя'
					type='text'
					value=''
					onChange={() => {}}
					error={null}
				/>
				<TextField
					name='phone'
					label='Телефон'
					type='tel'
					value=''
					onChange={() => {}}
					error={null}
				/>
				<TextField
					name='address'
					label='Адрес доставки'
					type='text'
					value=''
					onChange={() => {}}
					error={null}
				/>
			</FormComponent>
		</>
	)
}

export default SendOrder
