import { useAppDispatch, useAppSelector } from './useAppReduxHooks'
import { Children, useEffect } from 'react'
import {
	getCategoriesDataLoadedStatus,
	loadCategoriesList,
} from '../store/category'

const useCategoriesLoader = () => {
	const dispatch = useAppDispatch()
	const dataLoaded = useAppSelector(getCategoriesDataLoadedStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(loadCategoriesList())
		}
	}, [])

	return Children
}

export default useCategoriesLoader
