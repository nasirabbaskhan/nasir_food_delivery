import { RestaurantType } from "@/utils/type";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { Star } from "lucide-react";
import RestuItems from "../ui/RestuItems";

const fetchRestaurantFromSanity = async () => {
  const res = await client.fetch(
    "*[_type=='restaurant']{description,image,_id,catagory,address,country,name}",
    {},
    { cache: "no-cache" }
  );
  return res;
};

export default async function Restaurant() {
  const data: RestaurantType[] = await fetchRestaurantFromSanity();
  console.log("aneela", data[0].name);
  return (
    <div className="main my-8">
      <h1 className="text-3xl font-bold">Popular all Restaurants</h1>
      <p className="text-red-500 font-semibold">{data.length}1 Result</p>
      <div className=" grid grid-cols-4 mt-5">
        {data.map((item, index) => {
          return (
            <span key={index}>
              <RestuItems
                image={item.image}
                name={item.name}
                country={item.country}
                catagory={item.catagory}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
