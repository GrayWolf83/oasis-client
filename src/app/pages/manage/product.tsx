import React, { useEffect } from 'react'
import styled from 'styled-components'
import AppList from '../../components/common/AppList'
import SelectField from '../../components/common/form/SelectField'
import LinkIcon from '../../components/common/LinkIcon'
import ManageProductsListItem from '../../components/common/manage/ProductsListItem'
import PageTitle from '../../components/ui/PageTitle'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getAllCategoriesList } from '../../store/category'
import {
	changeProductSelectedCategory,
	getProductsManageList,
	getProductsSelectedCategory,
	loadProductsList,
} from '../../store/product'

const FilterBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`
const SelectBlock = styled.div`
	width: 50%;

	@media (max-width: 768px) {
		width: 70%;
	}

	@media (max-width: 580px) {
		width: 90%;
	}
`
const AppListBlock = styled.div`
	margin-top: -40px;
`

const Product = () => {
	const selectedCategory = useAppSelector(getProductsSelectedCategory())
	const dispatch = useAppDispatch()
	const categories = useAppSelector(getAllCategoriesList())
	const products = useAppSelector(getProductsManageList())

	useEffect(() => {
		dispatch(
			loadProductsList(
				selectedCategory ? selectedCategory : categories[0].id,
			),
		)
	}, [selectedCategory, dispatch, categories])

	return (
		<>
			<LinkIcon
				path='/manage'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Управление списком блюд' />

			<FilterBlock>
				<LinkIcon
					path='/manage/product/add'
					iconName='add_box'
					iconColor='var(--main-color)'
				/>
				<SelectBlock>
					<SelectField
						label=''
						// defaultLabel='Без категории'
						items={categories}
						name='cat'
						value={selectedCategory}
						error={null}
						onChange={(value) =>
							dispatch(changeProductSelectedCategory(value.cat))
						}
					/>
				</SelectBlock>
			</FilterBlock>
			<AppListBlock>
				{products.length ? (
					<AppList items={products}>
						<ManageProductsListItem item={products[0]} />
					</AppList>
				) : (
					<p>В эту категорию блюд еще не добавлено</p>
				)}
			</AppListBlock>
		</>
	)
}

export default Product
