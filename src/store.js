import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './redux/redux'
import cartReducer from './redux/cartredux'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
  },
})