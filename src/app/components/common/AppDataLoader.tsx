import React from 'react'
import Loader from '../ui/Loader'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import useCategoriesLoader from '../../hooks/useCategoriesLoader'
import { getCategoriesLoadingStatus } from '../../store/category'
import useAutoLogin from '../../hooks/useAutoLogin'
import { getProductsLoadingStatus } from '../../store/product'

interface IAppLoaderProps {
	children: JSX.Element
}

const AppLoader = ({ children }: IAppLoaderProps) => {
	const isCategoryLoading = useAppSelector(getCategoriesLoadingStatus())
	const isProductLoading = useAppSelector(getProductsLoadingStatus())
	useAutoLogin()
	useCategoriesLoader()

	if (isCategoryLoading || isProductLoading) return <Loader />
	return children
}

export default AppLoader
