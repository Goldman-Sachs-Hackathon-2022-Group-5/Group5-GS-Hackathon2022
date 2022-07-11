import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavWrapper,
  IconDiv
} from './NavbarComponents';
import { Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { StyledSelect } from '../reusable/Styles';
import { LOCATIONS_LIST } from '../../utils/const';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/Images/LongLogo.png'
import CartDrawer from '../Cart/Drawer';

const { Option } = StyledSelect;

const Navbar = () => {
  const curRoute = useLocation();
  const [isCartVisible, setCartVisible] = useState(false);

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
            {/* <img src={'https://hackerx.org/wp-content/uploads/2020/08/Goldman-Sachs-Logo.png'} alt='logo' height='55' /> */}
            <img src={Logo} alt='logo' height='55' />
          </NavLink>
          {
            curRoute.pathname !== "/" && 
            <StyledSelect 
              size='large'
              placeholder="Select your location"
              // onChange={(value)=>{dispatch(setLocation(value))}}
              width={'330px'}
              top={'0px'}
              left={'40px'}
              // value={location}
              >
              <Option value={LOCATIONS_LIST.MTA.code}>{LOCATIONS_LIST.MTA.name}</Option>
              <Option value={LOCATIONS_LIST.RFL.code}>{LOCATIONS_LIST.RFL.name}</Option>
          </StyledSelect>
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