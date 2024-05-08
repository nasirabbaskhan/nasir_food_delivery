import { client } from "../../sanity/lib/client";

export const fetchRestaurantFromSanity = async () => {
  const res = await client.fetch(
    "*[_type=='restaurant']{description,image,_id,catagory,address,country,name}",
    {},
    { cache: "no-cache" }
  );
  return res;
};