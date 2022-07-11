import React from 'react'
import styled from 'styled-components'
import InputGroupBlock from '../../ui/InputGroupBlock'

type IProps = {
	items: { id: number; name: string }[]
	onChange: (data: { [key: string]: string }) => void
	name: string
	label: string
	defaultLabel: string
	error: string | null
	value: number | string
}

const FieldLabel = styled.label`
	font-size: 18px;
`

const Select = styled.select`
	width: 100%;
	font-size: 18px;
	padding: 10px;
	border: 1px solid var(--main-color);
	color: var(--main-color);

	:focus-visible {
		outline: none;
	}
`
const Option = styled.option``
const FieldError = styled.p`
	font-size: 14px;
	color: var(--red-color);
`

const SelectField = ({
	items,
	onChange,
	name,
	label,
	defaultLabel,
	error,
	value,
}: IProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange({ [e.target.name]: e.target.value })
	}

	return (
		<InputGroupBlock>
			<FieldLabel
				htmlFor={name}
				style={{
					color: `var(--${error ? 'red' : 'main'}-color)`,
				}}>
				{label}
			</FieldLabel>
			<Select
				name={name}
				id={name}
				onChange={handleChange}
				value={value}
				style={{
					borderColor: `var(--${error ? 'red' : 'main'}-color)`,
					color: `var(--${error ? 'red' : 'main'}-color)`,
				}}>
				<Option value={0}>{defaultLabel}</Option>
				{items.map((item) => (
					<Option value={Number(item.id)} key={item.id}>
						{item.name}
					</Option>
				))}
			</Select>
			{error && <FieldError>{error}</FieldError>}
		</InputGroupBlock>
	)
}

export default SelectField
