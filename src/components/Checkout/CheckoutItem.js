import React from 'react'
import './styles.css'

export const CheckoutItemCard = ({food, quantity}) => {
    return (
            <div className='itemcard'>
                <div className='body'>
                    <img src={food.url} className="image" alt=""/>
                    <div className="details">
                        <div className="itemtext">
                            <h2 className="title">{food.name}</h2>
                        </div>
                        <div className="footer">
                            <div className="price">${food.price}.00</div>
                            <div className='cartrow'>
                                <h3 className='counter'> Qty: {quantity} </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}