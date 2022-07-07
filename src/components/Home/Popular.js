import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

const Popular = () => {
  return (
    <div className='row'>
        <h3 className="sectiontitle">Popular picks for today</h3>
        <Link to='/cart'>
            <p className="accenttext">See all ></p>
        </Link>
    </div>
  )
}

export default Popular;