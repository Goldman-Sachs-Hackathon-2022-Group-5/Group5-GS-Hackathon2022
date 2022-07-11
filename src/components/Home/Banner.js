import React, {useState} from 'react';
import '../styles.css'
import Cover from '../../assets/Images/cover.png'
import { StyledButton } from '../reusable/Button';
import { Container, StyledSelect } from '../reusable/Styles';
import { LOCATIONS_LIST } from '../../utils/const';
import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '../../redux/redux';

const { Option } = StyledSelect;

const HomeBanner = () => {
    const location = useSelector((state) => state.location.value)
    const curLoc = location !== undefined ? location : undefined
    const [local, setLocal] = useState(curLoc)
    const dispatch = useDispatch()

    return (
        <header>
            <div className="head-text">
                <div className="head-image">
                    <img src={Cover} height={'600vh'} width={'100%'} alt = ""/>
                </div>
                <div className='text-on-image'>
                    <h3 className="title">No time to waste?</h3>
                    <h3 className="title">Order now</h3>
                    <Container align={'flex-start'}>
                        <StyledSelect 
                            size='large'
                            placeholder="Select your location"
                            onChange={(value)=>{setLocal(value)}}
                            width={'330px'}
                            value={local}
                            >
                            <Option value={LOCATIONS_LIST.MTA.code}>{LOCATIONS_LIST.MTA.name}</Option>
                            <Option value={LOCATIONS_LIST.RFL.code}>{LOCATIONS_LIST.RFL.name}</Option>
                        </StyledSelect>
                        <StyledButton onClick={()=>{dispatch(setLocation(local))}}>
                            Explore
                        </StyledButton>
                    </Container>       
                </div>
            </div>
        </header>
    );
}

export default HomeBanner

