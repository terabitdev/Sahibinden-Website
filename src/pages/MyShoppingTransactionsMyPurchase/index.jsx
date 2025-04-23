import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsMyPurchaseCard from "../../components/MyShoppingTransactionsMyPurchaseCard";
import MyshoppingtransactionsmypurchaseColumn from "./MyshoppingtransactionsmypurchaseColumn";
import MyshoppingtransactionsmypurchaseExpandablelistm from "./MyshoppingtransactionsmypurchaseExpandablelistm";
import React, { Suspense } from "react";
const data = [
  {
    highettCommon: "images/img_image_500x426.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Cost $700,000",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
    brochure: "Brochure",
  },
  {
    highettCommon: "images/img_image_1.png",
    house: "House",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
    price: "Cost $700,000",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
    brochure: "Brochure",
  },
  {
    highettCommon: "images/img_image_500x426.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Cost $700,000",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
    brochure: "Brochure",
  },
];
export default function MyShoppingTransactionsMyPurchasePage() {
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
      <div className="flex w-full flex-col gap-[88px] bg-white md:gap-[66px] sm:gap-11">
        {" "}
        <Header />{" "}
        <div className="flex flex-col gap-[90px] md:gap-[67px] sm:gap-[45px]">
          {" "}
          <div className="flex items-start justify-center gap-[30px] md:flex-col">
            {" "}
            <MyshoppingtransactionsmypurchaseExpandablelistm />{" "}
            <div className="flex flex-1 flex-col items-start gap-3 self-center md:self-stretch md:px-5">
              {" "}
              <Heading
                size="text7xl"
                as="h1"
                className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
              >
                {" "}
                My Purchase Transactions{" "}
              </Heading>{" "}
              <div className="flex w-full gap-10 overflow-x-scroll md:flex-col">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <MyShoppingTransactionsMyPurchaseCard
                      {...d}
                      key={"listhighett" + index}
                    />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmypurchaseColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
