import React from 'react'
import styled from 'styled-components'

type IProps = {
	children: JSX.Element
}

const ScrollBlock = styled.div`
	width: 100%;
	height: calc(100vh - 155px);
	max-height: calc(100vh - 155px);
	overflow: auto;
`

const AppScrollContainer = ({ children }: IProps) => {
	return <ScrollBlock>{children}</ScrollBlock>
}

export default AppScrollContainer
