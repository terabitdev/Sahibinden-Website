import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdmanagementbuynowColumnOne from "./AdmanagementbuynowColumnOne";
import AdmanagementbuynowRowOne from "./AdmanagementbuynowRowOne";
import React from "react";
export default function AdManagementBuyNowPage() {
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
      <div className="flex w-full flex-col gap-[82px] bg-white md:gap-[61px] sm:gap-[41px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col gap-[66px] sm:gap-[33px]">
          {" "}
          <AdmanagementbuynowRowOne /> <AdmanagementbuynowColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
