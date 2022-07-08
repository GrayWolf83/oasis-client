import React from 'react'
import AppList from '../../components/common/AppList'
import MenuListItem from '../../components/common/HomeListItem'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCategoriesList } from '../../store/category'

const Home = () => {
	const categories = useAppSelector(getCategoriesList())

	return (
		<AppList items={categories}>
			<MenuListItem item={categories[0]} />
		</AppList>
	)
}

export default Home
