import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './auth'
import Login from './auth/login'
import SignUp from './auth/signUp'
import Client from './client'
import Cart from './client/cart'
import Home from './client/home'
import Products from './client/products'
import Manage from './manage'
import Category from './manage/category'
import Order from './manage/order'
import Product from './manage/product'

const Pages = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Auth />}>
				<Route index element={<Login />} />
				<Route path='signup' element={<SignUp />} />
			</Route>
			<Route path='/manage' element={<Manage />}>
				<Route index element={<Category />} />
				<Route path='product' element={<Product />} />
				<Route path='order' element={<Order />} />
			</Route>
			<Route path='/' element={<Client />}>
				<Route index element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='products/:id' element={<Products />} />
			</Route>
		</Routes>
	)
}

export default Pages
