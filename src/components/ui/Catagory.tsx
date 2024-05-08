import React from "react";
import { client } from "../../../sanity/lib/client";
import { Catagory as CatagoryItems } from "@/utils/type";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

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
  const catagory: CatagoryItems[] = await fetchCatagoryFromSanity();
  return (
    <>
      <div className="">
        {catagory.map((item, index) => {
          return (
            <span key={index}>
              <div className="main flex flex-col justify-center border p-3 w-20">
                <div className="">
                  <Image
                    src={urlForImage(item.image)}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-16"
                  />
                </div>
                <div className="">{item.name}</div>
              </div>
            </span>
          );
        })}

        <div className="name"></div>
      </div>
    </>
  );
}
