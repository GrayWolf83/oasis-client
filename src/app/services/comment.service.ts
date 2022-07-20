import httpService from './http.service'

const endpoint = 'comment/'

const commentService = {
	getCommentsList: async (id: string) => {
		const { data } = await httpService.get(endpoint + id)
		return data
	},
	addComment: async (payload: { product: string; text: string }) => {
		const { data } = await httpService.post(endpoint, payload)
		return data
	},
	deleteComment: async (id: string) => {
		const { data } = await httpService.delete(endpoint + id)
		return data
	},
}

export default commentService
