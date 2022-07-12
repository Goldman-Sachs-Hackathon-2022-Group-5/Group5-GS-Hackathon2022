import { Checkbox } from 'antd'
import React from 'react'
import { LOCATIONS_LIST } from '../../utils/const'
import { StyledButton } from '../reusable/Button'
import './styles.css'

export const OrderDetails = ({location, timeslot}) => {

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
            <StyledButton style={{marginTop: '2rem'}}>Submit Order</StyledButton>
        </div>
      )
}
