import React from 'react'
import './styles.css';

export const OrderItemCard = ({order}) => {
  let totalPrice = 0;
  order.cart.forEach((item) => totalPrice += item.food.price * item.quantity)

  const location = order.location;
  const restaurantName = order.cart[0].food.restaurant
  const timeSlot = order.timeslot;
  const status = order.status;
  
  return (
    <div className='orderItemCard'>
        {totalPrice}
        {restaurantName}
        {location}
        {timeSlot}
        {status}
    </div>
  )
}
