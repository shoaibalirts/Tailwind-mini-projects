"use client";
import ProductModalCard from "./ProductModalCard";
export default function ProductModalComp() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 pt-4 text-black md:flex-row">
        {/* Card */}
      <ProductModalCard />
      {/* <ProductModalCard /> */}

    </div>
  );
}
