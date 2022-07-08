import React from 'react';
import { useNavigate } from "react-router-dom";
import "./restaurantCard.css"
import peopleIcon from "../../assets/Images/peopleIcon.png";

export const RestaurantCard = ({url, title, desc, numPeople}) => {
    return (
        <div className="restaurantwrapper">
            <div className="restaurantCard">
                <div className="body">
                    <img src={url} className="image" />
                    <h2 className="title"> {title} </h2>
                    <p className="description"> {desc} </p>
                    <div className="peopleBox">
                        <img src={peopleIcon} className="peopleIcon" />
                        <p className="people">{numPeople} other people are getting this</p>
                    </div>
                </div>
	    </div>
            <h2 className="cardtitle"> {title} </h2>
        </div>
    )
}