import React from 'react'
import styled from 'styled-components'

type IProps = {
	children: React.ReactNode
}

const FieldBlock = styled.div`
	width: 100%;
	height: 85px;
	position: relative;
	margin-bottom: 10px;
`

const InputGroupBlock = ({ children }: IProps) => {
	return <FieldBlock>{children}</FieldBlock>
}

export default InputGroupBlock
