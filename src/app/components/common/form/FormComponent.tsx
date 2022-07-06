import React, { useState } from 'react'
import styled from 'styled-components'
import AppButton from '../../ui/AppButton'

interface IProps {
	initialData: { [key: string]: string }
	onSubmit: (data: { [key: string]: string }) => void
	btnLabel: string
	children: React.ReactNode
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const FormComponent = ({
	initialData,
	onSubmit,
	btnLabel,
	children,
}: IProps) => {
	const [data, setData] = useState(initialData)
	const [error, setError] = useState<{ [key: string]: string }>({})

	const changeHandler = (value: { [key: string]: string }) => {
		setData((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		onSubmit(data)
	}

	return (
		<Form onSubmit={submitHandler}>
			{React.Children.map(children, (child: any) => {
				const config = {
					...child.props,
					onChange: changeHandler,
					value: data[child.props.name],
					error: error[child.props.name],
				}

				return React.cloneElement(child, config)
			})}

			<AppButton label={btnLabel} type='submit' />
		</Form>
	)
}

export default FormComponent
