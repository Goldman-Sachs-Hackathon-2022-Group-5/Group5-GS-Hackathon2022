import React from 'react';
import HomeBanner from '../../components/Home/Banner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';

import { Card } from '../../components/ItemCard/Card';
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
                <Card 
                    url={"https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="} 
                    title={"Example title"} 
                    desc={"Example description"}>
                </Card>
            </div>
        </body>
    );
}

export default Home;