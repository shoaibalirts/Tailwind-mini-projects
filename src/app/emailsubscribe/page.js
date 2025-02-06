import Head from "next/head";
import EmailSubscribeComp from "@/components/emailsubscribe/EmailSubscribeComp";
import Footer from "@/components/Footer";

export default function EmailSubscribe() {
  return (
    <>
      <Head>
        <title>Email Subscribe</title>
      </Head>
      <EmailSubscribeComp />
      <Footer />
    </>
  );
}
