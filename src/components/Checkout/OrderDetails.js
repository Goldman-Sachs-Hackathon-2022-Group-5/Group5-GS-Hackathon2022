import { Checkbox, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LOCATIONS_LIST } from '../../utils/const'
import { StyledButton } from '../reusable/Button'
import { addToOrder  } from '../../redux/orderRedux'
import { Link } from 'react-router-dom'
import { clearCart } from '../../redux/cartredux'
import './styles.css'

export const OrderDetails = ({cart, location, timeslot}) => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    const order = {
      cart: cart,
      location: location,
      timeslot: timeslot,
      status: 'Order Submitted'
    }
    dispatch(addToOrder(order))
    dispatch(clearCart())
    message.success("Order submitted successfully!")
  } 
  return (
        <div className='summarycard'>
            <div className='deliverydetails'>
              <h1 className='cardtitle'>Delivery Details</h1>
              <h3 className='cardsubsubtitle'>Customer Name: </h3>
              <h2 className='cardsubtitle'>Josephine Hemingway</h2>
              <h3 className='cardsubsubtitle'>Delivering to: </h3>
              <h2 className='cardsubtitle'>{LOCATIONS_LIST[location].name}</h2>
              <h3 className='cardsubsubtitle'>Timeslot selected: </h3>
              <h2 className='cardsubtitle'>{timeslot}</h2>
              <h3 className='cardsubsubtitle'>Mark for reimbursement: </h3>
              <Checkbox style={{fontFamily: 'Poppins-Medium', fontSize: '16px'}} >
                Send me reminder emails for reimbursement
              </Checkbox>
            </div>
            <Link to='/'>
            <StyledButton onClick={onSubmit} style={{marginTop: '2rem'}}>Submit Order</StyledButton>
            </Link>
        </div>
      )
}
