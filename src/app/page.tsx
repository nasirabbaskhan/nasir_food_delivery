import Catagory from "@/components/ui/Catagory";

import { Button } from "@/components/ui/button";
import Restaurant from "@/components/views/Restaurant";
import { SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Catagory />
      <Restaurant />
      
    </>
  );
}
