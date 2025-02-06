import Image from "next/image";

export default function ProductModalCard(){
    return (
        <div className="flex flex-col  space-y-10 bg-white p-4 md:flex-row">
        <div className="relative h-80 w-[400px] md:h-64">
          <Image
            src="/assets/headphone.png"
            layout="fill"
            objectFit="contain"
            priority
            alt="headphone"
          />
        </div>
        <div className="flex flex-col justify-center text-center">
          <p className="">free shipping</p>
          <p className="">Razer kraken kitty edit gaming headset quartz</p>
          <p className="">$799</p>
          <p className="">$599</p>
          <p className="">
            The offer is valid until April 3 or as long as stock lasts!
          </p>

          <button className="">Add to cart</button>
          <p>50+ pcs. in stock</p>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <button className="flex flex-row items-center justify-center">
              <div className="relative h-4 w-4">
                <Image
                  src="/assets/weight.png"
                  layout="fill"
                  objectFit="contain"
                  priority
                  alt="weight"
                />
              </div>
              <p>Add to cart</p>
            </button>
            <button className="flex flex-row items-center justify-center">
              <div className="flex flex-row  items-center justify-center">
                <div className="relative h-4 w-4">
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
          </div>
        </div>
      </div>
    );
}