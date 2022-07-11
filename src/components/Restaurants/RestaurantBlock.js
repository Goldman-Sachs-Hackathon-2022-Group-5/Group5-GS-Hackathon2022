import { useEffect, useState } from "react";
import { getRestaurants } from "../../database/api";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from 'react-router-dom';

export const RestaurantBlock = ({location}) => {
    const [res, updateRes] = useState();

    useEffect(() => {
        const restaurants = getRestaurants();
        restaurants.then(res => {
            const array = JSON.parse(res.body);
            console.log(array)
            console.log(location)
            
            const temp = location !== undefined ?
                array
                    .filter(r => r.office === location)
                    .map(({address, imageurl, name, id}) => {
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
                }) :
                array
                    .map(({address, imageurl, name, id}) => {
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
    }, [location])


    return (
         res
    )
}