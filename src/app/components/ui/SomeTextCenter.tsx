import React from 'react'
import styled from 'styled-components'

type IProps = {
	text: string
}

const SomeText = styled.p`
	text-align: center;
	margin-top: 20px;
`

const SomeTextCenter = ({ text }: IProps) => {
	return <SomeText>{text}</SomeText>
}

export default SomeTextCenter
