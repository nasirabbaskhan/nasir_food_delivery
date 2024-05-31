"use client";
import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import { PlusSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import { useRouter } from "next/navigation";





interface Iprops {
  id: string;
}

// post the product into database
export async function addToCartApiCalls(userid: string, foodid: string) {
  console.log("user iddd",userid)
  const res = await fetch("http://localhost:3000/api/food", {
    method: "POST",
    body: JSON.stringify({
      userid: userid,
      foodid: foodid,
      quantity: 1,
    }),
  });
}

export default function AddToCart(props: Iprops) {
 
  console.log("nasi ki id yr", props.id)
  const { toast } = useToast();
  const router = useRouter();
  const foodid = props.id;
  const { user,isSignedIn } = useUser();
  const userid = user?.id as string;
  console.log("user id is",userid)

  const handleAddToCard = async () => {
    if(isSignedIn){
      await addToCartApiCalls(userid, foodid);
    toast({
      title: "Sucessfull ",
      description: "Addeed To Cart Sucessfully",
    });
    }
    else{
      router.push("/sign-in");
        }
    
  };

  return (
    <>
      <PlusSquare className="cursor-pointer" onClick={handleAddToCard} />
    </>
  );
}
