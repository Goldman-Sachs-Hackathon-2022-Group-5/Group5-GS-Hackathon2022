import React, {useState} from 'react'
import './CartDrawer.css'
import { Button } from 'antd'
import { addToCart } from '../../redux/cartredux';
import { useDispatch } from 'react-redux'

export const ItemCard = ({food, quantity}) => {
    const [count, setCount] = useState(quantity)
    const dispatch = useDispatch()

    const onAddToCart = (food, quantity) => {
        const item = {
            food: food,
            quantity: quantity
        }
        dispatch(addToCart(item))
    }

    const increment = () => {
        setCount(val => val + 1)
        onAddToCart(food, 1)
    }

    const decrement = () => {
        if (count <= 0) {
            setCount(val => val)
        } else {
            setCount(val => val - 1)
            onAddToCart(food, -1)
        }
    }

    return (
            <div className='itemcard'>
                <div className='body'>
                    <img src={food.url} className="image" alt=""/>
                    <div className="details">
                        <div className="text">
                            <h2 className="title">{food.name}</h2>
                        </div>
                        <div className="footer">
                            <div className="price">${food.price}.00</div>
                            <div className='cartrow'>
                                <Button style={{color: '#346EBE', fontWeight: 800}} onClick={decrement}>-</Button>
                                <h3 className='counter'> {count} </h3>
                                <Button style={{color: '#346EBE', fontWeight: 600}} onClick={increment}>+</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}