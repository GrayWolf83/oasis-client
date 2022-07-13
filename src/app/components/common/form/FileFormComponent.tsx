import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import AppButton from '../../ui/AppButton'

type IProps = {
	initialData?: { [key: string]: string }
	onSubmit: (data: FormData) => void
	btnLabel: string
	children: React.ReactNode
	validationShema: any
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 15px auto;

	@media (max-width: 992px) {
		width: 80%;
	}

	@media (max-width: 580px) {
		width: 95%;
	}
`

const FileFormComponent = ({
	initialData,
	onSubmit,
	btnLabel,
	children,
	validationShema,
}: IProps) => {
	const [data, setData] = useState<{
		[key: string]: string | File
	}>({})
	const [error, setError] = useState<{ [key: string]: string }>({})

	useEffect(() => {
		if (initialData) {
			setData(initialData)
		}

		return () => setData({})
	}, [initialData])

	const validation = useCallback(() => {
		validationShema
			.validate(data)
			.then(() => setError({}))
			.catch((err: { message: { name: string; text: string } }) =>
				setError({ [err.message.name]: err.message.text }),
			)
	}, [validationShema, data])

	useEffect(() => {
		if (Object.keys(data).length) validation()
	}, [data, validation])

	const changeHandler = (value: { [key: string]: string | File }) => {
		setData((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		validation()
		delete error?.undefined
		if (!Object.keys(error).length && Object.keys(data).length) {
			const formData = new FormData()

			Object.entries(data).forEach((item) => {
				formData.append(item[0], item[1])
			})

			onSubmit(formData)
		} else {
			toast.warning('Заполните все поля формы')
		}
	}

	return (
		<Form onSubmit={submitHandler} encType='multipart/form-data'>
			{React.Children.map(children, (child: any) => {
				const config = {
					...child.props,
					onChange: changeHandler,
					value: data[child.props.name],
					error: error[child?.props?.name],
				}

				return React.cloneElement(child, config)
			})}

			<AppButton label={btnLabel} type='submit' />
		</Form>
	)
}

export default FileFormComponent
