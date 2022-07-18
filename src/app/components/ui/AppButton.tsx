import React from 'react'
import styled from 'styled-components'

type IProps = {
	label: string
	type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = styled.button`
	font-size: 18px;
	letter-spacing: 1px;
	padding: 10px 20px;
	background-color: var(--main-color);
	color: var(--white-color);
	border: 1px solid var(--main-color);
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	border-radius: 5px;

	:hover {
		opacity: 0.7;
	}
`

const AppButton = ({ label, type }: IProps) => {
	const btnType = type ? type : 'button'

	return <Button type={btnType}>{label}</Button>
}

export default AppButton
