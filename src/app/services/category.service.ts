import httpService from './http.service'

const endpoint = 'category/'

const categoryService = {
	getCategoriesList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	addCategory: async (payload: any) => {
		const { data } = await httpService.post(endpoint, payload, {
			headers: {
				'Content-type': 'multipart/form-data',
			},
		})
		return data
	},
	deleteCategory: async (id: string) => {
		const { data } = await httpService.delete(endpoint + id)
		return data
	},
}

export default categoryService
