import { configureStore } from '@reduxjs/toolkit'
import errorsReducer from './error'
import userReducer from './user'
import categoriesReducer from './category'
import productReducer from './product'
import cartReducer from './cart'
import orderReducer from './order'
import commentReducer from './comment'

const store = configureStore({
	reducer: {
		user: userReducer,
		errors: errorsReducer,
		categories: categoriesReducer,
		products: productReducer,
		cart: cartReducer,
		order: orderReducer,
		comment: commentReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
