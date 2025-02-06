import Head from "next/head";
import PricingGridComp from "@/components/pricinggrid/PricingGridComp";
import Footer from "@/components/Footer";
export default function PricingGrid() {
  return (
    <>
      <Head>
        <title>Pricing Grid</title>
      </Head>
      <PricingGridComp />
      <Footer />
    </>
  );
}
