import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/useAppReduxHooks'
import { clearCart } from '../../store/cart'
import { CartProduct } from '../../types/cartProduct'

interface IProps {
	items: CartProduct[]
}

const CartTotalBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 20px;

	@media (max-width: 1200px) {
		justify-content: space-around;
	}
`

const CartTotalTitleBlock = styled.div``

const CartTotalTitle = styled.h2`
	font-size: 20px;
	margin: 5px 0;
`

const CartTotalText = styled.p`
	font-size: 12px;
	color: var(--red-color);
	margin: 5px 0;
`

const CartButtonBlock = styled.div`
	margin: 20px 0;
`

const CartButton = styled.button`
	font-size: 20px;
	padding: 5px 20px;
	color: var(--white-color);
	border-radius: 5px;
	margin-left: 10px;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}

	:nth-child(1) {
		background-color: var(--red-color);
		border: 1px solid var(--red-color);
	}

	:nth-child(2) {
		background-color: var(--success-color);
		border: 1px solid var(--success-color);
	}
`

const CartTotal = ({ items }: IProps) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const total = items.reduce(
		(acc, item) => (acc += item.price * item.count),
		0,
	)

	const clearCartHandler = () => {
		dispatch(clearCart())
	}

	const orderHandler = () => {
		navigate('/cart/send')
	}

	return (
		<CartTotalBlock>
			<CartTotalTitleBlock>
				<CartTotalTitle>Сумма: {total} ₸</CartTotalTitle>
				<CartTotalText>
					В сумму не входит стоимость доставки
				</CartTotalText>
			</CartTotalTitleBlock>

			<CartButtonBlock>
				<CartButton onClick={clearCartHandler}>Очистить</CartButton>
				<CartButton onClick={orderHandler}>Заказать</CartButton>
			</CartButtonBlock>
		</CartTotalBlock>
	)
}

export default CartTotal
