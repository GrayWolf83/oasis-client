import React from 'react'
import styled from 'styled-components'

type IProps = {
	children: React.ReactNode
}

const Container = styled.div`
	width: calc(100% - 20px);
	max-width: 1380px;
	margin: 0 auto;
	padding: 0 10px;
`

const AppContainer = ({ children }: IProps) => {
	return <Container>{children}</Container>
}

export default AppContainer
