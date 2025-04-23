import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsMySalesCard from "../../components/MyShoppingTransactionsMySalesCard";
import MyshoppingtransactionsmysalesColumn from "./MyshoppingtransactionsmysalesColumn";
import React, { Suspense } from "react";
const data = [
  {
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Sold For $700,000",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
    brochure: "Brochure",
  },
  {
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Sold For $700,000",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
    brochure: "Brochure",
  },
  {
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    price: "Sold For $700,000",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
    brochure: "Brochure",
  },
];
export default function MyShoppingTransactionsMySalesPage() {
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
        <div className="flex flex-col gap-[158px] md:gap-[118px] sm:gap-[79px]">
          {" "}
          <div className="flex items-start justify-center gap-[30px] md:flex-col">
            {" "}
            <div className="flex w-[20%] flex-col items-end md:w-full md:px-5">
              {" "}
              <div className="flex w-[88%] items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5 md:w-full">
                {" "}
                <Text
                  size="text2xl"
                  as="p"
                  className="mt-1 text-[18.64px] font-normal !text-white"
                >
                  {" "}
                  My Money is Safe{" "}
                </Text>{" "}
                <Img
                  src="images/img_arrow_up.svg"
                  alt="Arrowup"
                  className="mb-1.5 h-[18px]"
                />{" "}
              </div>{" "}
              <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[15px] font-normal capitalize"
                  >
                    {" "}
                    My Purchase Transactions{" "}
                  </Text>{" "}
                </a>{" "}
              </div>{" "}
              <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
                {" "}
                <Text
                  size="textlg"
                  as="p"
                  className="text-[15px] font-normal capitalize !text-primary_colors-900"
                >
                  {" "}
                  My sales transactions{" "}
                </Text>{" "}
              </div>{" "}
              <div className="flex h-[56px] w-[88%] items-center justify-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat p-4 md:h-auto md:w-full">
                {" "}
                <div className="flex w-full items-center justify-between gap-5">
                  {" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal capitalize"
                    >
                      {" "}
                      Comment Management{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Image"
                    className="h-[18px]"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[15px] font-normal capitalize"
                  >
                    {" "}
                    My delivery / billing addresses{" "}
                  </Text>{" "}
                </a>{" "}
              </div>
              <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[15px] font-normal capitalize"
                  >
                    {" "}
                    My bank Information{" "}
                  </Text>{" "}
                </a>{" "}
              </div>{" "}
              <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[15px] font-normal capitalize"
                  >
                    {" "}
                    My head office address{" "}
                  </Text>{" "}
                </a>{" "}
              </div>{" "}
              <div className="flex items-center gap-3.5 border border-solid border-primary_colors-900 bg-white p-3">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="text-[18.64px] font-normal"
                  >
                    {" "}
                    Brand New Transactions{" "}
                  </Text>{" "}
                </a>{" "}
                <Img
                  src="images/img_frame_primary_colors_900_18x18.svg"
                  alt="Image"
                  className="h-[18px] self-end"
                />{" "}
              </div>{" "}
              <div className="flex w-[88%] items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-3 md:w-full">
                {" "}
                <Text
                  size="text2xl"
                  as="p"
                  className="text-[18.64px] font-normal"
                >
                  {" "}
                  Safe E-Commerce{" "}
                </Text>{" "}
                <Img
                  src="images/img_frame_primary_colors_900_18x18.svg"
                  alt="Image"
                  className="h-[18px]"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-1 flex-col items-start gap-5 self-center md:self-stretch md:px-5">
              {" "}
              <Heading
                size="text7xl"
                as="h1"
                className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
              >
                {" "}
                My Sales Transactions{" "}
              </Heading>{" "}
              <div className="flex w-full gap-10 overflow-x-scroll md:flex-col">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <MyShoppingTransactionsMySalesCard
                      {...d}
                      key={"listhighett" + index}
                    />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmysalesColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
