import React from "react";
import './Checkout.css';
import { useSelector } from 'react-redux'
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { OrderDetails } from "../../components/Checkout/OrderDetails";



//to include location, timeslot, payment button, order summary, subtotal, total, kerberos, restaurant
const Checkout = () => {
    const location = useSelector((state) => state.location.value)
    const cart = useSelector((state) => state.cart.itemsInCart)
    const timeslot = useSelector((state) => state.cart.timeslot)

    return (
        <body className="checkoutPage">
            <div className="checkoutCard">
                <div className="column">
                    <h2 className="checkoutTitle">
                        Order Summary
                    </h2>
                    <OrderSummary cart={cart}/>
                    <OrderDetails location={location} timeslot={timeslot} />

                </div>
            </div>
        </body>
    )
}

export default Checkout;