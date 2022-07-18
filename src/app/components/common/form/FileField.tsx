import React from 'react'
import styled from 'styled-components'

type IProps = {
	onChange: (value: { [key: string]: string | File }) => void
	type: string
	name: string
	error: string | null
	value: { name: string } | null
}

const FileFieldInner = styled.div`
	width: 100%;
	height: 85px;
	position: relative;
	text-align: center;
`

const InputFile = styled.input`
	opacity: 0;
	visibility: hidden;
	position: absolute;
`

const InputFileButton = styled.label`
	width: calc(100% - 4px);
	height: 45px;
	background: var(--main-color);
	color: #fff;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-radius: 3px;
	cursor: pointer;
	margin: 0 auto;
	padding-left: 4px;
`
const InputFileButtonIcon = styled.span`
	height: 40px;
	width: 45px;
	margin-right: 15px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	border-right: 1px solid #fff;
`
const InputFileButtonText = styled.span``
const FieldError = styled.p`
	font-size: 14px;
	color: var(--red-color);
`

const FileField = ({ onChange, type, name, error, value }: IProps) => {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			onChange({ [e.target.name]: e.target.files[0] })
		}
	}

	return (
		<FileFieldInner>
			<InputFile
				name={name}
				type={type}
				id='input__file'
				onChange={(e) => changeHandler(e)}
			/>
			<InputFileButton
				htmlFor='input__file'
				style={{
					backgroundColor: `var(--${error ? 'red' : 'main'}-color)`,
				}}>
				<InputFileButtonIcon>
					<span className='material-icons'>download</span>
				</InputFileButtonIcon>
				<InputFileButtonText>
					{value?.name || 'Выбрать картинку'}
				</InputFileButtonText>
			</InputFileButton>
			{error && <FieldError>{error}</FieldError>}
		</FileFieldInner>
	)
}

export default FileField
