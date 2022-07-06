import React from 'react'
import styled from 'styled-components'

interface IProps {
	title: string
}

const Title = styled.h2`
	margin: 10px;
	text-align: center;
`

const PageTitle = ({ title }: IProps) => {
	return <Title>{title}</Title>
}

export default PageTitle
