import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type IProps = {
	comments: number
	path: string
}

const CommentsLinkBlock = styled.div`
	height: 25px;
	display: flex;
	align-items: flex-end;

	a {
		display: flex;
		align-items: center;
		margin-right: 20px;

		:hover {
			opacity: 0.7;
		}
	}
`
const CommentsLinkIcon = styled.span`
	font-size: 22px;
`
const CommentsLinkText = styled.span`
	font-size: 14px;
	margin-right: 5px;
`

const CommentsLink = ({ comments, path }: IProps) => {
	return (
		<CommentsLinkBlock>
			<Link to={path}>
				<CommentsLinkText>Отзывы</CommentsLinkText>
				<CommentsLinkIcon className='material-icons'>
					sms
				</CommentsLinkIcon>
			</Link>
		</CommentsLinkBlock>
	)
}

export default CommentsLink
