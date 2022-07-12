import React, { useState } from 'react'
import styled from 'styled-components'

type IProps = {
	label: string
	type: string
	name: string
	value?: string | number
	onChange(value: { [key: string]: string }): void
	error: string | null
}

const FieldBlock = styled.div`
	width: 100%;
	height: 85px;
	position: relative;
	margin-bottom: 10px;
`
const FieldInput = styled.input`
	width: calc(100% - 22px);
	font-size: 18px;
	padding: 10px;
	border: 1px solid var(--main-color);
	color: var(--main-color);

	:focus-visible {
		outline: none;
	}
`
const FieldLabel = styled.label`
	font-size: 18px;
`
const FieldButton = styled.button`
	height: 43px;
	position: absolute;
	bottom: 19px;
	right: 0;
	z-index: 5;
	background-color: var(--main-color);
	border: 1px solid var(--main-color);
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	:hover {
		opacity: 0.7;
	}

	span {
		color: var(--white-color);
	}
`
const FieldError = styled.p`
	font-size: 14px;
	color: var(--red-color);
`

const TextField = ({
	label,
	type,
	name,
	value,
	onChange,
	error,
	...rest
}: IProps) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword((prevState) => !prevState)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange({ [e.target.name]: e.target.value })
	}

	return (
		<FieldBlock>
			<FieldLabel
				htmlFor={name}
				style={{
					color: `var(--${error ? 'red' : 'main'}-color)`,
				}}>
				{label}
			</FieldLabel>
			<FieldInput
				type={showPassword ? 'text' : type}
				id={name}
				name={name}
				onChange={(e) => handleChange(e)}
				autoComplete={name}
				value={value || ''}
				{...rest}
				style={{
					borderColor: `var(--${error ? 'red' : 'main'}-color)`,
				}}
			/>

			{type === 'password' && (
				<FieldButton
					className='btn btn-outline-secondary'
					type='button'
					onClick={toggleShowPassword}
					style={{
						borderColor: `var(--${error ? 'red' : 'main'}-color)`,
						backgroundColor: `var(--${
							error ? 'red' : 'main'
						}-color)`,
					}}>
					<span className='material-icons'>
						{showPassword ? 'visibility_off' : 'visibility'}
					</span>
				</FieldButton>
			)}
			{error && <FieldError>{error}</FieldError>}
		</FieldBlock>
	)
}

export default TextField
