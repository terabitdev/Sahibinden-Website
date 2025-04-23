import { Helmet } from "react-helmet";
import { Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsSummaryRow from "../../components/MyShoppingTransactionsSummaryRow";
import MyshoppingtransactionssummaryColumnOne from "./MyshoppingtransactionssummaryColumnOne";
import React from "react";
export default function MyShoppingTransactionsSummaryPage() {
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
      <div className="flex w-full flex-col gap-[92px] bg-white md:gap-[69px] sm:gap-[46px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-center gap-[30px] md:flex-col">
              {" "}
              <div className="w-[22%] md:w-full">
                {" "}
                <div className="flex items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-2.5">
                  {" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="mt-1 self-end text-[18.64px] font-normal"
                    >
                      {" "}
                      My Money is Safe{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Image"
                    className="h-[18px]"
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-center gap-3.5 border border-solid border-primary_colors-900 bg-white p-3">
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
                    className="mb-1 h-[18px] self-end"
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-3">
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="text-[18.64px] font-normal !text-white"
                  >
                    {" "}
                    Safe E-Commerce{" "}
                  </Text>{" "}
                  <Img
                    src="images/img_arrow_up.svg"
                    alt="Arrowup"
                    className="mb-1 h-[18px] self-end"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="w-[70%] text-[15px] font-normal leading-[22px] !text-primary_colors-900"
                    >
                      {" "}
                      Summary{" "}
                    </Text>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-4">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="w-[28%] text-[15px] font-normal leading-[22px]"
                      >
                        {" "}
                        My Orders{" "}
                      </Text>{" "}
                    </a>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[18px] self-end"
                    />{" "}
                  </div>{" "}
                  <div className="relative z-[1] flex items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-4">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="w-[60%] text-[15px] font-normal leading-[22px]"
                      >
                        {" "}
                        My Sales Transaction{" "}
                      </Text>{" "}
                    </a>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[18px] self-end"
                    />{" "}
                  </div>{" "}
                  <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                    >
                      {" "}
                      My delivery / billing addresses{" "}
                    </Text>{" "}
                  </div>{" "}
                  <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="w-[70%] text-[15px] font-normal capitalize leading-[22px]"
                    >
                      {" "}
                      Comment Management{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Summary{" "}
                </Heading>{" "}
                <div className="flex flex-col gap-[30px] self-stretch">
                  {" "}
                  <MyShoppingTransactionsSummaryRow />{" "}
                  <MyShoppingTransactionsSummaryRow />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionssummaryColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
