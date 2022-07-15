import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getIsManage, logout } from '../../store/user'

const ProfileInner = styled.div`
	position: relative;
`

const Icon = styled.span`
	font-size: 36px;
	color: var(--white-color);
	transition: all 0.3s ease-in-out;
	margin: 10px;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}
`

const ProfileMenu = styled.ul`
	position: absolute;
	bottom: -106px;
	right: 0;
	background-color: var(--white-color);
	box-shadow: 0px 7px 8px 0px rgba(34, 60, 80, 0.2);
	z-index: 3;

	li {
		border-top: 1px solid var(--main-color);
		padding: 10px 20px;
		cursor: pointer;

		:hover {
			opacity: 0.7;
		}
	}
`

const UserProfile = () => {
	const [isOpen, setOpen] = useState(false)
	const dispatch = useAppDispatch()
	const isManage = useAppSelector(getIsManage())

	const handleClick = () => {
		setOpen(!isOpen)
	}

	const handleLogOut = () => {
		dispatch(logout())
	}

	return (
		<ProfileInner>
			<Icon className='material-icons' onClick={handleClick}>
				account_circle
			</Icon>
			{isOpen && (
				<ProfileMenu>
					<li onClick={handleClick}>
						{isManage ? (
							<Link to='/manage'>Управление</Link>
						) : (
							<Link to='/order'>Заказы</Link>
						)}
					</li>

					<li onClick={handleLogOut}>Выход</li>
				</ProfileMenu>
			)}
		</ProfileInner>
	)
}

export default UserProfile
