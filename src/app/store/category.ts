import { changeProductSelectedCategory } from './product'
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
		categoriesLoadingStart(state) {
			state.isLoading = true
		},
		categoryAdded(state, action: PayloadAction<Category>) {
			state.entities = [...state.entities, action.payload]
		},
		categoryDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		categoriesLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	categoriesLoaded,
	categoriesLoadingEnd,
	categoriesLoadingStart,
	categoryAdded,
	categoryDeleted,
} = categorySlice.actions

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

export const addCategory =
	(data: FormData) => async (dispatch: AppDispatch) => {
		dispatch(categoriesLoadingStart())
		try {
			const payload = await categoryService.addCategory(data)
			dispatch(categoryAdded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(categoriesLoadingEnd())
		}
	}

export const deleteCategory =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(categoriesLoadingStart())
		try {
			const payload = await categoryService.deleteCategory(data)
			dispatch(categoryDeleted(payload))
			dispatch(changeProductSelectedCategory(''))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(categoriesLoadingEnd())
		}
	}

export const getCategoriesList = () => (state: RootState) => {
	return state.categories.entities.filter(
		(item) => item.name !== 'Без категории',
	)
}

export const getAllCategoriesList = () => (state: RootState) => {
	return state.categories.entities
}

export const getCategoryById = (id: string) => (state: RootState) => {
	return state.categories.entities.find((item) => item.id === id)
}

export const getCategoriesDataLoadedStatus = () => (state: RootState) => {
	return state.categories.dataLoaded
}
export const getCategoriesLoadingStatus = () => (state: RootState) => {
	return state.categories.isLoading
}

export default categorySlice.reducer
