import { RestaurantType } from "@/utils/type";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { Star } from "lucide-react";
import RestuItems from "../ui/RestuItems";

const fetchRestaurantFromSanity = async () => {
  const res = await client.fetch(
    "*[_type=='restaurant']{description,image,_id,catagory,address,country,name,slug}",
    {},
    { cache: "no-cache" }
  );
  return res;
};

export default async function Restaurant() {
  const data: RestaurantType[] = await fetchRestaurantFromSanity();

  return (
    <div className="main my-8">
      <h1 className="text-3xl font-bold">Popular all Restaurants</h1>
      <p className="text-red-500 font-semibold">{data.length} Result</p>
      <div className=" grid grid-cols-4 mt-5">
        {data.map((item, index) => {
          return (
            <span key={index}>
              <RestuItems
                image={item.image}
                name={item.name}
                country={item.country}
                catagory={item.catagory}
                slug={item.slug.current}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
