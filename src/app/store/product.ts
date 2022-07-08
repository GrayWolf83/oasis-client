import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'
import productService from '../services/product.service'

type ProductState = {
	entities: Product[]
	isLoading: boolean
}

const initialState: ProductState = {
	entities: [],
	isLoading: true,
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productsLoaded(state, action: PayloadAction<Product[]>) {
			state.entities = action.payload
		},
		productLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const { productsLoaded, productLoadingEnd } = productSlice.actions

export const loadProductsList =
	(id: number) => async (dispatch: AppDispatch) => {
		try {
			const payload = await productService.getProductsList(id)
			dispatch(productsLoaded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(productLoadingEnd())
		}
	}

export const getProductsList = () => (state: RootState) => {
	return state.products.entities.filter((item) => item.isVisible)
}

export const getProductsLoadingStatus = () => (state: RootState) => {
	return state.products.isLoading
}

export default productSlice.reducer
