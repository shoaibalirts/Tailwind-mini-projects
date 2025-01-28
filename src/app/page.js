"use client";
import Image from "next/image";

export default function Home() {
  return (
    // Background Container
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      {/* Card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* Flex-Container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          {/* Image component should have a container that has position as relative */}
          <div className="relative h-80 w-[400px] md:h-64">
            <Image
              src="/assets/image.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="beans"
              className="rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />
          </div>
          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter
            </p>
            <div className="flex flex-col mt-5 space-y-4 md:space-3 md:flex-row md:space-y-0">
              <input type="text" placeholder="Enter your email address" className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-red-500 placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none" />
              <button className="px-5 p-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white md:ml-4 duration-500">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<section className="container w-1/2 ml-72 mt-36 bg-slate-300 rounded-lg">
      <div className="flex gap-4">
        <Image
          className="m-1 rounded-lg"
          src="/assets/image.jpg"
          alt="beans"
          width={200}
          height={200}
        />
        <article>
          <h1 className="text-white text-2xl font-bold mt-12">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="text-white mt-4 w-96">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>
          <form className="inline w-24 gap-2">
            <input
              className="appearance-none mt-8 border-2 p-5 bg-slate-300 focus:text-white active:border-red-300"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <span>
              <button className="p-5 border-2 border-white bg-yellow-100 rounded ml-2">
                Subscribe
              </button>
            </span>
          </form>
        </article>
      </div>
    </section>
*/
