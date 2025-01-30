import { IoMdCheckmark } from "react-icons/io";

export default function PriceGrid({
  type,
  datacapacity,
  price,
  cardOuterContainerBorderColor,
  btnBackground,
  btnBorderColor,
}) {
  return (
    // Card Outer Container
    <div
      className={`border-8 rounded-xl ${cardOuterContainerBorderColor} p-8 mx-3 mt-3`}
    >
      {/* Card Inner Container */}
      <div className="bg-slate-800 text-center">
        <p className="text-lg pt-4 uppercase">{type}</p>
        <h2 className="mt-10 text-5xl">{datacapacity}</h2>
        <p className="mt-2 text-sm leading-[8px]">${price}/month</p>
        <div className="flex justify-center">
          <a
            href="#"
            className={`inline-block px-10 py-3 my-6 border rounded ${btnBorderColor} ${btnBackground} rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800`}
          >
            Purchase
          </a>
        </div>
      </div>

      {/* Border */}
      <div className="border-t border-slate-700">
        {/* Lower Container */}
        <div className="p-8 mx-3 rounded-b-xl bg-slate-800">
          {/* List Container */}
          <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
          <IoMdCheckmark />
          <p>{datacapacity} storage</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <IoMdCheckmark />
          <p>Option to add members</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <IoMdCheckmark />
          <p>Extra member benefits</p>
        </div>
        </div>
      </div>
    </div>
  );
}

/*
<div
      className={`flex flex-col items-center justify-center border-4 ${cardBorderColor} font-bold`}
    >
      <p className="text-lg pt-4 uppercase">{type}</p>
      <p className="text-3xl mt-8">{datacapacity}</p>
      <p className="text-sm leading-[8px] mt-1">${price}/month</p>
      <a href="#"
        className={`mt-8 mb-0 p-4 py-2 border rounded ${btnBorderColor} ${btnBackground} transform hover:scale-105 hover:duration-300 hover:bg-black md:mb-24`}
      >
        Purchase
      </a>
      <div className="p-2 border-t-2 border-gray-500 space-y-4">
        <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
          <IoMdCheckmark />
          <p>{datacapacity} storage</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <IoMdCheckmark />
          <p>Option to add members</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <IoMdCheckmark />
          <p>Extra member benefits</p>
        </div>
      </div>
    </div>
*/
