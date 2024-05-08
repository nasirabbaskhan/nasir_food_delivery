import { client } from "../../../sanity/lib/client";
import { CatagoryType } from "@/utils/type";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import CatagoryItems from "./CatagoryItems";

const fetchCatagoryFromSanity = async () => {
  const res = await client.fetch(
    '*[_type=="catagory"]{image,name,slug}',
    {},
    {
      cache: "no-cache",
    }
  );
  return res;
};
export default async function Catagory() {
  const catagory: CatagoryType[] = await fetchCatagoryFromSanity();
  return (
    <>
      <div className="flex gap-3 mt-4 cursor-pointer">
        {catagory.map((item, index) => {
          return (
            <CatagoryItems
              image={item.image}
              name={item.name}
              slug={item.slug.current}
            />
          );
        })}
      </div>
    </>
  );
}
