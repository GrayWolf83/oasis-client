import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../hooks/useAppReduxHooks'
import { deleteCategory } from '../../../store/category'
import { Category } from '../../../types/category'
import AppImage from '../../ui/AppImage'
import AppConfirm from '../AppConfirm'

type IProps = {
	item: Category
}

const ItemInner = styled.div`
	width: 45%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	padding: 5px;
	box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.5);

	@media (max-width: 768px) {
		width: 90%;
	}
`
const ItemTitle = styled.h3`
	margin-left: 20px;
	margin-right: auto;
`
const ItemActions = styled.div``
const ItemIcon = styled.span`
	font-size: 32px;
	cursor: pointer;
	color: var(--main-color);
`

const CategoryListItem = ({ item }: IProps) => {
	const dispatch = useAppDispatch()
	const [showConfirm, setShowConfirm] = useState(false)

	const handleDelete = () => {
		dispatch(deleteCategory(Number(item.id)))
	}

	return (
		<ItemInner>
			<AppImage item={item} width='150px' height='100px' />
			<ItemTitle>{item.name}</ItemTitle>
			<ItemActions>
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
				text={`Удалить категорию "${item.name}"?`}
			/>
		</ItemInner>
	)
}

export default CategoryListItem
