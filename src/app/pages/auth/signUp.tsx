import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import FormComponent from '../../components/common/form/FormComponent'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserLoadedStatus, signUp } from '../../store/user'
import { signUpSchema } from '../../validate'

const LoginLink = styled.p`
	width: 60%;
	margin: 10px auto 0;
	text-align: right;

	@media (max-width: 992px) {
		width: 80%;
	}

	@media (max-width: 580px) {
		width: 95%;
	}
`

const SignUp = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const isUserLoaded = useAppSelector(getUserLoadedStatus())

	useEffect(() => {
		if (isUserLoaded) {
			navigate('/')
		}
	}, [isUserLoaded, navigate])

	const handleSubmit = (data: { [key: string]: string }) => {
		if (data?.name && data?.email && data?.password) {
			const send = {
				name: data.name,
				email: data.email,
				password: data.password,
			}
			dispatch(signUp(send))
		}
	}

	return (
		<>
			<LinkIcon
				path={'/auth'}
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Регистрация' />

			<FormComponent
				validationShema={signUpSchema}
				btnLabel='Отправить'
				onSubmit={handleSubmit}>
				<TextField
					type='text'
					name='name'
					label='Имя'
					value=''
					onChange={() => console.log('change')}
					error={null}
				/>
				<TextField
					type='email'
					name='email'
					label='Email'
					value=''
					onChange={() => console.log('change')}
					error={null}
				/>
				<TextField
					type='password'
					name='password'
					label='Пароль'
					value=''
					onChange={() => console.log('change')}
					error={null}
				/>
			</FormComponent>
			<LoginLink>
				<Link to='/auth'>Вход</Link>
			</LoginLink>
		</>
	)
}

export default SignUp
