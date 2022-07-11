import React, { useEffect, useRef, useState } from 'react'
import { HeaderBanner } from '../../components/reusable/Banners'
import { Breadcrumb, Tabs } from 'antd';
import { Container } from '../../components/reusable/Styles';
import './Restaurants.css'
import { useLocation, Link } from 'react-router-dom';
import { getRestaurantById } from '../../database/api';
import { FoodBlock } from '../../components/Food/FoodBlock';
import CartDrawer from '../../components/AddToCart/Drawer';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';

const { TabPane } = Tabs;

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState()
    const restaurantId = useLocation().pathname.split('/')[2]
    const [isCartVisible, setCartVisible] = useState(false);
    const [food, setFood] = useState({name: '', price: ''})

    const showDrawer = (food) => {
        setCartVisible(true);
        setFood(food)
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
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Restaurants</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={{color: '#346EBE'}}>{restaurantName}</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="sectiontitle">{restaurantName}</h3>
                <h4 className="sectionsubtitle">
                    {restaurantCuisine} • {restaurantAddress} {restaurantIsHalal}
                </h4>
                <div className="peopleBox">
                <Avatar.Group
                    maxCount={2}
                    maxPopoverTrigger="click"
                    size="large"
                    maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                    >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
                    <p style={{ marginBottom: 0, marginLeft: '1rem'}}>{5} other people are getting this</p>
                </div>

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

                <div className="foodgallery">
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

                {/* <div className="gallery">
                    <FoodBlock id={restaurantId}/>
                </div> */}
               
            </Container>
            <CartDrawer 
                onClose={onClose} 
                visible={isCartVisible}
                food={food}
            />
        </Container>
      </>
  )
}

export default Restaurant