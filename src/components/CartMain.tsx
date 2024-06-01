
import { food } from '@/lib/drizzle'
import { FoodItemsType, allFoodItemsType } from '@/utils/type';
import { ShoppingBagIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { client } from '../../sanity/lib/client';
import AddToCartItems from './AddToCartItems';
import SummeryPricing from './SummeryPricing';



export default function CartMain({data}:{data:food[]}) {
  const foodId= data[0]?.foodid
  console.log("datastt",foodId)
    const [productdata, setProductData] = useState<FoodItemsType[]>([]);

    const fetchFoodItemsSanity = async (foodId:string | null) => {
      console.log("inside the api calling func", foodId)
      const res = await client.fetch(
        `*[_type=='food' && _id=='${foodId}' ]{name,description,type,restaurantname,_id,slug,image,price}`,
        {},
        { cache: "no-cache" }
      );

      return res
    };
    
 useEffect(()=>{
    dataGetter()
    
   },[data])

  
 
  const dataGetter = async () => {
    const productPromise = data.map((item: food) => {
      return  fetchFoodItemsSanity(item.foodid);
    });
    try {
      const productData:FoodItemsType[] = await Promise.all(productPromise);
      console.log("productData", productData)

      setProductData(productData.flat())
            
    
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  
 
  console.log("nasir aneela product data ", productdata);
  if (data.length == 0) {
    return (
      <div className="h-[80vh] flex justify-center flex-col gap-3 mx-auto">
        <ShoppingBagIcon color="purple" size={42} className="mx-auto" />
        <h2 className="text-2xl text-gray-600 font-semibold mx-auto">
          Cart is Empty,{" "}
          <Link href={"/products"} className="text-xl ">
            {" "}
            Brows Products
          </Link>
        </h2>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="font-bold py-8">
            <Link href={"/"} className="text-purple-500">
              {" "}
              Home
            </Link>{" "}
            / <span className="text-gray-600">Cart</span>
          </div>
          <div className="flex gap-6 ">
            <div className="w[69%]">
              <div className=" space-y-7 ">
                <AddToCartItems productdata={productdata} data={data} />
                
              </div>
            </div>
             <SummeryPricing productdata={productdata} data={data}/>
            
          </div>
        </div>
      </div>
      
    </>
  )
}
