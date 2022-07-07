import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../types/category'
import categoryService from '../services/category.service'

type CategoryState = {
	entities: Category[]
	isLoading: boolean
	dataLoaded: boolean
}

const initialState: CategoryState = {
	entities: [],
	isLoading: true,
	dataLoaded: false,
}

const categorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		categoriesLoaded(state, action: PayloadAction<Category[]>) {
			state.entities = action.payload
			state.dataLoaded = true
		},

		categoriesLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const { categoriesLoaded, categoriesLoadingEnd } = categorySlice.actions

export const loadCategoriesList = () => async (dispatch: AppDispatch) => {
	try {
		const payload = await categoryService.getCategoriesList()
		dispatch(categoriesLoaded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(categoriesLoadingEnd())
	}
}

export const getCategoriesList = () => (state: RootState) => {
	return state.categories.entities
}

export const getCategoryById = (id: number) => (state: RootState) => {
	return state.categories.entities.find((item) => item.id === id)
}

export const getCategoriesDataLoadedStatus = () => (state: RootState) => {
	return state.categories.dataLoaded
}
export const getCategoriesLoadingStatus = () => (state: RootState) => {
	return state.categories.isLoading
}

export default categorySlice.reducer
