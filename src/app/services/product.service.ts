import httpService from './http.service'

const endpoint = 'product/'

const productService = {
	getProductsList: async (id: number) => {
		const { data } = await httpService.get(endpoint + id)
		return data
	},
}

export default productService
