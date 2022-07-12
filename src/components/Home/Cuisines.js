import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import { CUISINE_LIST } from '../../utils/const';
import { Card } from '../ItemCard/Card';

const CuisineSection = () => {
  const cuisineCardsArray = CUISINE_LIST.map(c => (
   <Link to={c.link}>
      <Card 
        key={c.title} 
        url={c.image}
        title={c.title}
      /> 
   </Link>
  ));

return (
  <div className='column'>
    <div className='row'>
      <h3 className="sectiontitle">Browse by cuisines</h3>
    </div>
    <div className='cuisinegallery'>
      {cuisineCardsArray}
    </div>
  </div>
)
}

export default CuisineSection;