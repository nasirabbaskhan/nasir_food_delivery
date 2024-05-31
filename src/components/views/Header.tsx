"use client";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { SignInButton, SignUpButton, UserButton,} from "@clerk/nextjs";
import {useUser} from "@clerk/clerk-react"
import Link from "next/link";

export default function Header() {
  const { user, isSignedIn } = useUser();
  const id = user?.id;
  console.log("userNasirAneela", user?.firstName);
  console.log("isSignedIn", isSignedIn);

  return (
    <div className="flex items-center justify-between py-2 shadow-sm px-3">
      <Link href={"/"}>
        <div className="logo flex items-center justify-center gap-2">
          <Image
            src={"/logo.png"}
            height={500}
            width={500}
            alt="logo"
            className="md:w-16 w-10"
          />
          <p className="md:text-xl text-lg font-bold"> food app </p>
        </div>
      </Link>

      <div className="hidden md:flex rounded-md p-2 border bg-gray-200 w-72 justify-between ">
        <input
          type="text"
          className="bg-transparent border-none w-full outline-none"
        />
        <Search />
      </div>

      {isSignedIn ? (
        <div className="main flex items-center gap-6">
          <div className="addtocart">
          <Link href={"/cart"}> <ShoppingCart className="cursor-pointer" /></Link> 
          </div>
          <div className="rounded-full h-7 w-7 bg-gray-200 flex items-center justify-center">
            <p className="">5</p>
          </div>
          <div className="w-16">
            <UserButton />
          </div>
        </div>
      ) : (
        <div className="signin flex gap-2 ">
          <SignInButton mode="modal">
            <Button variant={"outline"}>Sign In</Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button variant={"destructive"}> sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}
