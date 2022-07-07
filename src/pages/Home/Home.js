import React from 'react';
import HomeBanner from '../../components/Home/Banner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';
import Popular from '../../components/Home/Popular';
import Cuisines from '../../components/Home/Cuisines';
import { Card } from '../../components/ItemCard/Card';

const Home = () => {
    return (
        <body className="home">
            <HomeBanner />
            <Container>
                <Container align='flex-start' width='70%' >
                    <Popular/>
                    <Cuisines/>
                </Container>
            </Container>
            <div>
                <Card 
                    url={"https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="} 
                    title={"1"} 
                    desc={"2"}>
                </Card>
            </div>
        </body>
    );
}

export default Home;