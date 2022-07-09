import React from 'react'
import styled from 'styled-components'

type IProps = {
	show: boolean
	onShow: (val: boolean) => void
	setPermission: () => void
	text: string
}

const ConfirmBlock = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	overflow: hidden;
	z-index: 5;
	background-color: rgba(0, 0, 0, 0.5);
`
const ConfirmInner = styled.div`
	width: 40%;
	height: 30vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: -30vh;
	background-color: var(--white-color);
	border-radius: 5px;
	animation: confirm 0.9s;
	animation-fill-mode: both;

	@media (max-width: 992px) {
		width: 80%;
	}

	@media (max-width: 580px) {
		width: 90%;
	}

	@keyframes confirm {
		from {
			margin-top: -30vh;
		}
		70% {
			margin-top: 25vh;
		}
		to {
			margin-top: 20vh;
		}
	}
`
const ConfirmText = styled.h4`
	font-size: 22px;
	text-align: center;
`
const ConfirmButtonBlock = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 50px;
`

const Button = styled.button`
	width: 120px;
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

const AppConfirm = ({ show, onShow, setPermission, text }: IProps) => {
	const visible = show ? { display: 'flex' } : { display: 'none' }

	return (
		<ConfirmBlock style={visible}>
			<ConfirmInner>
				<ConfirmText>{text}</ConfirmText>
				<ConfirmButtonBlock>
					<Button onClick={() => onShow(false)}>Отмена</Button>
					<Button
						onClick={() => {
							setPermission()
							onShow(false)
						}}>
						Да
					</Button>
				</ConfirmButtonBlock>
			</ConfirmInner>
		</ConfirmBlock>
	)
}

export default AppConfirm
