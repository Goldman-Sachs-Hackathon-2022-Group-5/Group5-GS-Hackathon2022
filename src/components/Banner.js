import React from 'react';
import './styles.css'
import Cover from '../assets/Images/cover.png'
import { StyledButton } from './reusable/Button';
import {Button} from 'antd'

const HomeBanner = () => {
    return (
        <header>
            <div className="head-text">
                <div className="head-image">
                    <img src={Cover} height={'650vh'} width={'100%'} alt = ""/>
                </div>
                <div className='text-on-image'>
                    <h3 className="title">No time to waste?</h3>
                    <h3 className="title">Order now</h3>

                    <StyledButton>
                        Explore
                    </StyledButton>
                </div>
            
            </div>
            
        </header>
    );
}

export default HomeBanner

