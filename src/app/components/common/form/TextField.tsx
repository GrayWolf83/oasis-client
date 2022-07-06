import React, { useState } from 'react'
import styled from 'styled-components'

type IProps = {
	label: string
	type: string
	name: string
	value: string | number
	onChange(value: { [key: string]: string }): void
	error: string | null
}

const FieldBlock = styled.div`
	width: 60%;
	height: 85px;
	position: relative;
	margin: 15px auto;

	@media (max-width: 992px) {
		width: 80%;
	}

	@media (max-width: 580px) {
		width: 95%;
	}
`
const FieldInput = styled.input`
	width: calc(100% - 22px);
	font-size: 18px;
	padding: 10px;
	border: 1px solid var(--main-color);

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
	background-color: var(--white-color);
	border: 1px solid var(--main-color);
	cursor: pointer;

	span {
		color: var(--main-color);
	}
`
const FieldError = styled.p`
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
				value={value}
				onChange={(e) => handleChange(e)}
				autoComplete={name}
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
					}}>
					<span
						className='material-icons'
						style={{
							color: `var(--${error ? 'red' : 'main'}-color)`,
						}}>
						{showPassword ? 'visibility_off' : 'visibility'}
					</span>
				</FieldButton>
			)}
			{error && <FieldError>{error}</FieldError>}
		</FieldBlock>
	)
}

export default TextField
