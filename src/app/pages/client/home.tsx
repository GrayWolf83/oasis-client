import React from 'react'
import AppList from '../../components/common/AppList'
import MenuListItem from '../../components/common/MenuListItem'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCategoriesList } from '../../store/category'

const Home = () => {
	const categories = useAppSelector(getCategoriesList())

	console.log('categories', categories)

	return <AppList items={categories} component={MenuListItem} />
}

export default Home
