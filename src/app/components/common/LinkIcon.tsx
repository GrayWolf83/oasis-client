import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type IProps = {
	path: string
	iconName: string
	iconColor: string
}

const Icon = styled.span`
	font-size: 36px;
	transition: all 0.3s ease-in-out;
	margin-left: 10px;

	:hover {
		opacity: 0.7;
	}
`

const LinkIcon = ({ path, iconName, iconColor }: IProps) => {
	return (
		<Link to={path}>
			<Icon className='material-icons' style={{ color: iconColor }}>
				{iconName}
			</Icon>
		</Link>
	)
}

export default LinkIcon
