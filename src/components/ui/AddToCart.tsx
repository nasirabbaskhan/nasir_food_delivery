"use client";
import { useUser } from "@clerk/nextjs";
import { PlusSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Iprops {
  id: string;
}

// post the product into database
export async function addToCartApiCalls(userid: string, foodid: string) {
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
  const { toast } = useToast();
  const foodid = props.id;
  const { user } = useUser();
  const userid = user?.id as string;

  const handleAddToCard = async () => {
    await addToCartApiCalls(userid, foodid);
    toast({
      title: "Sucessfull ",
      description: "Addeed To Cart Sucessfully",
    });
  };

  return (
    <>
      <PlusSquare className="cursor-pointer" onClick={handleAddToCard} />
    </>
  );
}
