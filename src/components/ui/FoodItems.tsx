import { fetchFoodItemsSanity } from "@/lib/fetchingResturent";
import { FoodItemsType } from "@/utils/type";
import { fetchInternalImage } from "next/dist/server/image-optimizer";
import React from "react";

const food: FoodItemsType[] = await fetchFoodItemsSanity();
// console.log("aneela Food", food);

export default function FoodItems() {
  return (
    <div>
      {food.map((item, index) => {
        return <>{item.slug.current}</>;
      })}
    </div>
  );
}
