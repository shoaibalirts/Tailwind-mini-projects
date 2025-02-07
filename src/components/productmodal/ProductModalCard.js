import Image from "next/image";
import Button from "./Button";

export default function ProductModalCard() {
  return (
    <div className="flex flex-col space-y-10 bg-white p-4 md:flex-row">
      <div className="relative h-80 w-[400px] duration-200 hover:scale-105 md:h-64">
        <Image
          src="/assets/headphone.png"
          layout="fill"
          objectFit="contain"
          priority
          alt="headphone"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center mb-4 space-y-3 md:text-left md:items-start">
        <p className="bg-black text-white w-28 p-2 rounded-full">
          free shipping
        </p>
        <p className="text-2xl w-96">
          Razer kraken kitty edit gaming headset quartz
        </p>
        <p className="line-through">$799</p>
        <p className="text-5xl font-bold">$599</p>
        <p className="text-sm font-light text-gray-400">
          The offer is valid until April 3 or as long as stock lasts!
        </p>

        <button className="w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg">
          <div className="px-8 py-4 bg-blue-500 rounded-lg">Add to cart</div>
        </button>
        <div className="flex items-center space-x-3 group">
          <div className="w-3 h-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
          <p className="text-sm text-gray-500">50+ pcs. in stock</p>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <Button src="weight.png" alt="weight image" text="Add to cart" />
          <Button src="heart.png" alt="heart" text="Add to wishlist" />
        </div>
      </div>
    </div>
  );
}
