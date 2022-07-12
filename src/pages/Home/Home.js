import React from 'react';
import HomeBanner from '../../components/Home/Banner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';
import PopularSection from '../../components/Home/Popular';
import CuisineSection from '../../components/Home/Cuisines';
import '../../components/Restaurants/RestaurantBlock.css';
import { useSelector } from 'react-redux'
import OrderStatusSection from '../../components/Home/Order';

const Home = () => {
    const location = useSelector((state) => state.location.value)
    const locString = location !== undefined ? `near ${location}` : ''

    return (
        <body className="home">
            <HomeBanner />
            <Container>
                <Container align='flex-start' width='70%' >
                    <OrderStatusSection />
                    <PopularSection location={location} locString={locString}/>
                    <CuisineSection/>
                </Container>
            </Container>
            <div style={{
                marginTop: '2rem', 
                backgroundColor: 'black', 
                height: '10rem',
                color: 'white',
                fontFamily: 'Poppins-Medium',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                >
                    Ⓒ Goldman Sachs Intern Hackathon Group 5 
                </div>
        </body>
    );
}

export default Home;