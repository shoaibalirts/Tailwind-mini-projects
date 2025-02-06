import Head from "next/head";
import EmailSubscribeComp from "@/components/emailsubscribe/EmailSubscribeComp";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Subscribe Email",
  description: "Subscribe to Email for newsletter",
};
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
