import Footer from "@/components/Footer";
import LoginModalComp from "@/components/loginmodal/LoginModalComp";

import { Mulish, Rokkitt } from "next/font/google";
const mulishFont = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
const rokkittFont = Rokkitt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rokkitt",
});
export const metadata = {
  title: "Login",
  description: "User needs to enter username and password",
};
export default function LoginModal() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-rose-50">
        {/* <div className={`${mulishFont.variable}`}>
          <p className={`m-6 font-muli font-extrabold text-2xl`}>Hello</p>
        </div>
        <div className={`${rokkittFont.variable}`}>
          <p className={`m-6 font-mono font-[900] text-5xl`}>Hello</p>
        </div> */}
        <LoginModalComp />
      </main>
      <Footer />
    </>
  );
}
