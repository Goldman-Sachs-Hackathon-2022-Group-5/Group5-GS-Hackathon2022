import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInCart: [],
  timeslot: ''
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.itemsInCart.push(action.payload) //action.payload is the whole item
    },
    clearCart: (state) => {
        state.itemsInCart = []
    },
    deleteItem: (state, action) => {
        state.itemsInCart = state.itemsInCart.filter(elem => elem.food.id !== action.payload) // action.payload is the index of the item
    },
    setCart: (state, action) => {
      state.itemsInCart = action.payload
    },
    setTimeslot: (state, action) => {
      state.timeslot = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, deleteItem, setCart, setTimeslot } = cartSlice.actions

export default cartSlice.reducer