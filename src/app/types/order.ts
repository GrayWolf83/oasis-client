import { Product } from './product'

export type Order = {
	id: number
	userId?: number
	products: { product: Product; count: number }[]
	phone: number
	address: string
	cost: number
	status: 'Приготовление' | 'Доставка' | 'Закрыт'
}
