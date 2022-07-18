import httpService from './http.service'

const endpoint = 'product/'

const productService = {
	getProductsList: async (id: string) => {
		const { data } = await httpService.get(endpoint + id)
		return data
	},
	addProduct: async (payload: FormData) => {
		const { data } = await httpService.post(endpoint, payload, {
			headers: {
				'Content-type': 'multipart/form-data',
			},
		})
		return data
	},
	editVisibleProduct: async (id: string) => {
		const { data } = await httpService.patch(
			endpoint + 'changeVisible/' + id,
		)
		return data
	},
	editProduct: async (payload: { id: string; data: FormData }) => {
		const { data } = await httpService.patch(
			endpoint + payload.id,
			payload.data,
		)
		return data
	},
	deleteProduct: async (id: string) => {
		const { data } = await httpService.delete(endpoint + id)
		return data
	},
}

export default productService
