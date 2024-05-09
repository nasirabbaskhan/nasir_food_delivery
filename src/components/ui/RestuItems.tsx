import { Star } from "lucide-react";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
interface Iprops {
  name: string;
  country: string;
  catagory: string;
  image: IImage;
  slug: string;
}

export default function RestuItems(props: Iprops) {
  return (
    <Link href={`/description/${props.slug}`}>
      <div className="card  p-4  hover:border hover:bg-amber-100/45 hover:border-red-400   hover:rounded-xl ">
        <div className="img">
          <Image
            src={urlForImage(props.image)}
            alt="restoImage"
            width={500}
            height={500}
            className="object-cover max-h-32 "
          />
        </div>
        <div className="name">
          <p className="font-semibold text-xl mt-3">{props.name}</p>
          <p>{props.slug}</p>
        </div>
        <div className="review flex items-center justify-between mt-2">
          <div className="flex gap-3">
            <Star className="fill-amber-300 size-5 " />
            <p>4.5 {props.country}</p>
          </div>
          <p>{props.catagory}</p>
        </div>
      </div>
    </Link>
  );
}
