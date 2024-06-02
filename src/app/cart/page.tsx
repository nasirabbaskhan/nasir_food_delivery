"use client";
import CartMain from "@/components/CartMain";
import { food } from "@/lib/drizzle";
import refreshData from "@/utils/action";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Data={
  id:number,
  userid:string,
  foodid:string,
  quantity:number
}
export default function Home() {
  const [data, setData] = useState([]);
  const { isSignedIn, user, } = useUser();
  const id= user?.id as string | null
  const { refresh } = useRouter();

  

  useEffect(() => {
    if (isSignedIn && user) {
      const fetchData = async (id:string | null) => {
        try {
          const response = await fetch(`http://localhost:3000/api/food?userid=${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
            refresh()
      };

      fetchData(id);
       
    }
  }, [isSignedIn, user]);
  console.log("data", JSON.stringify(data))

  if (isSignedIn) {
    return (
      <div>
    
        
        <CartMain data={data}/>
      </div>
    );
  }


}



