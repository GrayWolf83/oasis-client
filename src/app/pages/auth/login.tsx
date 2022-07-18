import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import FormComponent from '../../components/common/form/FormComponent'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserLoadedStatus, login } from '../../store/user'
import { loginSchema } from '../../validate'

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

const Login = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const isUserLoaded = useAppSelector(getUserLoadedStatus())

	useEffect(() => {
		if (isUserLoaded) {
			navigate('/')
		}
	}, [isUserLoaded, navigate])

	const handleSubmit = (data: { [key: string]: string }) => {
		if (data?.email && data?.password) {
			const send = {
				email: data.email,
				password: data.password,
			}
			dispatch(login(send))
		}
	}

	return (
		<>
			<LinkIcon path='/' iconName='home' iconColor='var(--main-color)' />
			<PageTitle title='Авторизация' />

			<FormComponent
				validationShema={loginSchema}
				btnLabel='Войти'
				onSubmit={handleSubmit}>
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
				<Link to='signup'>Регистрация</Link>
			</LoginLink>
		</>
	)
}

export default Login
