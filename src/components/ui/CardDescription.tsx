"use client";
import PortableText from "react-portable-text"; // to show sanity ritch text
import { Star } from "lucide-react";
import { useState } from "react";
import FoodItemsCard from "./FoodItemsCard";
import { Button } from "@/components/ui/button";
import ReviewCardItems from "./ReviewCardItems";
import { FoodItemsType, RestaurantType } from "@/utils/type";

export default function CardDescription({
  foodData,
  data,
}: {
  foodData: FoodItemsType[];
  data: RestaurantType[];
}) {
  // console.log("next aneela data", foodData);
  const [selectedCatagory, SetSelectedCatagory] = useState(true);
  const [selectedAbout, SetSelectedAbout] = useState(false);
  const [selectedReviews, SetSelectedReviews] = useState(false);
  const handleCatagory = () => {
    SetSelectedCatagory(true);
    SetSelectedAbout(false);
    SetSelectedReviews(false);
  };
  const handleAbout = () => {
    SetSelectedCatagory(false);
    SetSelectedAbout(true);
    SetSelectedReviews(false);
  };
  const handleReviews = () => {
    SetSelectedCatagory(false);
    SetSelectedAbout(false);
    SetSelectedReviews(true);
  };
  return (
    <section>
      <div className="card bg-gray-100 flex p-1 max-w-[266px] rounded-md mt-5 ">
        <div>
          <p
            onClick={handleCatagory}
            className={`text-md py-1 px-3  cursor-pointer rounded-md ${selectedCatagory ? "bg-white" : ""} `}
          >
            Food{" "}
          </p>
        </div>
        <div>
          <p
            onClick={handleAbout}
            className={`text-md py-1 px-4  cursor-pointer rounded-md ${selectedAbout ? "bg-white" : ""} `}
          >
            About
          </p>
        </div>
        <div>
          <p
            onClick={handleReviews}
            className={`text-md py-1 px-3  cursor-pointer rounded-md ${selectedReviews ? "bg-white" : ""} `}
          >
            Reviews
          </p>
        </div>
      </div>
      {selectedCatagory && (
        <div className="catagory mb-16 mt-5">
          <div className="food mt-3 ">
            <div className="grid grid-cols-2 gap-3">
              {foodData.map((item, index) => {
                return (
                  <>
                    <FoodItemsCard
                    key={index}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      id={item._id}
                      image={item.image}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {selectedAbout && (
        <div className="about mt-4">
          <h1 className="text-xl font-bold">About Me</h1>
          {data?.map((item, index) => {
            return (
              <>
              
                <PortableText
                key={index}
                  content={item.description}
                  className="leading-relaxed"
                />
                ;
              </>
            );
          })}
        </div>
      )}
      {selectedReviews && (
        <div className="reviews mt-10 mb-12">
          <div className="flex gap-7">
            {/* left side*/}

            <div className="left border p-4 flex flex-col w-1/3 rounded-lg shadow-lg">
              <h1 className="font-bold text-xl">Add your review</h1>
              <p className=" flex w-1/3">
                {" "}
                <Star className="fill-amber-300 size-14 " />
                <Star className="fill-amber-300 size-14 " />
                <Star className="fill-amber-300 size-14 " />
                <Star className="fill-amber-300 size-14 " />
                <Star className="fill-amber-300 size-14 " />
              </p>
              <textarea
                className="border mt-3 w-full rounded  p-2"
                name="textarea"
                rows={3}
                id="textarea"
              ></textarea>
              <Button className="w-full mt-7" variant={"destructive"}>
                Submit
              </Button>
            </div>

            {/* right side*/}
            <div className="right gap-4 flex flex-col w-2/3">
              <ReviewCardItems
                userId="nasir@gmail.com"
                userName="nasir abbas"
              />
              <ReviewCardItems
                userId="nasir@gmail.com"
                userName="nasir abbas"
              />
              <ReviewCardItems
                userId="nasir@gmail.com"
                userName="nasir abbas"
              />
              <ReviewCardItems
                userId="nasir@gmail.com"
                userName="nasir abbas"
              />
              <ReviewCardItems
                userId="nasir@gmail.com"
                userName="nasir abbas"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
