import { IoMdCheckmark } from "react-icons/io";

export default function PriceGrid({
  type,
  datacapacity,
  price,
  cardBorderColor,
  btnBackground,
  btnBorderColor,
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 border-4 ${cardBorderColor} font-bold`}
    >
      <p className="text-lg pt-4 uppercase">{type}</p>
      <p className="text-3xl mt-8">{datacapacity}</p>
      <p className="text-sm leading-[8px] mt-1">${price}/month</p>
      <button
        className={`mt-8 p-4 py-2 border rounded ${btnBorderColor} ${btnBackground} transform hover:scale-105 hover:duration-300 hover:bg-black`}
      >
        Purchase
      </button>
      <div className="p-2 mt-24 border-t-2 border-gray-500 space-y-4">
        <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
          <IoMdCheckmark />
          <p>{datacapacity}GB storage</p>
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
  );
}
