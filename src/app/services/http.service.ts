import axios from 'axios'
import localStorageService from './localStorage.service'
import userService from './user.service'
import config from '../../config.json'

const http = axios.create({
	baseURL: config.API_ENDPOINT,
})

http.interceptors.request.use(
	async function (config) {
		const expiresDate = localStorageService.getTokenExpiresDate()
		const refreshToken = localStorageService.getRefreshToken()
		if (expiresDate) {
			if (refreshToken && Number(expiresDate) < Date.now()) {
				const data = await userService.refresh()
				if (data?.message === 'Unautorized') {
					localStorageService.removeAuthData()
				} else {
					localStorageService.setTokens(data)
				}
			}
		}
		const accessToken = localStorageService.getAccessToken()
		if (accessToken) {
			config.headers = {
				...config.headers,
				Authorization: 'Bearer ' + accessToken,
			}
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)

const httpService = {
	get: http.get,
	post: http.post,
}

export default httpService
