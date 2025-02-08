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
          <div>
            <div className="rounded-xl bg-gray-100">
              <IoIosClose className="w-10 h-10" />
            </div>
          </div>
          <div className="relative h-80 w-[400px] md:h-64 md:w-[300px]">
            <Image
              src="/assets/imagewater.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="beans"
              className="rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />
          </div>
        </div>
      </div>
    </>
  );
}
