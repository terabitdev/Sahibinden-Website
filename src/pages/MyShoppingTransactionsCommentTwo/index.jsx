import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsCommentOneCard from "../../components/MyShoppingTransactionsCommentOneCard";
import MyshoppingtransactionscommenttwoColumn from "./MyshoppingtransactionscommenttwoColumn";
import MyshoppingtransactionscommenttwoExpandablelistm from "./MyshoppingtransactionscommenttwoExpandablelistm";
import React, { Suspense } from "react";
const data = [
  {
    highettCommon: "images/img_frames_for_your_500x426.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Sold For $700,000",
    thirteen: "1-3",
    p13one: "1-3",
    p13two: "1-3",
    brochure: "Brochure",
  },
  {
    highettCommon: "images/img_frames_for_your_500x426.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Sold For $700,000",
    thirteen: "1-3",
    brochure: "Brochure",
  },
  {
    highettCommon: "images/img_image_2.png",
    house: "House",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
    price: "from $700,000",
    thirteen: "1-3",
    p13one: "1-3",
    p13two: "1-3",
    brochure: "Brochure",
  },
];
export default function MyShoppingTransactionsCommentTwoPage() {
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
        <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
          {" "}
          <div className="flex items-start justify-center gap-[30px] md:flex-col">
            {" "}
            <MyshoppingtransactionscommenttwoExpandablelistm />{" "}
            <div className="flex flex-1 flex-col items-start gap-5 self-center md:self-stretch md:px-5">
              {" "}
              <Heading
                size="text7xl"
                as="h1"
                className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Products I Sell{" "}
              </Heading>{" "}
              <div className="flex w-full gap-10 overflow-x-scroll md:flex-col">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <MyShoppingTransactionsCommentOneCard
                      {...d}
                      key={"listhighett" + index}
                    />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionscommenttwoColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
