import { Star } from "lucide-react";
import Image from "next/image";
interface Iprops {
  userId: string;
  userName: string;
}
export default function ReviewCardItems(props: Iprops) {
  return (
    <div className="card flex items-center gap-8 border rounded shadow-md p-2">
      <Image
        src={"/an.jpg"}
        alt="img"
        width={500}
        height={500}
        className="object-cover w-14 h-14 rounded-full "
      />
      <div className="text">
        <p className="userName">{props.userId}</p>
        <p className=" flex ">
          {" "}
          <Star className="fill-amber-300 size-6 " />
          <Star className="fill-amber-300 size-6 " />
          <Star className="fill-amber-300 size-6 " />
          <Star className="fill-amber-300 size-6 " />
          <Star className="fill-amber-300 size-6 " />
        </p>
        <p>
          <span className="font-semibold">{props.userName}</span> at 09-May-2024
        </p>
      </div>
    </div>
  );
}
