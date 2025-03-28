import Footer from "@/components/Footer";
import ProductModalComp from "@/components/productmodal/ProductModalComp";
import { GiHamburgerMenu } from "react-icons/gi";

export const metadata = {
  title: "Product",
  description: "Generated by create next app",
};
export default function ProductModal() {
  return (
    <>
      {/* <header>
        <div className="flex justify-end pr-12 text-black"> 
          <GiHamburgerMenu className="w-20 h-20" />
        </div>
        <ul className="bg-slate-800 text-white flex flex-col items-end p-12 space-y-4 md:flex-row md:justify-end md:space-y-0 md:space-x-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </header> */}
      <main>
        <ProductModalComp />
      </main>
      <Footer />
    </>
  );
}
