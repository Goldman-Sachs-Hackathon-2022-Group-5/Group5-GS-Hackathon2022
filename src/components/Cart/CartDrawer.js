import React, { useState } from 'react'
import { Drawer, Radio, Space, Alert } from 'antd';
import { StyledButton } from '../reusable/Button';
import { useSelector, useDispatch } from 'react-redux'
import './CartDrawer.css'
import { ItemCard } from './CartItem';
import { StyledSelect } from '../reusable/Styles';
import { LOCATIONS_LIST } from '../../utils/const';
import { setLocation } from '../../redux/redux';
import { Link } from 'react-router-dom';
import { setCart, setTimeslot } from '../../redux/cartredux';
// import { getRestaurantById } from '../../database/api';

const { Option } = StyledSelect;

const CartDrawer = ({ onClose, visible }) => {
    const cart = useSelector((state) => state.cart.itemsInCart)
    const location = useSelector((state) => state.location.value)
    const timeslot = useSelector((state) => state.cart.timeslot)
    const dispatch = useDispatch()

    // const [restaurant, setRestaurant] = useState()
    const curLoc = location !== undefined ? location : undefined
    const curTimeslot = timeslot !== undefined ? timeslot : undefined

    const [delTime, setDelTime] = useState(curTimeslot);
    let total = 0;

    const getCart = () => {
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

        return consolidatedCartArr
    }

    const cartArr = getCart();
    cartArr.forEach((item) => total += item.food.price * item.quantity)
    
    
    // const res_id = cartArr.length !== 0 ? cartArr[0].food.restaurant_id : 0

    // useEffect(() => {
    //     if (res_id === '') return 
    //     getRestaurantById(res_id).then(value => {
    //         setRestaurant(value)
    //         console.log(value)
    //       }).catch( error => {
    //         console.log(error);
    //       });
        
    // }, [res_id])

    // const res_office = restaurant !== undefined ? restaurant[0].office : ''
    // console.log(res_office)

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setDelTime(e.target.value);
    };

    const onCheckOut = () => {
        onClose()
        const finalCart = getCart()
        dispatch(setCart(finalCart))
        dispatch(setTimeslot(delTime))
    }

    return (
        <Drawer placement="right" onClose={onClose} visible={visible} width={'30%'} title={'My Cart'}>
            {
                cartArr.length !== 0 ? (
                    <>
                        <div className='cartItems'>
                            <div className='restaurantname'>
                                {cartArr[0].food.restaurant}
                            </div>
                            {
                                cartArr.map((item) => {
                                    return (
                                        <ItemCard
                                            key={item.food.id}
                                            food={item.food}
                                            quantity={item.quantity}
                                        />
                                    )
                                }
                                )
                            }
                        </div>

                        <div className='cartItems'>
                            <div className='section'>
                                Delivery Timeslot
                            </div>
                            <div className='options'>
                                <Radio.Group onChange={onChange} value={delTime}>
                                    <Space direction='vertical'>
                                        <Radio value={'tdylunch'}>Today, Lunch (11am-12pm)</Radio>
                                        <Radio value={'tdydinner'}>Today, Dinner (6pm-7pm)</Radio>
                                        <Radio value={'tmrlunch'}>Tomorrow, Lunch (11am-12pm)</Radio>
                                        <Radio value={'tmrdinner'}>Tomorrow, Dinner (6pm-7pm)</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                        </div>

                        <div className='cartItems'>
                            <div className='section'>
                                Delivery Location
                            </div>
                            <StyledSelect
                                size='large'
                                placeholder="Select your location"
                                onChange={(value) => {dispatch(setLocation(value))}}
                                width={'90%'}
                                value={curLoc}
                                // disabled={location === undefined ? false : true}
                            >
                                <Option 
                                    disabled={'MTA' !== LOCATIONS_LIST.MTA.code}
                                    value={LOCATIONS_LIST.MTA.code}>
                                        {LOCATIONS_LIST.MTA.name}
                                </Option>
                                <Option 
                                    disabled={'RFL' !== LOCATIONS_LIST.RFL.code}
                                    value={LOCATIONS_LIST.RFL.code}>{
                                    LOCATIONS_LIST.RFL.name}
                                </Option>
                            </StyledSelect>
                        </div>

                        <div className='cartItems'>
                            <div className='cartrow'>
                                <div className='section'>
                                    Total
                                </div>
                                <div className='totalprice'>
                                    ${total.toFixed(2)}
                                </div>
                            </div>
                        </div>
                        {   (delTime === undefined || location === undefined) &&
                            <div className='row'>
                                <Alert
                                    description="Please input both delivery location and timeslot."
                                    type="warning"
                                    showIcon
                                    style={{width: '90%', fontFamily: 'Poppins-Medium'}}
                                    />
                            </div>
                        }
                        
                        <div className='row'>
                            <StyledButton width={'90%'} onClick={onCheckOut} disabled={delTime === undefined || location === undefined}>
                                <Link to='/checkout'>
                                Check Out
                                </Link>
                            </StyledButton>
                        </div>
                    </>
                ) :
                <div className='cartItems'>
                    <h1 className='note'>There is nothing in your cart right now</h1>
                    <h1 className='note'>Start shopping!</h1>
                </div>
            }
        </Drawer>
    )
}

export default CartDrawer