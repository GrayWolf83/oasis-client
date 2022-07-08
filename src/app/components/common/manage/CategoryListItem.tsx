import React from 'react'
import styled from 'styled-components'
import { Category } from '../../../types/category'
import AppImage from '../../ui/AppImage'

type IProps = {
	item: Category
}

const ItemInner = styled.div`
	width: 45%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	border-bottom: 1px solid var(--main-color);

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
	color: var(--red-color);
`

const CategoryListItem = ({ item }: IProps) => {
	return (
		<ItemInner>
			<AppImage item={item} width='150px' height='100px' />
			<ItemTitle>{item.name}</ItemTitle>
			<ItemActions>
				<ItemIcon className='material-icons'>delete</ItemIcon>
			</ItemActions>
		</ItemInner>
	)
}

export default CategoryListItem
