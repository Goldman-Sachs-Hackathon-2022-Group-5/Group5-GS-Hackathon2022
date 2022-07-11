import { useEffect, useState } from "react";
import { getRestaurants } from "../../database/api";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from 'react-router-dom';

export const RestaurantBlock = ({location, restaurantName}) => {
    const [arrOfRes, updateArrOfRes] = useState();

    const [res, updateRes] = useState();

    const mapResToRestaurantCard = ({address, imageurl, name, id}) => {
        return (
            <Link to={`/restaurants/${id}`}>
                <RestaurantCard
                    key={id}
                    url={imageurl}
                    title={name}
                    desc={address}
                    numPeople={Math.floor(Math.random() * 10)}/>
            </Link>
        )
    }

    useEffect(() => {
        const restaurants = getRestaurants();
        restaurants.then((res) => {
            const parsedBody = (JSON).parse(res.body)
            updateArrOfRes(parsedBody)
            updateRes(parsedBody.map(mapResToRestaurantCard))
        })
    }, [])

    useEffect(() => {
        if (arrOfRes === undefined) return

        let filteredRes;
        if (location === undefined) {
            filteredRes = arrOfRes.filter(r => r.name.toLowerCase().includes(restaurantName))
        } else {
            filteredRes = arrOfRes.filter(r => r.office === location && r.name.toLowerCase().includes(restaurantName))
        }

        const filteredResCard = filteredRes.map(mapResToRestaurantCard)
        updateRes(filteredResCard)
    }, [location, restaurantName])

    return res;
}