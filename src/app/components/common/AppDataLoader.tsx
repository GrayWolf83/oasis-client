import React from 'react'
import Loader from '../ui/Loader'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import useCategoriesLoader from '../../hooks/useCategoriesLoader'
import { getCategoriesLoadingStatus } from '../../store/category'

interface IAppLoaderProps {
	children: JSX.Element
}

const AppLoader = ({ children }: IAppLoaderProps) => {
	const isCategoryLoading = useAppSelector(getCategoriesLoadingStatus())
	useCategoriesLoader()

	if (isCategoryLoading) return <Loader />
	return children
}

export default AppLoader
