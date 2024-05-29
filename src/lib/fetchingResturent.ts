import { client } from "../../sanity/lib/client";

export const fetchRestaurantFromSanity = async () => {
  const res = await client.fetch(
    "*[_type=='restaurant']{description,image,_id,catagory,address,country,name,slug}",
    {},
    { cache: "no-cache" }
  );
  return res;
};
export const fetchFoodItemsSanity = async () => {
  const res = await client.fetch(
    "*[_type=='food']{name,description,type,restaurantname,_id,slug,image,price}",
    {},
    { cache: "no-cache" }
  );
  return res;
};
