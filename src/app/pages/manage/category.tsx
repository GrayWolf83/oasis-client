import React from 'react'
import AppList from '../../components/common/AppList'
import LinkIcon from '../../components/common/LinkIcon'
import CategoryListItem from '../../components/common/manage/CategoryListItem'
import PageTitle from '../../components/ui/PageTitle'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCategoriesList } from '../../store/category'

const Category = () => {
	const categories = useAppSelector(getCategoriesList())

	return (
		<>
			<LinkIcon
				path='/manage'
				iconName='arrow_back'
				iconColor='var(--main-color)'
			/>
			<PageTitle title='Управление категориями' />
			<LinkIcon
				path='/manage/category/add'
				iconName='add_box'
				iconColor='var(--main-color)'
			/>
			<AppList items={categories}>
				<CategoryListItem item={categories[0]} />
			</AppList>
		</>
	)
}

export default Category
