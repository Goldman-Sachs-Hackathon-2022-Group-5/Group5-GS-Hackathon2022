import React, { useState } from 'react'
import { Button, Drawer } from 'antd';
import { StyledButton } from '../reusable/Button';
import './Drawer.css'

const CartDrawer = ({onClose, visible}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(val => val+1)
    }

    const decrement = () => {
        if (count <= 0){
            setCount(val => val)
        } else {
            setCount(val => val - 1)
        }
    }

  return (
    <Drawer placement="right" onClose={onClose} visible={visible} width={'30%'}>
        <p>Item image</p>
        <p>Item title</p>
        <p>Item price</p>
        <div className='row'>
            <Button onClick={decrement}>-</Button>
            <h3 className='counter'> {count} </h3>
            <Button onClick={increment}>+</Button>
        </div>
        <div className='row'>
            <StyledButton width={'90%'} onClick={()=>{console.log('Check out')}}>
                Check Out
            </StyledButton>
        </div>
    </Drawer>
  )
}

export default CartDrawer