import React from 'react'
import { RestaurantBlock } from '../Restaurants/RestaurantBlock';
import './styles.css';

const PopularSection = () => {
  return (
    <div className='column'>
      <div className='row'>
          <h3 className="sectiontitle">Popular picks for today</h3>
      </div>
      <div className='gallery'>
        <RestaurantBlock />
      </div>
    </div>
    
    

  )
}

export default PopularSection;