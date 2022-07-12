import React from 'react'
import { useSelector } from 'react-redux';
import { OrderItemCard } from './OrderItem';
import './styles.css';

const OrderStatusSection = () => {
  const orders = useSelector((state) => state.order.ordersPlace)
return (
  <div className='column'>
      <h3 className="sectiontitle">Order again</h3>
      {orders.map(order => <OrderItemCard order={order}/> )}
    
  </div>
)
}

export default OrderStatusSection;