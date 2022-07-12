import React from 'react'
import { CheckoutItemCard } from "../../components/Checkout/CheckoutItem";


export const OrderSummary = ({ cart }) => {
    const cartArray = cart.map(item => <CheckoutItemCard
        key={item.food.id}
        food={item.food}
        quantity={item.quantity}
    />)

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
                    <h3 className='cardsubsubtitle'>
                        Subtotal
                    </h3>
                    <h3 className='cardsubsubtitle'>
                        Delivery Fee
                    </h3>
                </div>
            </div>
        </div>
    )
}
