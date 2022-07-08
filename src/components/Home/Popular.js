import React from 'react'
import { Link } from 'react-router-dom';
import { RestaurantBlock } from '../Restaurants/RestaurantBlock';
import './styles.css';

const PopularSection = () => {
  return (
    <div className='column'>
      <div className='row'>
          <h3 className="sectiontitle">Popular picks for today</h3>
          <Link to='/cart'>
              <p className="accenttext">See all &gt;</p>
          </Link>
      </div>
      <div className='gallery'>
        <RestaurantBlock />
      </div>
    </div>
    
    

  )
}

export default PopularSection;