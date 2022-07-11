import React, {useEffect, useState} from 'react'
import { Button, Drawer, message } from 'antd';
import { StyledButton } from '../reusable/Button';
import { useDispatch } from 'react-redux'
import './Drawer.css'
import { addToCart } from '../../redux/cartredux';

const AddToCartDrawer = ({onClose, visible, food}) => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    // Flush the state to the original state as setting Drawer visibility to false does not do so.
    useEffect(() => {
        setCount(1);
    }, [onClose])

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

    const onAddToCart = (food, quantity) => {
        const item = {
            food: food,
            quantity: quantity
        }
        dispatch(addToCart(item))
    }

    //   const error = () => {
    //     message.error('This is an error message');
    //   };
      

    const onClick = () => {
        message.success('Added to cart!');
        onClose()
        if (count !== 0) {
            onAddToCart(food, count)
        }
    }

  return (
    <Drawer placement="right" onClose={onClose} visible={visible} width={'30%'} title={'Add Item'}>
        <div className='cartitem'>
            <img className="cartimg" src={food.url} alt=''/>
            <div className='cartdetails'>
                <p className='carttitle'>{food.name}</p>
                <p className='cartprice'>${food.price}.00</p>
            </div>
        </div>
        
        <div className='row'>
            <Button onClick={decrement}>-</Button>
            <h3 className='counter'> {count} </h3>
            <Button onClick={increment}>+</Button>
        </div>
        <div className='row'>
            <StyledButton width={'90%'} onClick={onClick}>
                Add to Cart
            </StyledButton>
        </div>
    </Drawer>
  )
}

export default AddToCartDrawer