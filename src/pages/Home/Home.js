import React from 'react';
import HomeBanner from '../../components/Banner';
import { Card } from '../../components/card/basicCard';
import './Home.css'

const Home = () => {
    return (
        <body className="home">
           <HomeBanner />
        </body>
    );
}

export default Home;