import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'
import productService from '../services/product.service'

type ProductState = {
	entities: Product[]
	isLoading: boolean
	selectedCategory: string
}

const initialState: ProductState = {
	entities: [],
	isLoading: false,
	selectedCategory: '',
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productsLoaded(state, action: PayloadAction<Product[]>) {
			state.entities = action.payload
		},
		productAdded(state, action: PayloadAction<Product>) {
			state.entities = [...state.entities, action.payload]
		},
		productCategorySelected(state, action: PayloadAction<string>) {
			state.selectedCategory = action.payload
		},
		productVisibleChanged(state, action: PayloadAction<Product>) {
			state.entities = [
				...state.entities.filter(
					(item) => item.id !== action.payload.id,
				),
				action.payload,
			]
		},
		productEdited(state, action: PayloadAction<Product>) {
			state.entities = [
				...state.entities.filter(
					(item) => item.id !== action.payload.id,
				),
				action.payload,
			]
		},
		productDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		productLoadingStart(state) {
			state.isLoading = true
		},
		productLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	productsLoaded,
	productAdded,
	productLoadingEnd,
	productLoadingStart,
	productVisibleChanged,
	productCategorySelected,
	productDeleted,
	productEdited,
} = productSlice.actions

export const loadProductsList =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(productLoadingStart())
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

export const addProduct = (data: FormData) => async (dispatch: AppDispatch) => {
	dispatch(productLoadingStart())
	try {
		const payload = await productService.addProduct(data)
		dispatch(productAdded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(productLoadingEnd())
	}
}

export const changeVisibleProduct =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(productLoadingStart())
		try {
			const payload = await productService.editVisibleProduct(id)
			dispatch(productVisibleChanged(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(productLoadingEnd())
		}
	}

export const editProduct =
	(data: { id: string; data: FormData }) => async (dispatch: AppDispatch) => {
		dispatch(productLoadingStart())
		try {
			const payload = await productService.editProduct(data)
			dispatch(productEdited(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(productLoadingEnd())
		}
	}

export const deleteProduct = (id: string) => async (dispatch: AppDispatch) => {
	dispatch(productLoadingStart())
	try {
		const payload = await productService.deleteProduct(id)
		dispatch(productDeleted(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(productLoadingEnd())
	}
}

export const changeProductSelectedCategory =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(productCategorySelected(id))
	}

export const getProductsList = () => (state: RootState) => {
	return state.products.entities.filter((item) => item.isVisible)
}

export const getProductsManageList = () => (state: RootState) => {
	return state.products.entities
}

export const getProductById = (id: string) => (state: RootState) => {
	return state.products.entities.find((item) => item.id === id)
}

export const getProductsSelectedCategory = () => (state: RootState) => {
	return state.products.selectedCategory
}

export const getProductsLoadingStatus = () => (state: RootState) => {
	return state.products.isLoading
}

export default productSlice.reducer
