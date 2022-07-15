import { OrderData } from '../types/orderData'
import httpService from './http.service'

const endpoint = 'order/'

const orderService = {
	getOrdersList: async (method: string) => {
		const { data } = await httpService.get(endpoint + method)
		return data
	},
	sendOrder: async (payload: OrderData) => {
		const { data } = await httpService.post(endpoint, payload)
		return data
	},
	updateOrderStatus: async (id: string) => {
		const { data } = await httpService.patch(endpoint, { id })
		return data
	},
}

export default orderService
