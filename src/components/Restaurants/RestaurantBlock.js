import { useState } from "react";
import { getRestaurants } from "../../database/api";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from 'react-router-dom';

export const RestaurantBlock = () => {
    const restaurants = getRestaurants();
    const [res, updateRes] = useState();
    restaurants.then(res => {
        const array = JSON.parse(res.body);
        // console.log(array);
        const temp = array.map(({address, imageurl, name, id}) => {
            return (
                <Link to={`/restaurants/${id}`}>
                    <RestaurantCard url={imageurl} title={name} desc={address} numPeople={5}></RestaurantCard>
                </Link>
            )
        })
        updateRes(temp)
    })
    return (
         res
    )
}