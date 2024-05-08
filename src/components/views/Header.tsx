"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between py-2 shadow-lg px-3">
      <div className="logo flex items-center justify-center gap-2">
        <Image
          src={"/logo.png"}
          height={500}
          width={500}
          alt="logo"
          className="md:w-16 w-10"
        />
        <p className="md:text-xl text-lg font-bold"> food app</p>
      </div>

      <div className="hidden md:flex rounded-md p-2 border bg-gray-200 w-72 justify-between ">
        <input
          type="text"
          className="bg-transparent border-none w-full outline-none"
        />
        <Search />
      </div>

      {isSignedIn ? (
        <div className="w-16">
          <UserButton />
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
