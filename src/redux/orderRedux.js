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
            timeslot: "Today, 13 July 2022, Dinner (6pm-7pm)",
            status: 'Delivered',
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