import { Order } from '../types/order'
import httpService from './http.service'

const endpoint = 'order/'

const orderService = {
	getOrdersList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	sendOrder: async (payload: Order) => {
		const { data } = await httpService.post(endpoint, payload)
		return data
	},
}

export default orderService
