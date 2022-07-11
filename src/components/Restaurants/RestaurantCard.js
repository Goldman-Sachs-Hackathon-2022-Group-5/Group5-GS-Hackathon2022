import React from 'react';
import "./restaurantCard.css"
import peopleIcon from "../../assets/Images/peopleIcon.png";

export const RestaurantCard = ({url, title, desc, numPeople}) => {
    return (
    <div className="restaurantCard">
        <div className="body">
            <img src={url} className="rcardimage" alt='' />
            <h2 className="title"> {title} </h2>
            <h4 className="desc"> {desc} </h4>
            <div className="peopleBox">
                <img src={peopleIcon} className="peopleIcon" alt='' />
                <p style={{marginBottom: 0}}>{numPeople} other people are getting this</p>
            </div>
        </div>
    </div>
    )
}