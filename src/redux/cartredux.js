import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInCart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        // if (state.itemsInCart.includes(action.payload.food)) {

        // }
      state.itemsInCart.push(action.payload) //action.payload is the whole item
    },
    clearCart: (state) => {
        state.itemsInCart = []
    },
    deleteItem: (state, action) => {
        state.itemsInCart.splice(action.payload, 1) // action.payload is the index of the item
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer