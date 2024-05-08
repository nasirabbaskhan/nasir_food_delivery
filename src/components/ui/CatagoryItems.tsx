"use client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { Image as IImage } from "sanity";
import Link from "next/link";
interface Iprops {
  image: IImage;
  name: string;
  slug: string;
}

export default function CatagoryItems(props: Iprops) {
  return (
    <Link href={`restaurant/${props.slug}`}>
      <div className="main  flex flex-col justify-center items-center gap-3 border p-4 w-[114px] shadow-md h-[109px] rounded hover:border-red-300 hover:bg-gray-200">
        <div className="">
          <Image
            src={urlForImage(props.image)}
            alt="image"
            width={500}
            height={500}
            className="w-16"
          />
        </div>
        <div className="">{props.name}</div>
      </div>
    </Link>
  );
}
