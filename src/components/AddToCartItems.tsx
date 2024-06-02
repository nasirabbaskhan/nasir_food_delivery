"use client"
import { food } from '@/lib/drizzle'
import { FoodItemsType } from '@/utils/type'
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { X } from 'lucide-react';
import Quantity from './Quantity';
import { useUser } from "@clerk/clerk-react";
import { ToastAction } from '@radix-ui/react-toast';
import { toast } from './ui/use-toast';
import refreshData from '@/utils/action';
import { useRouter } from "next/navigation";


export default function AddToCartItems({productdata,data}:{productdata:FoodItemsType[], data:food[]}) {
    const { isSignedIn, user, } = useUser();
    const { refresh } = useRouter();

  const id= user?.id as string | null
    const deleteCartItemfromDB = async(id:string | null,productId:string)=>{
       
        await fetch(
            `http://localhost:3000/api/food?userid=${id}&productid=${productId}`,
            {
              method: "DELETE",
            }
          );
          toast({
            title: "Sucessfull ",
            description: "Deleted Your Item Sucessfully",
            variant: "destructive",
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
          });
          refresh();
   
    }



  return (
    <>
    {productdata.map((item, index) => {
      return (
        <div
          key={index}
          className="w-full h-[6rem] border-t  flex gap-9 justify-between items-center"
        >
          <div className="flex items-center gap-8">
            <div className="w-16 h-16">
              <Image
                src={urlForImage(item.image)}
                width={1000}
                height={1000}
                alt="image"
              />
            </div>
            <div className="truncate w-60">{item.name}</div>
            <Quantity item={item} data={data[index]} />
           
            <p className="text-gray-500">$ {item.price}</p>
            <X
              onClick={() => deleteCartItemfromDB(id, item._id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      );
    })}
  </>
  )
}

