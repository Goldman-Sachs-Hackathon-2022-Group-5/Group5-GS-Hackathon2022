import { useState } from "react";
import { getAllFoodByRestaurantId } from "../../database/api";
import { FoodCard } from "./FoodCard";

export const FoodBlock = ({id}) => {
    const foods = getAllFoodByRestaurantId(id);
    const [res, updateRes] = useState();
    foods.then(res => {
        const array = res;
        const temp = array.map(({id, name, price, url, status}) => {
            if (status) {
                return (
                    <FoodCard imageUrl={url} name={name} desc={"AAAAAAAA"} price={price} />
                )
            }
        })
        updateRes(temp);
    })
    return (
        res
    )
}