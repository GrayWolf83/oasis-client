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
		align-items: flex-end;
	}
`
const CommentsLinkIcon = styled.span`
	font-size: 22px;
`
const CommentsLinkCount = styled.span`
	font-size: 18px;
	margin-right: 5px;
`

const CommentsLink = ({ comments, path }: IProps) => {
	return (
		<CommentsLinkBlock>
			{comments ? (
				<Link to={path}>
					<CommentsLinkCount>{comments}</CommentsLinkCount>
					<CommentsLinkIcon className='material-icons'>
						sms
					</CommentsLinkIcon>
				</Link>
			) : (
				<>
					<CommentsLinkCount style={{ color: 'var(--red-color)' }}>
						{comments}
					</CommentsLinkCount>
					<CommentsLinkIcon
						className='material-icons'
						style={{ color: 'var(--red-color)' }}>
						sms
					</CommentsLinkIcon>
				</>
			)}
		</CommentsLinkBlock>
	)
}

export default CommentsLink
