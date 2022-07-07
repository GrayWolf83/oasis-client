import httpService from './http.service'

const endpoint = 'category/'

const categoryService = {
	getCategoriesList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
}

export default categoryService
