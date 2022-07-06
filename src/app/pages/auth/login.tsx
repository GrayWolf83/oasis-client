import React from 'react'
import FormComponent from '../../components/common/form/FormComponent'
import TextField from '../../components/common/form/TextField'
import LinkIcon from '../../components/common/LinkIcon'
import PageTitle from '../../components/ui/PageTitle'

const Login = () => {
	const initialData = { email: '', password: '' }

	const handleSubmit = (data: { [key: string]: string }) => {
		console.log('submit', data)
	}

	return (
		<>
			<LinkIcon
				path='/'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Авторизация' />

			<FormComponent
				initialData={initialData}
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
		</>
	)
}

export default Login
