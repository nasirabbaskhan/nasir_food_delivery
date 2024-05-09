import CardDescription from "@/components/ui/CardDescription";
import { fetchRestaurantFromSanity } from "@/lib/fetchingResturent";
import { RestaurantType } from "@/utils/type";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

const resturents: RestaurantType[] = await fetchRestaurantFromSanity();

async function productDescription(slug: any) {
  return resturents.filter((item) => item.slug.current === slug);
}

export default async function Description({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await productDescription(params.slug)) as RestaurantType[];
  // console.log("weldon", data);
  return (
    <>
      <div>slug:{params.slug}</div>
      <section className="main flex gap-4 flex-col">
        <div className="img">
          <Image
            src={"/food_sign_in.webp"}
            alt="image"
            height={500}
            width={500}
            className="object-cover w-full h-64 rounded-xl"
          />
        </div>
        <div className="name">
          <h1 className="font-bold text-4xl">Subway</h1>
        </div>
        <div className="review flex items-center gap-3 text-gray-500">
          <Star className="fill-amber-300 size-6 " />
          <p>4.5 (56)</p>
        </div>
        <div className="location flex items-center gap-3 text-gray-500">
          <MapPin />
          <p>525 N tryon Street, NC 28117</p>
        </div>

        <CardDescription />
      </section>
    </>
  );
}
