import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'
import { CartProduct } from '../types/cartProduct'

type CartState = {
	entities: CartProduct[]
}

const initialState: CartState = {
	entities: [],
}

const cartProductSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		cartProductAdded(state, action: PayloadAction<Product>) {
			const item = state.entities.find(
				(item) => item.id === action.payload.id,
			)

			if (item) {
				state.entities = state.entities.map((cartItem) => {
					if (cartItem.id === item.id) {
						return {
							...cartItem,
							count: cartItem.count + 1,
						}
					}

					return cartItem
				})
			} else {
				state.entities = [
					...state.entities,
					{ ...action.payload, count: 1 },
				]
			}
		},
		cartProductRemoved: (state, action: PayloadAction<number>) => {
			state.entities = state.entities.filter(
				(item) => Number(item.id) !== action.payload,
			)
		},
		cartCleared: (state) => {
			state.entities = []
		},
		cartIncrement: (state, action: PayloadAction<number>) => {
			state.entities = state.entities.map((item) => {
				if (Number(item.id) === action.payload) {
					return {
						...item,
						count: item.count + 1,
					}
				}
				return item
			})
		},
		cartDecrement: (state, action: PayloadAction<number>) => {
			state.entities = state.entities
				.map((item) => {
					if (Number(item.id) === action.payload) {
						return {
							...item,
							count: item.count - 1,
						}
					}
					return item
				})
				.filter((item) => item.count > 0)
		},
	},
})

const {
	cartProductAdded,
	cartProductRemoved,
	cartCleared,
	cartIncrement,
	cartDecrement,
} = cartProductSlice.actions

export const addCartProduct =
	(item: Product) => async (dispatch: AppDispatch) => {
		try {
			dispatch(cartProductAdded(item))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		}
	}

export const getCartList = () => (state: RootState) => {
	return state.cart.entities
}

export const getCartItemsCount = () => (state: RootState) => {
	return state.cart.entities.length
}

export const removeCartProduct = (id: number) => (dispatch: AppDispatch) => {
	dispatch(cartProductRemoved(id))
}

export const incrementCartProduct = (id: number) => (dispatch: AppDispatch) => {
	dispatch(cartIncrement(id))
}

export const decrementCartProduct = (id: number) => (dispatch: AppDispatch) => {
	dispatch(cartDecrement(id))
}

export const clearCart = () => (dispatch: AppDispatch) => {
	dispatch(cartCleared())
}

export default cartProductSlice.reducer
