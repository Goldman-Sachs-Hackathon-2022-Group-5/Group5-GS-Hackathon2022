import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

const Cuisines = () => {
  return (
    <div className='row'>
        <h3 className="sectiontitle">Browse by cuisines</h3>
        <Link to='/cart'>
            <p className="accenttext">See all ></p>
        </Link>
    </div>
  )
}

export default Cuisines;