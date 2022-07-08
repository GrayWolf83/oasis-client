import { autologin, getUserLoadedStatus } from './../store/user'
import { useAppDispatch, useAppSelector } from './useAppReduxHooks'
import { Children, useEffect } from 'react'
import localStorageService from '../services/localStorage.service'

const useAutoLogin = () => {
	const dispatch = useAppDispatch()
	const isUserLoaded = useAppSelector(getUserLoadedStatus())
	const token = localStorageService.getRefreshToken()

	useEffect(() => {
		if (!isUserLoaded && token) {
			dispatch(autologin())
		}
	}, [isUserLoaded, dispatch, token])

	return Children
}

export default useAutoLogin
