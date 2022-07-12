import React from 'react'
import './styles.css';
import { STATUS_STYLES_MAP } from '../../utils/const';
import { get } from 'lodash';

export const OrderItemCard = ({order}) => {
  let totalPrice = 0;
  order.cart.forEach((item) => totalPrice += item.food.price * item.quantity)

  const location = order.location;
  const restaurantName = order.cart[0].food.restaurant
  const timeSlot = order.timeslot;
  const status = order.status;
  const delFee = Math.random() * 5

  return (
    <div className='orderItemCard'>
      <div className='orderItemCardRow'>
        <img src={order.cart[0].food.url} 
              alt=''
              style={{
                marginRight: '1rem',
                width: '6.5rem',
                height: '6.5rem',
                borderRadius: '4rem'}}/>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
          
          <h3 style={{
            fontFamily: 'Poppins-Medium',
            fontSize: '18px',
            color: get(STATUS_STYLES_MAP[status], 'color'),
            marginBottom: 0
          }}>
            {get(STATUS_STYLES_MAP[status], 'icon')}
            {' '}
            {status}
          </h3>
        
          <h2 style={{
            marginBottom: 0
          }}>
            {restaurantName}
          </h2>
          
          <h3 style={{
            fontFamily: 'Poppins-Medium',
            fontSize: '15px',
            color: '#808080',
            marginBottom: 0
        }}>
            {location} • {timeSlot}
          </h3>
          <h2 style={{
            marginBottom: 0
          }}>
            ${(totalPrice + delFee).toFixed(2)}
          </h2>
        </div>
      </div>    
    </div>
  )
}
