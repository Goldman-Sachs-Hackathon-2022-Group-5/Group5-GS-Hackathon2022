import React from 'react'
import { HeaderBanner } from '../../components/reusable/Banners'
import { Breadcrumb } from 'antd';
import { Container } from '../../components/reusable/Styles';
import CoverSmall from '../../assets/Images/coversmall.png';
import './Cuisines.css'


const Cuisines = () => {
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
                    <Breadcrumb.Item style={{color: '#346EBE'}}>Western</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="sectiontitle">Western Cuisine</h3>
            </Container>
        </Container>
      </>
  )
}

export default Cuisines