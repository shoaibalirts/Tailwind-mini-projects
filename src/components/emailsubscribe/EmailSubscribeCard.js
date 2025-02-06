import Image from "next/image";
export default function EmailSubscribeCard() {
  return (
    <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
      {/* Flex-Container */}
      <div className="flex flex-col md:flex-row rounded-l-xl">
        {/* Image component should have a container that has position as relative */}
        <div className="relative h-80 w-[400px] md:h-64 md:w-[300px]">
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
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-white placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
            />
            <button className="px-5 p-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white md:ml-4 duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
