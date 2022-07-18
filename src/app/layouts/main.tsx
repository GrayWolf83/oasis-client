import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import AppContainer from '../components/ui/AppContainer'
import AppScrollContainer from '../components/ui/AppScrollContainer'

const MainLayout = () => {
	return (
		<>
			<Header />
			<AppContainer>
				<AppScrollContainer>
					<Outlet />
				</AppScrollContainer>
			</AppContainer>

			<Footer />
		</>
	)
}

export default MainLayout
