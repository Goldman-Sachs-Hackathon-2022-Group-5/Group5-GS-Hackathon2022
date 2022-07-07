import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';


export const StyledButton = styled(Button)`
&& {
    border-radius: 6px;
    background-color: #94B7EA;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;  
    text-align: center;
    font-family: Poppins;
    font-weight: 100;
    width: 280px;
    height: 50px;


    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }


    // display-inline-block;
    // margin-bottom: 10px;
    // display: inline-flex;
    // flex-direction: column;
    // justify-content: space-around;
    // align-items: center;
  }
`;