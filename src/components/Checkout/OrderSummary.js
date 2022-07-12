import { Divider, Tooltip } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons'
import React from 'react'
import { CheckoutItemCard } from "../../components/Checkout/CheckoutItem";
import './styles.css'
import { StyledButton } from '../reusable/Button';



export const OrderSummary = ({ cart }) => {
    const cartArray = cart.map(item => <CheckoutItemCard
        key={item.food.id}
        food={item.food}
        quantity={item.quantity}
    />)

    let total = 0;
    cart.forEach((item) => total += item.food.price * item.quantity)


    console.log(cart)

    return (
        <div className='summarycard'>
            <div className='summaryrow'>
                {
                    cart !== undefined && cartArray.length !== 0 &&
                    <div className='ordersummarybody'>
                        <h3 className='cardsubsubtitle'>
                            You are ordering from
                        </h3>
                        <h2 className='cardtitle'>
                            {cart[0].food.restaurant}
                        </h2>
                        {cartArray}
                    </div>
                }
                <div className='payment'>
                    <h3 className='cardsubtitle2'>
                        Order Total
                    </h3>
                    <div className='pricerow' >
                        <h3 className='cardsubsubtitle2'>
                            Subtotal
                        </h3>
                        <h3 className='subtotalprice'>
                            ${total.toFixed(2)}
                        </h3>
                    </div>
                    <div className='pricerow' >
                        <h3 className='cardsubsubtitle2'>
                            Delivery Fee
                            <Tooltip
                                style={{ width: '5rem', fontSize: '10px' }}
                                title="Delivery fee will be split between the number of people who ordered from the same restaurant for the same timeslot">
                                <InfoCircleTwoTone style={{ marginLeft: '0.3rem' }} />
                            </Tooltip>
                        </h3>
                        <h3 className='subtotalprice'>
                            ${(4.9).toFixed(2)}
                        </h3>
                    </div>

                    <Divider style={{ borderWidth: '1px', borderColor: '#555555', marginTop: '1rem', marginBottom: '1rem' }} />
                    <div className='pricerow' >
                        <h3 className='cardsubtitle2'>
                            Total
                        </h3>
                        <h3 className='totalprice'>
                            ${(total + 4.9).toFixed(2)}*
                        </h3>

                    </div>
                    <p style={{fontFamily: 'Poppins-Medium', fontSize: '13px'}}>
                        *Price does not reflect final price, subject to changes in delivery fee at cut-off time.
                    </p>

                    <StyledButton width={'100%'}>Link Credit Card</StyledButton>
                </div>
            </div>
        </div>
    )
}
