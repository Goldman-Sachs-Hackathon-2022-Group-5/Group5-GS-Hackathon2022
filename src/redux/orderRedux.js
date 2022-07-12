import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ordersPlace: [
    {
      cart: [
        {
          "food": {
            "id": 5,
            "restaurant": "Guzman Y Gomez",
            "name": "Burrito Bowl",
            "price": 5,
            "status": true,
            "url": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20220208145712018881/detail/8e1cb4cd_BGWaRks0smfXxC2j.webp",
            "restaurant_id": 2
          },
          "quantity": 1
        },
        {
          "food": {
            "id": 101,
            "restaurant": "Guzman Y Gomez",
            "name": "Quesadilla",
            "price": 5,
            "status": true,
            "url": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20220706104421029744/detail/c34e6ecd_dj17JnF1YWxpdHl9.webp",
            "restaurant_id": 2
          },
          "quantity": 1
        }
      ],
      location: "MTA",
      timeslot: "8 July 2022, Dinner (6pm-7pm)",
      status: 'Delivered',
    },
    {
      cart: [
        {
          "food": {
            "id": 90,
            "restaurant": "McDonald's",
            "name": "2pc McCrispy® Spicy Meal",
            "price": 8,
            "status": true,
            "url": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20220629232033010388/detail/1fe3e2c6_OTPO_110029.webp",
            "restaurant_id": 1
          },
          "quantity": 1
        },
        {
          "food": {
            "id": 89,
            "restaurant": "McDonald's",
            "name": "Banana Pie",
            "price": 2,
            "status": true,
            "url": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20220601212434024686/detail/a4722eb9_OTPO_505734.webp",
            "restaurant_id": 1
          },
          "quantity": 1
        }
      ],
      location: "MTA",
      timeslot: "13 July 2022, Lunch (11am-12pm)",
      status: 'Preparing your order',
    }
  ],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.ordersPlace.push(action.payload) //action.payload is the whole item
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToOrder } = orderSlice.actions

export default orderSlice.reducer