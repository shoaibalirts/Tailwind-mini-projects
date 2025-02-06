import PricingGridComp from "@/components/pricinggrid/PricingGridComp";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Pricing",
  description: "Pricing according to the subscription",
};
export default function PricingGrid() {
  return (
    <>
      <PricingGridComp />
      <Footer />
    </>
  );
}
