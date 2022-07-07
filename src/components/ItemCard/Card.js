import React from 'react';
import "./basicCard.css"

export const Card = ({url, title, desc}) => {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="body">
                    <img src={url} height='310px' width="100%" />
                    <h2 className="title"> {title} </h2>
                    <p className="description"> {desc} </p>
                </div>
                <button className="button">press here</button>
            </div>
        </div>
    )
}