import React, {useState} from 'react'
import { RestaurantBlock } from '../Restaurants/RestaurantBlock';
import './styles.css';
import {Space} from "antd";
import { StyledInput } from '../reusable/Styles';

const PopularSection = ({location, locString}) => {
    const [restaurantName, updateRestaurantName] = useState('');
    const onSearch = (searchName) => updateRestaurantName(searchName)

  return (
    <div className='column'>
      <div className='row'>
          <Space direction="vertical">
              <StyledInput placeholder="Search for restaurant" 
              value={restaurantName === '' ? undefined : restaurantName } onChange={(e) => onSearch(e.target.value)}/>
              <h3 className="sectiontitle">Popular picks for today {locString}</h3>
          </Space>
      </div>
      <div className='gallery'>
        <RestaurantBlock location={location} restaurantName={restaurantName}/>
      </div>
    </div>
    
    

  )
}

export default PopularSection;