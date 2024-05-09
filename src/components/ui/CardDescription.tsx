"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import FoodItemsCard from "./FoodItemsCard";
import { Button } from "@/components/ui/button";
import ReviewCardItems from "./ReviewCardItems";

export default function CardDescription() {
  const [selectedCatagory, SetSelectedCatagory] = useState(false);
  const [selectedAbout, SetSelectedAbout] = useState(false);
  const [selectedReviews, SetSelectedReviews] = useState(false);
  const handleCatagory = () => {
    SetSelectedCatagory(true);
    SetSelectedAbout(false);
    SetSelectedReviews(false);
    console.log("clikjk");
  };
  const handleAbout = () => {
    SetSelectedCatagory(false);
    SetSelectedAbout(true);
    SetSelectedReviews(false);
    console.log("clikjk");
  };
  const handleReviews = () => {
    SetSelectedCatagory(false);
    SetSelectedAbout(false);
    SetSelectedReviews(true);
    console.log("clikjk");
  };
  return (
    <section>
      <div className="card bg-gray-100 flex p-1 max-w-[266px] rounded-md mt-5 ">
        <div>
          <p
            onClick={handleCatagory}
            className={`text-md py-1 px-3  cursor-pointer rounded-md ${selectedCatagory ? "bg-white" : ""} `}
          >
            Catagory
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
        <div className="catagory mb-16">
          <div className="flex gap-5">
            <div className="card hover:bg-gray-100  p-2 min-w-[266px] rounded-md mt-5 ">
              Sandwiches
            </div>
            <div className="card text-xl mt-5  ">Sandwiches</div>
          </div>

          <div className="food mt-3 ml-72">
            <div className="grid grid-cols-2 gap-3">
              <FoodItemsCard
                name="Black Forest Ham"
                price={45}
                description="jjhg bjjhsd mbhsd hhs bjh   jhhsd bsdbnbfbsdn"
              />
              <FoodItemsCard
                name="Black Forest Ham"
                price={45}
                description="jjhg bjjhsd mbhsd hhs bjh   jhhsd bsdbnbfbsdn"
              />
              <FoodItemsCard
                name="Black Forest Ham"
                price={45}
                description="jjhg bjjhsd mbhsd hhs bjh   jhhsd bsdbnbfbsdn"
              />
              <FoodItemsCard
                name="Black Forest Ham"
                price={45}
                description="jjhg bjjhsd mbhsd hhs bjh   jhhsd bsdbnbfbsdn"
              />
            </div>
          </div>
        </div>
      )}
      {selectedAbout && (
        <div className="about mt-4">
          <h1 className="text-xl font-bold">About Me</h1>
          <p className=" text-gray-700 mt-4 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
                className="border  w-full rounded  p-2"
                name="textarea"
                rows={3}
                id="textarea"
              ></textarea>
              <Button className="w-full mt-3" variant={"destructive"}>
                Add
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
