import { useState, useEffect } from "react";
import { getAllFoodByRestaurantId } from "../../database/api";
import { FoodCard } from "./FoodCard";

export const FoodBlock = ({id, buttonFunction}) => {
    const [res, updateRes] = useState();

    useEffect(() => {
        const foods = getAllFoodByRestaurantId(id);
        foods.then(res => {
            const array = res;
            const temp = array.map(food => {
                if (food.status) {
                    return (
                        <FoodCard 
                            key={food.id} 
                            imageUrl={food.url} 
                            name={food.name} 
                            desc={"AAAAAAAA"} 
                            price={food.price} 
                            buttonFunction={() => buttonFunction(food)}/>
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