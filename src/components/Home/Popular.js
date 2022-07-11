import React from 'react'
import { RestaurantBlock } from '../Restaurants/RestaurantBlock';
import './styles.css';

const PopularSection = ({location, locString}) => {
  return (
    <div className='column'>
      <div className='row'>
          <h3 className="sectiontitle">Popular picks for today {locString}</h3>
      </div>
      <div className='gallery'>
        <RestaurantBlock location={location}/>
      </div>
    </div>
    
    

  )
}

export default PopularSection;