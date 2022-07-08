import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/user'
import userService from '../services/user.service'
import localStorageService from '../services/localStorage.service'

type UserState = {
	user: User | null
	isUserLoaded: boolean
	isLoading: boolean
}

const initialState: UserState = {
	user: null,
	isUserLoaded: false,
	isLoading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userLoaded(state, action: PayloadAction<User>) {
			state.user = action.payload
			state.isUserLoaded = true
		},
		userLoadingStart(state) {
			state.isLoading = true
		},
		userLoadingEnd(state) {
			state.isLoading = false
		},
		userLogOut(state) {
			state.user = null
			state.isUserLoaded = false
		},
	},
})

const { userLoaded, userLoadingStart, userLoadingEnd, userLogOut } =
	userSlice.actions

interface Payload {
	user: User
	refreshToken: string
	accessToken: string
	expiresIn: number | string
}

export const login =
	(data: { email: string; password: string }) =>
	async (dispatch: AppDispatch) => {
		dispatch(userLoadingStart())
		try {
			const payload: Payload = await userService.login(data)
			dispatch(userLoaded(payload.user))

			localStorageService.setTokens({
				refreshToken: payload.refreshToken,
				accessToken: payload.accessToken,
				expiresIn: payload.expiresIn,
			})
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(userLoadingEnd())
		}
	}

export const autologin = () => async (dispatch: AppDispatch) => {
	dispatch(userLoadingStart())
	try {
		const payload: Payload = await userService.refresh()
		dispatch(userLoaded(payload.user))

		localStorageService.setTokens({
			refreshToken: payload.refreshToken,
			accessToken: payload.accessToken,
			expiresIn: payload.expiresIn,
		})
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(userLoadingEnd())
	}
}

export const signUp =
	(data: { email: string; password: string; name: string }) =>
	async (dispatch: AppDispatch) => {
		dispatch(userLoadingStart())
		try {
			const payload = await userService.signup(data)
			dispatch(userLoaded(payload.user))

			localStorageService.setTokens({
				refreshToken: payload.refreshToken,
				accessToken: payload.accessToken,
				expiresIn: payload.expiresIn,
			})
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(userLoadingEnd())
		}
	}

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userLogOut())
		localStorageService.removeAuthData()
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	}
}

export const getUser = () => (state: RootState) => {
	return state.user.user
}

export const getUserLoadedStatus = () => (state: RootState) => {
	return state.user.isUserLoaded
}

export default userSlice.reducer
