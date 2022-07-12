import { Product } from './product'

export interface CartProduct extends Product {
	count: number
}
