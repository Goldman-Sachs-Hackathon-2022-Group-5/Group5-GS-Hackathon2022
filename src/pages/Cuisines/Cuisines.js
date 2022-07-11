import React from 'react'
import { HeaderBanner } from '../../components/reusable/Banners'
import { Breadcrumb } from 'antd';
import { Container } from '../../components/reusable/Styles';
import CoverSmall from '../../assets/Images/coversmall.png';
import './Cuisines.css'
import { useLocation, Link } from 'react-router-dom';
import { CuisineRestaurantBlock } from '../../components/Restaurants/CuisineRestaurantBlock';
import { useSelector } from 'react-redux';


const Cuisines = () => {
    const cuisine = useLocation();
    const cuisineName = cuisine.pathname.split('/')[2];
    const cName = cuisineName.charAt(0).toUpperCase() + cuisineName.slice(1);
    const location = useSelector((state) => state.location.value);
    //collect restaurant data
  return (
      <>
        <HeaderBanner url={CoverSmall} title={''}/>
        <Container>
            <Container align='flex-start' width='70%' margintop='20px'>
                <Breadcrumb style={{fontSize: '20px'}}>
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Cuisines</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={{color: '#346EBE'}}>{cName}</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="sectiontitle">{cName} Cuisine</h3>
                <div className="restaurantGallery">
                    <CuisineRestaurantBlock location={location} cuisine={cuisine}/>
                </div>
            </Container>
        </Container>
      </>
  )
}

export default Cuisines