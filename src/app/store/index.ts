import { configureStore, combineReducers } from '@reduxjs/toolkit'
import errorsReducer from './error'
import userReducer from './user'
import categoriesReducer from './category'
import productReducer from './product'
import cartReducer from './cart'

const store = configureStore({
	reducer: combineReducers({
		user: userReducer,
		errors: errorsReducer,
		categories: categoriesReducer,
		products: productReducer,
		cart: cartReducer,
	}),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
