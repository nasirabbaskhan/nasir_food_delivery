"use client";
import CartMain from "@/components/CartMain";
import { food } from "@/lib/drizzle";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
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
      };

      fetchData(id);
    }
  }, [isSignedIn, user]);
  console.log("data", JSON.stringify(data))

  if (isSignedIn) {
    return (
      <div>
        Hello {user.fullName}! Your user ID is {user.id}.
        <div>Data: {JSON.stringify(data)}</div>
        
        <CartMain data={data}/>
      </div>
    );
  }

  return <div>Not signed in</div>;
}



