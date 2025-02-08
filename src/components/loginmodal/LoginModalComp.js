"use client";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";

export default function LoginModalComp() {
  return (
    <>
      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="flex flex-row justify-between">
          {/* Left side */}
          <div className="p-6 md:p-20">
            <h2 className={`text-xl font-bold`}>Log In</h2>
            <p>
              Log in to your account to upload or download pictures, videos or
              music
            </p>
          </div>
          {/* Right side */}
          <div className="hidden md:block">
            <div className="relative h-64 w-[430px]">
              <Image
                src="/assets/imagewater.jpg"
                layout="fill"
                objectFit="cover"
                priority
                alt="beans"
              />
            </div>
          </div>
          <button className="absolute top-5 right-4 rounded-xl bg-gray-100 md:top-4">
            <IoIosClose className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  );
}
