"use client";
import Footer from "@/components/Footer";
import { FormDailog } from "@/components/Form";
import Reviews from "@/components/Reviews";
import Spinner from "@/components/Spinner";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { CiCircleCheck, CiHeart } from "react-icons/ci";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Page() {
  const { user } = useUser();
  const OPTIONS = { loop: true };
  const SLIDES = Array.from(Array(5).keys());
  return (
    <div className="min-h-screen bg-[#e8e6d7] py-6 flex flex-col gap-6 px-4 lg:px-16 md:px-10 sm:px-8">
      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl md:w-3/4 sm:w-3/5 w-full h-72 bg-[#3c4627] flex flex-col items-center justify-center text-white text-[7vw] md:text-[2.6vw] sm:text-[4vw]">
          <div className="flex gap-4 items-center justify-center">
            Measure all the
            <div className="sm:h-9 h-7 w-14 relative">
              <Image
                src={"/avatar.webp"}
                fill
                alt="notfound"
                className=" object-cover rounded-sm"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="sm:h-9 h-7 w-20 relative">
              <Image
                src={"/avatar.webp"}
                fill
                alt="notfound"
                className=" object-cover rounded-sm"
              />
            </div>
            Mindful Choices
          </div>
        </div>
        <div className="rounded-xl md:w-1/4 w-2/5 sm:block hidden h-72 bg-black relative p-4">
          <Image
            src={"/avatar.webp"}
            fill
            alt="notfound"
            className="object-cover opacity-60 rounded-xl"
          />
          <div className="absolute bottom-2 text-xl text-white ">
            <p className="flex flex-col">
              <span className="font-medium text-2xl text-[#dbe99e]">
                Reduce
              </span>
              Reuse, Rethink
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 lg:flex-row flex-col">
        <div className="rounded-xl lg:w-[60%] w-full h-72 bg-[#b5bf96] md:p-10 sm:p-8 p-6 flex gap-6">
          <Reviews slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="rounded-xl lg:w-[45%] w-full sm:w-5/6 h-72 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6 h-full w-full">
            <div className="bg-[#e0dfce] w-[40%] h-full rounded-xl p-10 sm:block hidden">
              <div className="h-full w-full bg-[#3c4627] rounded-xl text-3xl text-white flex items-center justify-center">
                N
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-4 justify-between">
              <div className="rounded-xl bg-white h-full w-full flex items-center p-2 gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <ClerkLoading>
                    <Spinner color="dark:text-white text-black" />
                  </ClerkLoading>
                  <ClerkLoaded>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                      <Image
                        alt="notfound"
                        src={"/avatarDummy.avif"}
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                    </SignedOut>
                  </ClerkLoaded>
                </div>
                <div className="flex flex-col w-full">
                  <span>
                    <SignedIn>{user?.fullName}</SignedIn>
                    <SignedOut>Guest User</SignedOut>
                  </span>
                  <span className="text-xs flex items-center justify-center rounded cursor-pointer w-fit text-neutral-600">
                    <ClerkLoaded>
                      <SignedIn>
                        since: {user?.createdAt.toLocaleDateString()}
                      </SignedIn>
                    </ClerkLoaded>
                  </span>
                </div>
                <div className="">
                  <IoEllipsisVertical />
                </div>
              </div>
              <div className="h-full w-full bg-[#e0dfce] rounded-xl flex items-center justify-evenly">
                <span className="text-xs bg-white rounded-lg p-1 px-2">
                  Fullfiled
                </span>
                <span className="text-xs bg-white rounded-lg p-1 px-2">
                  Completed
                </span>
                <span className="text-xs bg-white rounded-lg p-1 px-2">
                  Cancelled
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 h-full w-full">
            <div className="bg-[#e0dfce] w-[40%] h-full rounded-xl p-10 relative sm:block hidden">
              <Image
                src={"/avatar.webp"}
                alt="not found"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className=" h-full w-full flex flex-col gap-4 justify-between">
              <div className="h-full w-full flex items-center justify-center bg-[#e0dfce] rounded-xl">
                <ClerkLoading>
                  <Spinner color="black" />
                </ClerkLoading>
                <ClerkLoaded>
                  <SignedIn>
                    <SignOutButton>
                      <div className="h-full w-full bg-[#e0dfce] rounded-xl flex items-center justify-center text-xl text-[#526527] px-4 font-medium hover:bg-[#d4d3bb] cursor-pointer">
                        <span className="sr-only">LogOut</span>
                        <span>Logout</span>
                      </div>
                    </SignOutButton>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton afterSignInUrl="/" mode="modal">
                      <div className="h-full w-full bg-[#e0dfce] rounded-xl flex items-center justify-center text-xl text-[#526527] px-4 font-medium hover:bg-[#d4d3bb] cursor-pointer">
                        SignIn / SignUp
                      </div>
                    </SignInButton>
                  </SignedOut>
                </ClerkLoaded>
              </div>
              <div className="h-full w-full bg-white rounded-xl p-4">
                <div className="bg-[#e0dfce] h-full w-full rounded-lg flex items-center justify-evenly text-sm p-1 text-center">
                  <span className="w-full cursor-pointer">Dashboard</span>
                  <FormDailog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-[10vw]">B-Shaw</h1>
        <div className="h-[50vh] relative w-full ">
          <Image
            src={"/mainLogo.png"}
            alt="notfound"
            fill
            className="object-contain"
          />
        </div>
        <div className="my-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          laboriosam! Ad distinctio reiciendis autem, labore minima quam facere
          nisi nulla iusto iste dignissimos explicabo nam porro accusamus
          quibusdam vitae. Eveniet! Lorem ipsum dolor sit amet
        </div>
      </section>
      <Footer/>
    </div>
  );
}
