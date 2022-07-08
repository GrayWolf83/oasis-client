import React, { useState } from 'react'
import styled from 'styled-components'
import AppButton from '../../ui/AppButton'

type IProps = {
	initialData?: object
	onSubmit: (data: FormData) => void
	btnLabel: string
	children: React.ReactNode
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
}: IProps) => {
	const [data, setData] = useState<{ [key: string]: string }>({})
	const [error, setError] = useState<{ [key: string]: string }>({})
	const [file, setFile] = useState<File>()

	const changeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('e.target', e.target.files)

		if (e.target.files?.length) {
			console.log('files', e.target.files[0])

			setFile(e.target.files[0])
		}
	}

	const changeTextHandler = (value: { [key: string]: string }) => {
		setData((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData()
		if (file) {
			formData.append('image', file)
		}

		Object.entries(data).forEach((item) => {
			if (item[1] && typeof item[1] === 'string') {
				formData.append(item[0], item[1])
			}
		})

		onSubmit(formData)
	}

	return (
		<Form onSubmit={submitHandler} encType='multipart/form-data'>
			{React.Children.map(children, (child: any) => {
				const config = {
					...child.props,
				}

				if (child.props.type === 'file') {
					config.description = file?.name
					config.onChange = changeFileHandler
				}

				if (child.props.type === 'text') {
					config.value = data[child.props.name]
					config.onChange = changeTextHandler
				}

				return React.cloneElement(child, config)
			})}

			<AppButton label={btnLabel} type='submit' />
		</Form>
	)
}

export default FileFormComponent
