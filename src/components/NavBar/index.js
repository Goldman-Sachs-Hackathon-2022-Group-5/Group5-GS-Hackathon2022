import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavWrapper
} from './NavbarComponents';
import { ShoppingCartOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={'https://hackerx.org/wp-content/uploads/2020/08/Goldman-Sachs-Logo.png'} alt='logo' height='55' />
        </NavLink>
        <Bars />
        <NavWrapper>
            <NavMenu>
                <NavLink to='/cart' activeStyle>
                    <ShoppingCartOutlined style={{fontSize: 20}}/>
                </NavLink>
            </NavMenu>
            <NavBtn icon={<ShoppingCartOutlined/>}>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavWrapper>
        
      </Nav>
    </>
  );
};

export default Navbar;