import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/useAppReduxHooks'
import { loadActiveOrdersList, loadArchiveOrdersList } from '../../store/order'

type IProps = {
	active: string
	setActive: Dispatch<SetStateAction<'active' | 'archive'>>
}

const ButtonsBlock = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	@media (max-width: 992px) {
		width: 70%;
	}

	@media (max-width: 580px) {
		width: 90%;
	}
`

const OrderButton = styled.span`
	cursor: pointer;

	.active {
		font-weight: bold;
		font-size: 18px;
	}
`

const OrdersLoader = ({ active, setActive }: IProps) => {
	const dispatch = useAppDispatch()
	const activeStyle = { fontSize: '18px', textDecoration: 'underline' }

	useEffect(() => {
		if (active === 'active') {
			dispatch(loadActiveOrdersList())
		}
		if (active === 'archive') {
			dispatch(loadArchiveOrdersList())
		}
	}, [active, dispatch])
	return (
		<ButtonsBlock>
			<OrderButton
				style={active === 'active' ? activeStyle : {}}
				onClick={() => setActive('active')}>
				Активные заказы
			</OrderButton>
			<OrderButton
				style={active === 'archive' ? activeStyle : {}}
				onClick={() => setActive('archive')}>
				Архив заказов
			</OrderButton>
		</ButtonsBlock>
	)
}

export default OrdersLoader
