import { useEffect, useState } from "react";
import { getRestaurants } from "../../database/api";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from 'react-router-dom';

export const CuisineRestaurantBlock = ({location, cuisine}) => {
    const [res, updateRes] = useState();
    const currentCuisine = cuisine.pathname.split("/")[2];
    console.log(currentCuisine);

    useEffect(() => {
        const restaurants = getRestaurants();
        restaurants.then(res => {
            const array = JSON.parse(res.body);
            console.log(array)
            console.log(location)

            array
            // .filter(x => x.cuisine == currentCuisine)
            .map(x => {
                console.log(x.ishalal);
            })
            
            const temp = location !== undefined ?
                array
                    .filter(r => r.office === location)
                    .filter(r => r.cuisine === currentCuisine)
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
                }) : currentCuisine === "Halal" ?
                array
                    .filter(r => r.ishalal)
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
                    .filter(r => r.cuisine === currentCuisine)
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