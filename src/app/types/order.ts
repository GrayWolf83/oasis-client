export type Order = {
	id: string
	user: string
	name: string
	phone: string
	address: string
	price: number
	status: string
	createdAt: string
	updatedAt: string
	OrderProducts: {
		id: string
		count: number
		Product: {
			name: string
			description: string
			price: number
			image: string
			imageWebp: string
		}
	}[]
}
