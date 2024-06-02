import CardDescription from "@/components/ui/CardDescription";
import {
  fetchFoodItemsSanity,
  fetchRestaurantFromSanity,
} from "@/lib/fetchingResturent";
import { FoodItemsType, RestaurantType } from "@/utils/type";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";

const foodItems: FoodItemsType[] = await fetchFoodItemsSanity();
const resturents: RestaurantType[] = await fetchRestaurantFromSanity();

async function foodItem(slug: any) {
  return foodItems.filter((item) => item.restaurantname === slug);
}

async function productDescription(slug: any) {
  return resturents.filter((item) => item.slug.current === slug);
}

export default async function Description({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await productDescription(params.slug)) as RestaurantType[];
  const foodData: FoodItemsType[] = await foodItem(params.slug);
  
  // console.log("aneelaaanag", foodData);

  // console.log("weldon", data);
  return (
    <>
      <div>slug:{params.slug}</div>
      <section className="main flex gap-4 flex-col">
        {data.map((item, index) => {
          return (
            <span key={index}>
              <div className="img">
                <Image
                  src={urlForImage(item.image)}
                  alt="image"
                  height={500}
                  width={500}
                  className="object-cover w-full h-64 rounded-xl"
                />
              </div>
              <div className="name mt-7">
                <h1 className="font-bold text-4xl">{item.name}</h1>
              </div>
              <div className="review flex items-center my-2 gap-3 text-gray-500">
                <Star className="fill-amber-300 size-6 " />
                <p>4.5 (56)</p>
              </div>
              <div className="location flex items-center gap-3 text-gray-500">
                <MapPin />
                <p>{item.address}</p>
              </div>
            </span>
          );
        })}

        <CardDescription foodData={foodData} data={data} />
      </section>
    </>
  );
}
