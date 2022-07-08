import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'

const MenuList = styled.ul`
	width: 60%;
	margin: 20px auto 0;

	@media (max-width: 1200px) {
		width: 70%;
	}

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 580px) {
		width: 95%;
	}
`
const MenuListItem = styled.li`
	display: flex;
	justify-content: center;
	background-color: var(--main-color);
	margin-bottom: 15px;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}

	a {
		width: 100%;
		font-size: 18px;
		text-align: center;
		padding: 10px;
		color: var(--white-color);
	}
`

const ManageMenu = () => {
	return (
		<>
			<LinkIcon path='/' iconName='home' iconColor='var(--main-color)' />
			<PageTitle title='Управление' />
			<MenuList>
				<MenuListItem>
					<Link to='category'>Категории</Link>
				</MenuListItem>
				<MenuListItem>
					<Link to='product'>Список блюд</Link>
				</MenuListItem>
				<MenuListItem>
					<Link to='order'>Заказы</Link>
				</MenuListItem>
			</MenuList>
		</>
	)
}

export default ManageMenu
