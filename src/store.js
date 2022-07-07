import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './redux/redux'

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
})