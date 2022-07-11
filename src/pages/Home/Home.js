import React from 'react';
import HomeBanner from '../../components/Home/Banner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';
import PopularSection from '../../components/Home/Popular';
import CuisineSection from '../../components/Home/Cuisines';
import '../../components/Restaurants/RestaurantBlock.css';
import { useSelector } from 'react-redux'


const Home = () => {
    const location = useSelector((state) => state.location.value)
    const locString = location !== undefined ? `near ${location}` : ''

    return (
        <body className="home">
            <HomeBanner />
            <Container>
                <Container align='flex-start' width='70%' >
                    <PopularSection location={location} locString={locString}/>
                    <CuisineSection/>
                </Container>
            </Container>
        </body>
    );
}

export default Home;