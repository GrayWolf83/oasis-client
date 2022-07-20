import React from 'react'
import styled from 'styled-components'

type IProps = {
	label: string
	name: string
	value?: string | number
	onChange(value: { [key: string]: string }): void
	error: string | null
}

const FieldBlock = styled.div`
	width: 100%;
	height: 85px;
	position: relative;
	margin-bottom: 30px;
`
const FieldInput = styled.textarea`
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
const FieldError = styled.p`
	font-size: 14px;
	color: var(--red-color);
`

const TextAreaField = ({
	label,
	name,
	value,
	onChange,
	error,
	...rest
}: IProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

			{error && <FieldError>{error}</FieldError>}
		</FieldBlock>
	)
}

export default TextAreaField
