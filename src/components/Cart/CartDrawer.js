import React, { useState } from 'react'
import { Drawer, Radio, Space } from 'antd';
import { StyledButton } from '../reusable/Button';
import { useSelector, useDispatch } from 'react-redux'
import './CartDrawer.css'
import { ItemCard } from './CartItem';
import { StyledSelect } from '../reusable/Styles';
import { LOCATIONS_LIST } from '../../utils/const';
import { setLocation } from '../../redux/redux';
import { Link } from 'react-router-dom';

const { Option } = StyledSelect;


const CartDrawer = ({ onClose, visible }) => {
    const cart = useSelector((state) => state.cart.itemsInCart)
    const location = useSelector((state) => state.location.value)
    const curLoc = location !== undefined ? location : undefined
    const [delTime, setDelTime] = useState(1);
    const [local, setLocal] = useState(curLoc)
    const dispatch = useDispatch()
    let total = 0;

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

    consolidatedCartArr.forEach((item) => total += item.food.price * item.quantity)

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setDelTime(e.target.value);
    };

    const onCheckOut = () => {
        dispatch(setLocation(local))
        onClose()

    }

    return (
        <Drawer placement="right" onClose={onClose} visible={visible} width={'30%'} title={'My Cart'}>
            {
                consolidatedCartArr.length !== 0 ? (
                    <>

                        <div className='cartItems'>
                            <div className='restaurantname'>
                                {consolidatedCartArr[0].food.restaurant}
                            </div>
                            {
                                consolidatedCartArr.map((item) => {
                                    return (
                                        <ItemCard
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
                                        <Radio value={'lunch'}>Lunch (11am-12pm)</Radio>
                                        <Radio value={'dinner'}>Dinner (6pm-7pm)</Radio>
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
                                onChange={(value) => { setLocal(value) }}
                                width={'90%'}
                                value={local}
                            >
                                <Option value={LOCATIONS_LIST.MTA.code}>{LOCATIONS_LIST.MTA.name}</Option>
                                <Option value={LOCATIONS_LIST.RFL.code}>{LOCATIONS_LIST.RFL.name}</Option>
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

                        <div className='row'>
                            
                                <StyledButton width={'90%'} onClick={onCheckOut}>
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