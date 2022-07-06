import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import AppContainer from '../components/ui/AppContainer'

const MainLayout = () => {
	return (
		<>
			<Header />
			<AppContainer>
				<Outlet />
			</AppContainer>

			<Footer />
		</>
	)
}

export default MainLayout
