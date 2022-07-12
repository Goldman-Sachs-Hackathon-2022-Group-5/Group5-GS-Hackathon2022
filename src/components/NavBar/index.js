import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavWrapper,
  IconDiv,
  LocationText
} from './NavbarComponents';
import { Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { LOCATIONS_LIST } from '../../utils/const';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/Images/LongLogo.png'
import CartDrawer from '../Cart/CartDrawer';
import { useSelector } from 'react-redux'

const Navbar = () => {
  const curRoute = useLocation();
  const [isCartVisible, setCartVisible] = useState(false);
  const location = useSelector((state) => state.location.value)

  const showDrawer = () => {
      setCartVisible(true);
  };

  const onClose = () => {
      setCartVisible(false);
  };
  
  return (
    <>
      <Nav>
        <NavWrapper>
          <NavLink to='/'>
            <img src={Logo} alt='logo' height='55' />
          </NavLink>
          {
            curRoute.pathname !== "/" && location !== undefined &&
            <LocationText>
              <h2 style={{color: '#fff', marginRight: '0.5rem', marginBottom: 0, display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
              Location set: 
              </h2>
              <h2 style={{color: '#94B7EA', marginBottom: 0, display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                {LOCATIONS_LIST[location].name}
              </h2>
            </LocationText>
          }    
        </NavWrapper>
        <Bars />
        <NavWrapper>
            <NavMenu>
              <IconDiv>
                <ShoppingCartOutlined style={{fontSize: 20, color: '#15cdfc'}} onClick={showDrawer}/>
              </IconDiv>
            </NavMenu>
            <NavBtn>
              <Avatar src="https://joeschmoe.io/api/v1/random" width={40}/>
            </NavBtn>
        </NavWrapper>
      </Nav>
      <CartDrawer onClose={onClose} visible={isCartVisible}/>
    </>
  );
};

export default Navbar;