import React from "react";
import { Card } from 'antd';
import './Checkout.css';
import { Container } from "../../components/reusable/Styles";
import { StyledButton } from "../../components/reusable/Button";

//to include location, timeslot, payment button, order summary, subtotal, total, kerberos, restaurant
const Checkout = () => {
    let TEMP_LIST = [
        {
            name: "2pc McCrispy Spicy Meal",
            quantity: "2",
            price: "5",
            url: "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20220629232033010388/detail/1fe3e2c6_OTPO_110029.webp"
        },
        {
            name: "Ovaltine McFlurry",
            quantity: "1",
            price: "5",
            url: "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20220601212434019727/detail/5d76d570_OTPO_504121.webp"
        }
    ]

    const cartArray = TEMP_LIST.map(c => (
        <Card type='inner' title={c.name} style={{textAlign: 'center'}} className='customCard'>
            <img src={c.url} height='300vh' width='300vh' alt=''/> <br></br>
            <b>Quantity</b>: {c.quantity} <br></br>
            <b>Price</b>: ${c.price * c.quantity}
        </Card>
    ));

    return (
        <body className="checkoutPage">
            <Container width='70%' align='flex-start'>
                <div className="column">
                    <Card style={{ width: '100%', height: '100%', boxShadow: "0 2px 20px #e1e5ee", borderRadius:"0.5rem"}} title="Cart Items">
                        {cartArray}
                    </Card>
                        <StyledButton className='styleBtn' onClick={() => { console.log("food ordered") }}>
                            Order Food
                        </StyledButton>
                </div>
            </Container>
        </body>
    )
}

export default Checkout;