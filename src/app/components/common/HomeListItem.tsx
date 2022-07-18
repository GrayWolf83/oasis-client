import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Category } from '../../types/category'
import AppImage from '../ui/AppImage'

type IProps = {
	item: Category
}

const MenuItemBlock = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--main-color);
	margin: 10px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.5);

	:hover {
		opacity: 0.7;
	}
`
const MenuItemText = styled.div`
	font-size: 22px;
	letter-spacing: 2px;
	color: var(--white-color);
	padding: 10px 0;
	@media (max-width: 1200px) {
		font-size: 20px;
	}
`

const MenuListItem = ({ item }: IProps) => {
	return (
		<Link to={`/products/${item.id}`}>
			<MenuItemBlock>
				<AppImage item={item} width='250px' height='170px' />
				<MenuItemText>{item.name}</MenuItemText>
			</MenuItemBlock>
		</Link>
	)
}

export default MenuListItem
