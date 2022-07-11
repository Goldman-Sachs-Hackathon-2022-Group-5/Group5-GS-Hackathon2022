import React, { useState } from 'react'
import { Drawer } from 'antd';
import { StyledButton } from '../reusable/Button';
import { useSelector, useDispatch } from 'react-redux'
import './CartDrawer.css'
import { ItemCard } from './CartItem';

const CartDrawer = ({ onClose, visible }) => {
    const [count, setCount] = useState(1)
    const cart = useSelector((state) => state.cart.itemsInCart)
    const dispatch = useDispatch()

    const reducer = (acc, item) => {
        if (acc.has(item.food.id)) {
            const a = structuredClone(item)
            a.quantity += acc.get(item.food.id).quantity
            acc.set(item.food.id, a)
        } else {
            acc.set(item.food.id, item)
        }
        return acc
    }
    const consolidatedCart = cart.reduce(reducer, new Map())
    const consolidatedCartArr = Array.from(consolidatedCart.values())


    const increment = () => {
        setCount(val => val + 1)
    }

    const decrement = () => {
        if (count <= 0) {
            setCount(val => val)
        } else {
            setCount(val => val - 1)
        }
    }

    return (
        <Drawer placement="right" onClose={onClose} visible={visible} width={'30%'} title={'My Cart'}>
            <div className='cartItems'>
                {
                    consolidatedCartArr.map((item) => {
                        return (
                            <ItemCard 
                                imageUrl={item.food.url}
                                name={item.food.name}
                                price={item.food.price}
                                quantity={item.quantity}
                                />
                        )
                    }
                    )
                }
            </div>

            {/* <div className='row'>
            <Button onClick={decrement}>-</Button>
            <h3 className='counter'> {count} </h3>
            <Button onClick={increment}>+</Button>
        </div> */}
            <div className='row'>
                <StyledButton width={'90%'} onClick={() => { console.log('Check out') }}>
                    Check Out
                </StyledButton>
            </div>
        </Drawer>
    )
}

export default CartDrawer