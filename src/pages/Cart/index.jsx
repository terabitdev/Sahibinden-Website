import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CartColumn from "./CartColumn";
import CartRowOne from "./CartRowOne";
import CartRowTwo from "./CartRowTwo";
import React from "react";
export default function CartPage() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Sahibinden</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="flex w-full flex-col gap-[90px] bg-white md:gap-[67px] sm:gap-[45px]">
        {" "}
        <Header />{" "}
        <div>
          {" "}
          <CartRowOne /> <CartRowTwo /> <CartColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
