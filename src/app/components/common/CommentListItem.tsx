import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { deleteComment } from '../../store/comment'
import { getUser } from '../../store/user'
import { Comment } from '../../types/comment'
import UserProfileIcon from '../ui/icons/UserProfileIcon'
import AppConfirm from './AppConfirm'

type IProps = {
	item: Comment
}

const ItemInner = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 10px;
	padding: 10px;
	box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.5);
`
const ItemUser = styled.div`
	display: flex;
	align-items: center;
	margin-right: 10px;
	margin-bottom: 10px;
`
const ItemUserText = styled.p`
	font-size: 18px;
	margin-left: 10px;
`
const ItemText = styled.p`
	font-size: 14px;
`
const ItemDelete = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	padding: 2px 5px;
	font-weight: bold;
	border: 1px solid var(--main-color);
	border-radius: 50%;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}
`

const CommentListItem = ({ item }: IProps) => {
	const [showConfirm, setShowConfirm] = useState(false)
	const dispatch = useAppDispatch()
	const currentUser = useAppSelector(getUser())

	const handleDelete = () => {
		dispatch(deleteComment(item.id))
	}

	return (
		<>
			<ItemInner>
				<ItemUser>
					<UserProfileIcon color='var(--main-color)' size='32px' />
					<ItemUserText>{item.User.name}</ItemUserText>
				</ItemUser>
				<ItemText>{item.text}</ItemText>
				{currentUser?.id === item.UserId && (
					<ItemDelete onClick={() => setShowConfirm(true)}>
						X
					</ItemDelete>
				)}
			</ItemInner>
			<AppConfirm
				show={showConfirm}
				onShow={setShowConfirm}
				setPermission={handleDelete}
				text={`Удалить отзыв?`}
			/>
		</>
	)
}

export default CommentListItem
