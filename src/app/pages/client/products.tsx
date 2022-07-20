import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppList from '../../components/common/AppList'
import LinkIcon from '../../components/common/LinkIcon'
import ProductListItem from '../../components/common/ProductsListItem'
import Loader from '../../components/ui/Loader'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCategoryById } from '../../store/category'
import {
	getProductsList,
	getProductsLoadingStatus,
	loadProductsList,
} from '../../store/product'
import { Category } from '../../types/category'
import { Product } from '../../types/product'

const Products = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const category: Category | undefined = useAppSelector(
		getCategoryById(id ? id : ''),
	)
	const isProductLoading = useAppSelector(getProductsLoadingStatus())

	if (!category) navigate('/')

	useEffect(() => {
		dispatch(loadProductsList(id ? id : ''))
	}, [id, dispatch])

	const products: Product[] = useAppSelector(getProductsList())

	if (isProductLoading) return <Loader />

	return (
		<>
			<LinkIcon path='/' iconName='home' iconColor='var(--main-color)' />
			{category?.name && <PageTitle title={category.name} />}
			<AppList items={products}>
				<ProductListItem item={products[0]} />
			</AppList>
		</>
	)
}

export default Products
