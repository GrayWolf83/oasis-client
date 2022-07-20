export type Comment = {
	id: string
	UserId: string
	product: string
	text: string
	createdAt: string
	updatedAt: string
	User: {
		id: string
		name: string
	}
}
