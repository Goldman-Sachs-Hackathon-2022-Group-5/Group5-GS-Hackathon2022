import React from 'react';
import HomeBanner from '../../components/Home/Banner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';
import PopularSection from '../../components/Home/Popular';
import CuisineSection from '../../components/Home/Cuisines';

const Home = () => {
    return (
        <body className="home">
            <HomeBanner />
            <Container>
                <Container align='flex-start' width='70%' >
                    <PopularSection/>
                    <CuisineSection/>
                </Container>
            </Container>
        </body>
    );
}

export default Home;