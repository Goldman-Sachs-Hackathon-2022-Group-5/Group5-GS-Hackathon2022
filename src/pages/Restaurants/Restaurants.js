import React, { useEffect, useRef, useState } from 'react'
import { HeaderBanner } from '../../components/reusable/Banners'
import { Breadcrumb, Tabs } from 'antd';
import { Container } from '../../components/reusable/Styles';
import './Restaurants.css'
import { useLocation } from 'react-router-dom';
import { getRestaurantById } from '../../database/api';
import { FoodBlock } from '../../components/Food/FoodBlock';
import CartDrawer from '../../components/AddToCart/Drawer';
import { StyledButton } from '../../components/reusable/Button';


const { TabPane } = Tabs;

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState()
    const restaurantId = useLocation().pathname.split('/')[2]
    const [isCartVisible, setCartVisible] = useState(false);

    const showDrawer = () => {
        setCartVisible(true);
    };
  
    const onClose = () => {
        setCartVisible(false);
    };
    
    useEffect(() => {
        getRestaurantById(restaurantId).then(value => {
            setRestaurant(value)
            console.log(value)
          }).catch( error => {
            console.log(error);
          });
        
    }, [restaurantId])

    const restaurantName = restaurant !== undefined ? restaurant[0].name : ''
    const restaurantImg = restaurant !== undefined ? restaurant[0].bannerurl : ''
    const restaurantCuisine = restaurant !== undefined ? restaurant[0].cuisine : ''
    const restaurantIsHalal = restaurant !== undefined ? (restaurant[0].ishalal ? ' • Halal' : '') : ''
    const restaurantAddress = restaurant !== undefined ? restaurant[0].address : ''

    const setsRef = useRef()
    const popularRef = useRef()
    const beverageRef = useRef()
    const alacarteRef = useRef()

    const refList = [popularRef, setsRef, alacarteRef, beverageRef]

    const onChange = (key) => {
        const ref = refList[key-1]
        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: "smooth",
        })
    };

  return (
      <>
        <HeaderBanner url={restaurantImg} title={''}/>
        <Container>
            <Container align='flex-start' width='70%' margintop='20px'>
                <Breadcrumb style={{fontSize: '20px'}}>
                    <Breadcrumb.Item>
                        <a href="/">Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/">Restaurants</a></Breadcrumb.Item>
                    <Breadcrumb.Item style={{color: '#346EBE'}}>{restaurantName}</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="sectiontitle">{restaurantName}</h3>
                <h4 className="sectionsubtitle">
                    {restaurantCuisine} • {restaurantAddress} {restaurantIsHalal}
                </h4>
                {/* how many ppl ordering at the moment */}

                <Tabs 
                    defaultActiveKey="1" 
                    onChange={onChange} 
                    size='large' 
                    tabBarGutter={50}
                    tabBarStyle={{fontFamily: 'Poppins-Medium'}}>
                    <TabPane tab="Popular" key="1"/>
                    <TabPane tab="Sets" key="2"/>
                    <TabPane tab="Ala Carte" key="3"/>
                    <TabPane tab="Beverages" key="4"/>
                </Tabs>

                <h3 className="subtitle" ref={popularRef}>Popular Picks</h3>

                <div className="gallery">
                    <FoodBlock id={restaurantId} buttonFunction={showDrawer}/>
                </div>

                {/* <StyledButton onClick={showDrawer}>Get this</StyledButton> */}
            
                <h3 className="subtitle" ref={setsRef}>Sets</h3>

                {/* <div className="gallery">
                    <FoodBlock id={restaurantId}/>
                </div> */}

                <h3 className="subtitle" ref={alacarteRef}>Ala Carte</h3>

                {/* <div className="gallery">
                    <FoodBlock id={restaurantId}/>
                </div> */}

                <h3 className="subtitle" ref={beverageRef}>Beverages</h3>
                <CartDrawer onClose={onClose} visible={isCartVisible}/>

                {/* <div className="gallery">
                    <FoodBlock id={restaurantId}/>
                </div> */}
               
            </Container>
        </Container>
      </>
  )
}

export default Restaurant