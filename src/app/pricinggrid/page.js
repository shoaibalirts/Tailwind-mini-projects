import PriceGrid from "@/components/pricegrid";
import Head from "next/head";

export default function PricingGrid() {
  return (
    <>
      <Head>
        <title>Pricing Grid</title>
      </Head>

      {/* global Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        {/* inner Container */}
        <div className="flex flex-col my-6 space-y-6 md:flex-row bg-slate-800 md:space-x-6 md:my-0">
          <PriceGrid
            type="basic"
            datacapacity="100GB"
            price="1.99"
            cardOuterContainerBorderColor="border-slate-700"
            btnBackground="border-slate-700"
            btnBorderColor="border-violet-600"
          />
          <PriceGrid
          type="standard"
          datacapacity="200GB"
          price="3.99"
          cardOuterContainerBorderColor="border-blue-500"
          btnBackground="bg-blue-700"
          btnBorderColor="border-blue-500"
        />
        <PriceGrid
          type="premium"
          datacapacity="2TB"
          price="8.99"
          cardOuterContainerBorderColor="border-gray-500"
          btnBackground="border-slate-700"
          btnBorderColor="border-violet-600"
        />
        </div>
      </div>
    </>
  );
}

/*
<div className="flex flex-col p-2 border-4 border-blue-500 font-bold">
          <p className="text-lg">standard</p>
          <p className="text-3xl">200GB</p>
          <p>$3.99/month</p>
          <button className="p-4 py-2 border rounded border-zinc-700 bg-blue-500 ">
            Purchase
          </button>
          <div>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <IoMdCheckmark />
              <p>200GB storage</p>
            </div>
            <div>
              <IoMdCheckmark />
              <p>Option to add members</p>
            </div>
            <div>
              <IoMdCheckmark />
              <p>Extra member benefits</p>
            </div>
          </div>
        </div>
*/

/*
<div className="flex flex-col p-2 border-4 border-gray-500">
          <p>basic</p>
          <p>2TB</p>
          <p>$8.99/month</p>
          <button>Purchase</button>
          <div>
            <div>
              <IoMdCheckmark />
              <p>100GB storage</p>
            </div>
            <div>
              <IoMdCheckmark />
              <p>Option to add members</p>
            </div>
            <div>
              <IoMdCheckmark />
              <p>Extra member benefits</p>
            </div>
          </div>
        </div>
*/
