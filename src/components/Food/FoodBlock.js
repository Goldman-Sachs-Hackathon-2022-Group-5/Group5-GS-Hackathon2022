import { useState, useEffect } from "react";
import { getAllFoodByRestaurantId } from "../../database/api";
import { FoodCard } from "./FoodCard";

export const FoodBlock = ({id, buttonFunction}) => {
    const [res, updateRes] = useState();

    useEffect(() => {
        const foods = getAllFoodByRestaurantId(id);
        foods.then(res => {
            const array = res;
            const temp = array.map(({id, name, price, url, status}) => {
                if (status) {
                    return (
                        <FoodCard key={id} imageUrl={url} name={name} desc={"AAAAAAAA"} price={price} buttonFunction={buttonFunction}/>
                    )
                }
            })
            updateRes(temp);
        })
    }, [id, buttonFunction])


    
    return (
        res
    )
}