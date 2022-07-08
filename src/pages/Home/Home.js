import React from 'react';
import HomeBanner from '../../components/Home/Banner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';
import { testFunction } from '../../database/api';
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
            <div>
                <button onClick={() => testFunction("MTA")}>click me</button>
            </div>
        </body>
    );
}

export default Home;