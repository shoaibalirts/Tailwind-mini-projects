"use client";
import Image from "next/image";
export default function ProductModalComp() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-black md:flex-row">
      <div className="relative h-80 w-[400px] md:h-64">
        <Image
          src="/assets/headphone.png"
          layout="fill"
          objectFit="contain"
          priority
          alt="headphone"
        />
      </div>
      <p className="">free shipping</p>
      <p className="">Razer kraken kitty edit gaming headset quartz</p>
      <p className="">$799</p>
      <p className="">$599</p>
      <p className="">
        The offer is valid until April 3 or as long as stock lasts!
      </p>
      <button className="">Add tto cart</button>
      <p>50+ pcs. in stock</p>
      <button>
        <div className="flex flex-row">
          <div className="relative h-4 w-4 md:h-64">
            <Image
              src="/assets/weight.png"
              layout="fill"
              objectFit="contain"
              priority
              alt="weight"
            />
          </div>
          <p>Add to cart</p>
        </div>
      </button>
      <button className="flex flex-row">
        <div className="flex flex-row">
          <div className="relative h-4 w-4 md:h-64">
            <Image
              src="/assets/heart.png"
              layout="fill"
              objectFit="contain"
              priority
              alt="heart"
            />
          </div>
          <p>Add to wishlist</p>
        </div>
      </button>
    </main>
  );
}
