import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedManage from '../components/common/ProtectedManage'
import Auth from './auth'
import Login from './auth/login'
import SignUp from './auth/signUp'
import Client from './client'
import Cart from './client/cart'
import Home from './client/home'
import ClientOrder from './client/order'
import Products from './client/products'
import Manage from './manage'
import AddCategory from './manage/addCategory'
import Category from './manage/category'
import ManageMenu from './manage/menu'
import ManageOrder from './manage/order'
import Product from './manage/product'

const Pages = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Auth />}>
				<Route index element={<Login />} />
				<Route path='signup' element={<SignUp />} />
			</Route>

			<Route
				path='/manage'
				element={
					<ProtectedManage>
						<Manage />
					</ProtectedManage>
				}>
				<Route index element={<ManageMenu />} />
				<Route path='category' element={<Category />} />
				<Route path='category/add' element={<AddCategory />} />
				<Route path='product' element={<Product />} />
				<Route path='order' element={<ManageOrder />} />
			</Route>
			<Route path='/' element={<Client />}>
				<Route index element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='order' element={<ClientOrder />} />
				<Route path='products/:id' element={<Products />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	)
}

export default Pages
