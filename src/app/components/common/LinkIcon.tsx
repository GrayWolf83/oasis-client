import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type IProps = {
	path: string
	iconName: string
	iconColor: string
}

const Icon = styled.span`
	font-size: 36px;
	transition: all 0.3s ease-in-out;
	margin: 10px;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}
`

const LinkIcon = ({ path, iconName, iconColor }: IProps) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(path)
	}

	return (
		<Icon
			className='material-icons'
			style={{ color: iconColor }}
			onClick={handleClick}>
			{iconName}
		</Icon>
	)
}

export default LinkIcon
