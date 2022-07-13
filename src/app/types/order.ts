import { Product } from './product'

export type Order = {
	id: string
	userId?: string
	products: { product: Product; count: number }[]
	phone: number
	address: string
	cost: number
	status: 'Приготовление' | 'Доставка' | 'Закрыт'
}
