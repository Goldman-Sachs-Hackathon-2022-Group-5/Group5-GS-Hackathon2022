import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './redux/redux'
import cartReducer from './redux/cartredux'
import orderReducer from './redux/orderRedux'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})