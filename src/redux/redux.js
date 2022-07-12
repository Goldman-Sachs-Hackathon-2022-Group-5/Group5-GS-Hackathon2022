import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: undefined,
  filteredRestaurants: []
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.value = action.payload
    },
    setRestaurants: (state, action) => {
      state.filteredRestaurants = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLocation, setRestaurants } = locationSlice.actions

export default locationSlice.reducer