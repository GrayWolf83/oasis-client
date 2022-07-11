import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '../../../hooks/useAppReduxHooks'
import { changeVisibleProduct, deleteProduct } from '../../../store/product'
import { Product } from '../../../types/product'
import AppImage from '../../ui/AppImage'
import AppConfirm from '../AppConfirm'

type IProps = {
	item: Product
}

const ItemInner = styled.div`
	width: 40%;
	display: flex;
	padding: 5px;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.5);

	@media (max-width: 992px) {
		width: 45%;
	}

	@media (max-width: 768px) {
		width: 90%;
	}
`
const ItemTitle = styled.h3`
	font-size: 18px;
	margin-left: 10px;
`
const ItemRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`
const ItemText = styled.p``
const ItemActions = styled.div``
const ItemIcon = styled.span`
	font-size: 32px;
	cursor: pointer;
	color: var(--main-color);
	margin-left: 10px;
`

const ManageProductsListItem = ({ item }: IProps) => {
	const [showConfirm, setShowConfirm] = useState(false)
	const dispatch = useAppDispatch()

	const handleDelete = () => {
		dispatch(deleteProduct(Number(item.id)))
	}

	return (
		<ItemInner>
			<ItemRow>
				<AppImage item={item} width='150px' height='100px' />
				<ItemTitle>{item.name}</ItemTitle>
			</ItemRow>
			<ItemRow>
				<ItemText>{item.description}</ItemText>
			</ItemRow>
			<ItemRow>
				<ItemTitle>Цена: {item.price} ₸</ItemTitle>
				<ItemActions>
					<ItemIcon
						className='material-icons'
						onClick={() =>
							dispatch(changeVisibleProduct(Number(item.id)))
						}
						style={{
							color: item.isVisible
								? 'var(--main-color)'
								: 'var(--red-color)',
						}}>
						{item.isVisible ? 'visibility' : 'visibility_off'}
					</ItemIcon>
					<Link to={`/manage/product/edit/${item.id}`}>
						<ItemIcon className='material-icons'>edit</ItemIcon>
					</Link>

					<ItemIcon
						className='material-icons'
						onClick={() => setShowConfirm(true)}>
						delete
					</ItemIcon>
				</ItemActions>
				<AppConfirm
					show={showConfirm}
					onShow={setShowConfirm}
					setPermission={handleDelete}
					text={`Удалить "${item.name}"?`}
				/>
			</ItemRow>
		</ItemInner>
	)
}

export default ManageProductsListItem
