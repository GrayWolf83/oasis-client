import React from 'react'
import styled from 'styled-components'
import AppImage from '../ui/AppImage'
import { useAppDispatch } from '../../hooks/useAppReduxHooks'
import { CartProduct } from '../../types/cartProduct'
import {
	decrementCartProduct,
	incrementCartProduct,
	removeCartProduct,
} from '../../store/cart'

interface IProps {
	item: CartProduct
}

const ProductItem = styled.div`
	width: 360px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.5);
	margin: 10px;
	padding: 5px;

	@media (max-width: 380px) {
		width: 300px;
	}
`

const ProductTitle = styled.h3`
	width: 180px;
	font-size: 20px;
	text-align: center;

	@media (max-width: 380px) {
		width: 140px;
		font-size: 18px;
	}
`

const ProductDesc = styled.p`
	width: 100%;
`

const ProductPrice = styled.h3`
	font-size: 18px;
	margin-top: 10px;
`

const ProductIcon = styled.span`
	font-size: 36px;
	cursor: pointer;
`

const CartCountBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-size: 30px;
		cursor: pointer;
	}
`

const CartCountText = styled.h3`
	font-size: 20px;
	margin: 0 10px;
`

const CartListItem = ({ item }: IProps) => {
	const dispatch = useAppDispatch()

	const removeCartItemHandler = (id: string) => {
		dispatch(removeCartProduct(id))
	}

	const incrementCartItemHandler = (id: string) => {
		dispatch(incrementCartProduct(id))
	}

	const decrementCartItemHandler = (id: string) => {
		dispatch(decrementCartProduct(id))
	}

	return (
		<ProductItem>
			<AppImage item={item} width='150px' height='auto' />
			<ProductTitle>{item.name}</ProductTitle>
			<ProductDesc>{item.description}</ProductDesc>
			<ProductPrice>Цена: {item.price} ₸</ProductPrice>
			<CartCountBlock>
				<ProductIcon
					className='material-icons'
					onClick={() => decrementCartItemHandler(item.id)}>
					remove
				</ProductIcon>
				<CartCountText>{item.count}</CartCountText>
				<ProductIcon
					className='material-icons'
					onClick={() => incrementCartItemHandler(item.id)}>
					add
				</ProductIcon>
			</CartCountBlock>
			<ProductIcon
				className='material-icons'
				onClick={() => removeCartItemHandler(item.id)}>
				delete
			</ProductIcon>
		</ProductItem>
	)
}

export default CartListItem
