import React from 'react'
import '../styles.css'

export const HeaderBanner = ({url, title}) => {
    return (
        <header>
            <div className="head-text">
                <div className="head-image">
                    <img src={url} height={'300vh'} width={'100%'} alt = ""/>
                </div>
                <div className='center-title-on-image'>
                    <h3 className="secondarytitle">{title}</h3> 
                </div>
            </div>
        </header>
    );
}
