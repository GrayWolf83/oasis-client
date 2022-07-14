export type Order = {
	id?: string
	orderProducts: { ProductId: string; count: number }[]
	name: string
	phone: string
	address: string
	price: number
}
