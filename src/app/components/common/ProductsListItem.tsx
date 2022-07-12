import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/useAppReduxHooks'
import { addCartProduct } from '../../store/cart'
import { Product } from '../../types/product'
import AppImage from '../ui/AppImage'
import CommentsLink from '../ui/CommentsLink'
import ProductRating from './ProductRating'

interface IProps {
	item: Product
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
	transition: all 0.3s ease-in-out;
	margin-top: 5px;

	:hover {
		opacity: 0.7;
	}
`

const ProductListItem = ({ item }: IProps) => {
	const dispatch = useAppDispatch()

	const addCartItemHandler = (prod: Product) => {
		dispatch(addCartProduct(prod))
		toast.success(`'${item.name}' добавлено в корзину`, {
			position: toast.POSITION.BOTTOM_RIGHT,
		})
	}

	return (
		<ProductItem>
			<AppImage item={item} width='150px' height='90px' />
			<ProductTitle>{item.name}</ProductTitle>
			<ProductDesc>{item.description}</ProductDesc>
			<ProductPrice>Цена: {item.price} ₸</ProductPrice>
			<ProductRating rating={item.rating} />
			<CommentsLink
				comments={item.comments}
				path={`/products/comments/${Number(item.id)}`}
			/>
			<ProductIcon
				className='material-icons'
				onClick={() => addCartItemHandler(item)}>
				add_shopping_cart
			</ProductIcon>
		</ProductItem>
	)
}

export default ProductListItem
