import Catagory from "@/components/ui/Catagory";
import { RestaurantType } from "@/utils/type";

import RestuItems from "@/components/ui/RestuItems";
import { fetchRestaurantFromSanity } from "@/lib/fetchingResturent";
const resturents: RestaurantType[] = await fetchRestaurantFromSanity();

async function resturentProducts(slug: string) {
  return resturents.filter((item) => item.catagory === slug);
}
export default async function Restaurant({
  params,
}: {
  params: { catagory: string };
}) {
  const data = (await resturentProducts(params.catagory)) as RestaurantType[];

  // console.log("aneelanasir", data);
  return (
    <div>
      <Catagory />
      catagory:{params.catagory}
      <div className="main my-8">
        <h1 className="text-3xl font-bold">
          Popular {params.catagory} Restaurants
        </h1>
        <p className="text-red-500 font-semibold">{data.length} Result</p>
        {data.length > 1 ? (
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
        ) : (
          <div className="text-4xl text-center mt-10">
            {params.catagory} food Restaurant is not available Right Now{" "}
          </div>
        )}
      </div>
    </div>
  );
}
