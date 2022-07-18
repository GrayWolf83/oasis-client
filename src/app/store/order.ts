import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import orderService from '../services/order.service'
import { OrderData } from '../types/orderData'
import { Order } from '../types/order'

type OrderState = {
	activeOrders: Order[]
	archiveOrders: Order[]
	isLoading: boolean
}

const initialState: OrderState = {
	activeOrders: [],
	archiveOrders: [],
	isLoading: false,
}

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		activeOrdersLoaded(state, action: PayloadAction<Order[]>) {
			state.activeOrders = action.payload
		},
		archiveOrdersLoaded(state, action: PayloadAction<Order[]>) {
			state.archiveOrders = action.payload
		},
		activeOrderAdded(state, action: PayloadAction<Order>) {
			state.activeOrders = [...state.activeOrders, action.payload]
		},
		orderStatusChanged(state, action: PayloadAction<Order>) {
			if (action.payload.status === 'end') {
				state.activeOrders = state.activeOrders.filter(
					(item) => item.id !== action.payload.id,
				)
				state.archiveOrders = [...state.archiveOrders, action.payload]
			} else {
				state.activeOrders = state.activeOrders.map((item) => {
					if (item.id === action.payload.id) {
						return action.payload
					}
					return item
				})
			}
		},
		ordersLoadingStart(state) {
			state.isLoading = true
		},
		ordersLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	activeOrdersLoaded,
	archiveOrdersLoaded,
	activeOrderAdded,
	ordersLoadingStart,
	ordersLoadingEnd,
	orderStatusChanged,
} = orderSlice.actions

export const loadActiveOrdersList =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(ordersLoadingStart())
		try {
			const payload: Order[] = await orderService.getOrdersList(
				getState().user.user?.role === 'manage'
					? 'manageActiveOrders'
					: 'clientActiveOrders',
			)
			dispatch(activeOrdersLoaded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(ordersLoadingEnd())
		}
	}

export const loadArchiveOrdersList =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(ordersLoadingStart())
		try {
			const payload: Order[] = await orderService.getOrdersList(
				getState().user.user?.role === 'manage'
					? 'manageArchiveOrders'
					: 'clientArchiveOrders',
			)
			dispatch(archiveOrdersLoaded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(ordersLoadingEnd())
		}
	}

export const updateOrderStatus =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(ordersLoadingStart())
		try {
			const payload = await orderService.updateOrderStatus(id)
			dispatch(orderStatusChanged(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(ordersLoadingEnd())
		}
	}

export const sendOrder = (data: OrderData) => async (dispatch: AppDispatch) => {
	dispatch(ordersLoadingStart())
	try {
		const payload: Order = await orderService.sendOrder(data)
		dispatch(activeOrderAdded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(ordersLoadingEnd())
	}
}

export const getActiveOrdersList = () => (state: RootState) => {
	return state.order.activeOrders
}

export const getArchiveOrdersList = () => (state: RootState) => {
	return state.order.archiveOrders
}

export const getOrdersLoadingStatus = () => (state: RootState) => {
	return state.order.isLoading
}

export default orderSlice.reducer
