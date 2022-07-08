import React from 'react'
import { HeaderBanner } from '../../components/reusable/Banners'
import { Breadcrumb } from 'antd';
import { Container } from '../../components/reusable/Styles';
import CoverSmall from '../../assets/Images/coversmall.png';
import './Cuisines.css'
import { useLocation } from 'react-router-dom';


const Cuisines = () => {
    const cuisine = useLocation();
    const cuisineName = cuisine.pathname.split('/')[2]
    const cName = cuisineName.charAt(0).toUpperCase() + cuisineName.slice(1)
    //collect restaurant data
  return (
      <>
        <HeaderBanner url={CoverSmall} title={''}/>
        <Container>
            <Container align='flex-start' width='70%' margintop='20px'>
                <Breadcrumb style={{fontSize: '20px'}}>
                    <Breadcrumb.Item>
                        <a href="/">Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/">Cuisines</a></Breadcrumb.Item>
                    <Breadcrumb.Item style={{color: '#346EBE'}}>{cName}</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="sectiontitle">{cName} Cuisine</h3>
            </Container>
        </Container>
      </>
  )
}

export default Cuisines