import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

const CuisineSection = () => {
  return (
    <div className='row'>
        <h3 className="sectiontitle">Browse by cuisines</h3>
        <Link to='/cuisine'>
            <p className="accenttext">See all &gt;</p>
        </Link>
    </div>
  )
}

export default CuisineSection;