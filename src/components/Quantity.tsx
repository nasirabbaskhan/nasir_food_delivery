"use client"
import { food } from '@/lib/drizzle';
import refreshData from '@/utils/action';
import { FoodItemsType } from '@/utils/type';
import React from 'react'
import { useUser } from "@clerk/clerk-react";

export async function updateQuantityInDatabase(
    userid: string | null,
    productid: string,
    quantity: number
  ) {
    const res = await fetch(`http://localhost:3000/api/food`, {
      // mode: "no-cors",
      method: "PUT",
      body: JSON.stringify({
        userid: userid,
        productid: productid,
        quantity: quantity,
      }),
    });
    if (!res.ok) {
      return "Error";
    }
    await refreshData();
  }
export default function Quantity({
    item,
    data,
  }: {
    item: FoodItemsType;
    data: food;
  }) {
 const { isSignedIn, user, } = useUser();
  const id= user?.id as string | null

    
    const IncrementQuantityHandler = async () => {
        await updateQuantityInDatabase(
            id,
          item._id,
          (data.quantity ? data.quantity : 0) + 1 // error resolve required
        );
      };
      const decrementQuantityHandler = async () => {
        data.quantity > 1 &&
          (await updateQuantityInDatabase(
            id,
            item._id,
            (data.quantity ? data.quantity : 0) - 1
          ));
      };

  return (
    <div className="flex justify-between  ">
      <div className={`flex gap-4 justify-center items-center text-lg`}>
        <button
          onClick={decrementQuantityHandler}
          className="select-none  text-4xl cursor-pointer flex justify-center items-center w-8 h-8 rounded"
        >
          {" "}
          -{" "}
        </button>
        <p className="ring-2 px-3 p-1 rounded-md">{data ? data.quantity : 0}</p>
        <button
          onClick={IncrementQuantityHandler}
          className="select-none text-2 xl cursor-pointer flex justify-center items-center w-8 h-8 rounded"
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  )
}
