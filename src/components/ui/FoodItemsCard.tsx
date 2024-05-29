import { PlusSquare } from "lucide-react";
import Image from "next/image";
import AddToCart from "@/components/ui/AddToCart";
interface Iprops {
  name: string;
  price: string;
  description: string;
  id: string;
}

export default function FoodItemsCard(props: Iprops) {
  return (
    <div className="card flex gap-4 items-center border p-2 rounded-lg">
      <Image
        src={"/sandwitch.jpeg"}
        alt="image"
        width={500}
        height={500}
        className="w-32 h-28 object-cover rounded-xl"
      />

      <div className="text">
        <h1 className="text-lg font-bold">{props.name}</h1>
        <p>{props.price}</p>
        <p className="truncate w-72">{props.description}</p>
        <p className="truncate w-72">{props.id}</p>
        <AddToCart id={props.id} />
      </div>
    </div>
  );
}
