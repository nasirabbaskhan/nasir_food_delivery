import { PlusSquare } from "lucide-react";
import Image from "next/image";
interface Iprops {
  name: string;
  price: number;
  description: string;
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
        <PlusSquare />
      </div>
    </div>
  );
}
