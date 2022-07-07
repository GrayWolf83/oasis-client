import { configureStore, combineReducers } from '@reduxjs/toolkit'
import errorsReducer from './error'
import userReducer from './user'

const store = configureStore({
	reducer: combineReducers({
		user: userReducer,
		errors: errorsReducer,
	}),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
