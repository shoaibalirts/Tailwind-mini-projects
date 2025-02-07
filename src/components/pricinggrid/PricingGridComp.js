"use client";
import PricingGridCard from "./pricingGridCard";
export default function PricingGridComp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      {/* inner Container */}
      <div className="flex flex-col my-6 space-y-6 bg-slate-800 md:flex-row md:space-x-6 md:my-0">
        <PricingGridCard
          type="basic"
          datacapacity="100GB"
          price="1.99"
          cardOuterContainerBorderColor="border-slate-700"
          btnBackground="border-slate-700"
          btnBorderColor="border-violet-600"
        />
        <PricingGridCard
          type="standard"
          datacapacity="200GB"
          price="3.99"
          cardOuterContainerBorderColor="border-blue-500"
          btnBackground="bg-blue-700"
          btnBorderColor="border-blue-500"
        />
        <PricingGridCard
          type="premium"
          datacapacity="2TB"
          price="8.99"
          cardOuterContainerBorderColor="border-gray-500"
          btnBackground="border-slate-700"
          btnBorderColor="border-violet-600"
        />
      </div>
    </div>
  );
}
