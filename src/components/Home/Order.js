import React from 'react'
import { useSelector } from 'react-redux';
import { OrderItemCard } from './OrderItem';
import './styles.css';

const OrderStatusSection = () => {
  const orders = useSelector((state) => state.order.ordersPlace)
  const ordersReversed = orders.slice().reverse()
return (
  <div className='column'>
      <h3 className="sectiontitle">Order again</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        // overflowX: 'scroll',
        width: '100%',
        // justifyContent: 'space-between'
      }}>
        {ordersReversed.map(order => <OrderItemCard order={order}/> )}
      </div>
    
  </div>
)
}

export default OrderStatusSection;