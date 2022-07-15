export default function getOrderStatusName(value: string) {
	switch (value) {
		case 'start':
			return 'Готовим'

		case 'delivery':
			return 'Доставка'

		case 'end':
			return 'Доставлено'
		default:
			break
	}
}
