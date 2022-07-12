import { useState, useEffect } from "react";
import { getAllFoodByRestaurantId } from "../../database/api";
import { FoodCard } from "./FoodCard";

export const FoodBlock = ({id, buttonFunction, isSet}) => {
    const [res, updateRes] = useState();

    useEffect(() => {
        const foods = getAllFoodByRestaurantId(id);
        foods.then(res => {
            const array = res;
            const temp = array.map(food => {
                if (food.status) {
                    const foodSuffix = isSet ? ' Set' : ' Ala Carte'
                    const foodname = food.name + foodSuffix
                    return (
                        <FoodCard 
                            key={food.id} 
                            imageUrl={food.url} 
                            name={foodname} 
                            desc={"Indulge yourself in this delicious food!"} 
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