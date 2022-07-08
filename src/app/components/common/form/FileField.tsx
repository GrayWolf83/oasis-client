import React from 'react'
import styled from 'styled-components'

type IProps = {
	onChange: () => void
	description: string
	type: string
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

const FileField = ({ onChange, description, type }: IProps) => {
	return (
		<FileFieldInner>
			<InputFile
				name='image'
				type={type}
				id='input__file'
				onChange={onChange}
				required
			/>
			<InputFileButton htmlFor='input__file'>
				<InputFileButtonIcon>
					<span className='material-icons'>download</span>
				</InputFileButtonIcon>
				<InputFileButtonText>
					{description || 'Выбрать картинку'}
				</InputFileButtonText>
			</InputFileButton>
		</FileFieldInner>
	)
}

export default FileField
