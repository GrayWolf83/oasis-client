import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppLoader from './components/common/AppDataLoader'
import Pages from './pages'

function App() {
	return (
		<>
			<AppLoader>
				<Pages />
			</AppLoader>
			<ToastContainer />
		</>
	)
}

export default App
