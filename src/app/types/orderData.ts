export type OrderData = {
	user: string | null
	orderProducts: { ProductId: string; count: number }[]
	name: string
	phone: string
	address: string
	price: number
}
