"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      hello
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
