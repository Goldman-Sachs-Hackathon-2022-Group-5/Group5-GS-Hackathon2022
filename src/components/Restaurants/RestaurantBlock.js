import { useEffect, useState } from "react";
import { getRestaurants } from "../../database/api";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from 'react-router-dom';

export const RestaurantBlock = () => {
    const [res, updateRes] = useState();
    useEffect(() => {
        const restaurants = getRestaurants();
        restaurants.then(res => {
            const array = JSON.parse(res.body);
            // console.log(array);
            const temp = array.map(({address, imageurl, name, id}) => {
                return (
                    <Link to={`/restaurants/${id}`}>
                        <RestaurantCard 
                            key={id}
                            url={imageurl} 
                            title={name} 
                            desc={address} 
                            numPeople={5}/>
                    </Link>
                )
            })
            updateRes(temp)
        })
    }, [])


    return (
         res
    )
}