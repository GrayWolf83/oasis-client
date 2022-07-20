import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comment } from '../types/comment'
import commentService from '../services/comment.service'

type CommentState = {
	entities: Comment[]
	isLoading: boolean
}

const initialState: CommentState = {
	entities: [],
	isLoading: true,
}

const commentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		commentsLoaded(state, action: PayloadAction<Comment[]>) {
			state.entities = action.payload
		},
		commentsLoadingStart(state) {
			state.isLoading = true
		},
		commentAdded(state, action: PayloadAction<Comment>) {
			state.entities = [action.payload, ...state.entities]
		},
		commentDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		commentsLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	commentsLoaded,
	commentsLoadingStart,
	commentAdded,
	commentDeleted,
	commentsLoadingEnd,
} = commentSlice.actions

export const loadCommentsList =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(commentsLoadingStart())
		try {
			const payload = await commentService.getCommentsList(id)
			dispatch(commentsLoaded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(commentsLoadingEnd())
		}
	}

export const addComment =
	(data: { product: string; text: string }) =>
	async (dispatch: AppDispatch) => {
		dispatch(commentsLoadingStart())
		try {
			const payload = await commentService.addComment(data)
			dispatch(commentAdded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(commentsLoadingEnd())
		}
	}

export const deleteComment = (id: string) => async (dispatch: AppDispatch) => {
	dispatch(commentsLoadingStart())
	try {
		const payload = await commentService.deleteComment(id)
		dispatch(commentDeleted(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(commentsLoadingEnd())
	}
}

export const getCommentsList = () => (state: RootState) => {
	return state.comment.entities
}

export const getCommentsLoadingStatus = () => (state: RootState) => {
	return state.comment.isLoading
}

export default commentSlice.reducer
