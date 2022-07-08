import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUser } from '../../store/user'

type IProps = {
	children: React.ReactNode
}

const ProtectedManage = ({ children }: IProps) => {
	const user = useAppSelector(getUser())

	if (!user || user.role !== 'manage') return <Navigate to='/' />

	return <>{children}</>
}

export default ProtectedManage
