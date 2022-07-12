import React from 'react';
import "./basicCard.css"

export const Card = ({url, title}) => {
    return (
        <div className='wrapper'>
            <div className="card">
                <img src={url} height='150px' width="100%" alt=''/>
            </div>
            <h2 className="cuisinecardtitle"> {title} </h2>
        </div>
    )
}