import { Helmet } from "react-helmet";
import { Text, SelectBox, Img, Button, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsMyCurrentRowzipcode from "../../components/MyShoppingTransactionsMyCurrentRowzipcode";
import MyshoppingtransactionsmycurrentColumnOne from "./MyshoppingtransactionsmycurrentColumnOne";
import MyshoppingtransactionsmycurrentExpandablelistm from "./MyshoppingtransactionsmycurrentExpandablelistm";
import React, { Suspense } from "react";
const data = [
  {
    zipcode: "12109",
    building: "Building",
    threeMillionTwoHundredTwoThousandTwentyFive: "3/20/2025",
    tl333: "TL333",
  },
  {
    zipcode: "12109",
    building: "Building",
    threeMillionTwoHundredTwoThousandTwentyFive: "3/20/2025",
    tl333: "TL333",
  },
  {
    zipcode: "12109",
    building: "Building",
    threeMillionTwoHundredTwoThousandTwentyFive: "3/20/2025",
    tl333: "TL333",
  },
  {
    zipcode: "12109",
    building: "Building",
    threeMillionTwoHundredTwoThousandTwentyFive: "3/20/2025",
    tl333: "TL333",
  },
  {
    zipcode: "12109",
    building: "Building",
    threeMillionTwoHundredTwoThousandTwentyFive: "3/20/2025",
    tl333: "TL333",
  },
  {
    zipcode: "12109",
    building: "Building",
    threeMillionTwoHundredTwoThousandTwentyFive: "3/20/2025",
    tl333: "TL333",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function MyShoppingTransactionsMyCurrentPage() {
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
        <div className="flex flex-col gap-[50px]">
          {" "}
          <div className="ml-7 mr-10 flex items-center gap-10 md:mx-0 md:flex-col">
            {" "}
            <div className="relative h-[662px] w-[22%] content-end self-end md:h-auto md:w-full md:px-5">
              {" "}
              <div className="mx-auto mb-[54px] flex flex-1 border border-solid border-primary_colors-900 bg-white px-5 py-4">
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
              <MyshoppingtransactionsmycurrentExpandablelistm />{" "}
            </div>
            <div className="mb-6 flex-1 md:self-stretch md:px-5">
              {" "}
              <div>
                {" "}
                <div className="flex flex-col items-start gap-5">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h1"
                    className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    My Current Orders{" "}
                  </Heading>{" "}
                  <div className="flex flex-col items-start gap-5 self-stretch">
                    {" "}
                    <Input
                      size="4xl"
                      shape="round"
                      name="group"
                      placeholder={`Among my current orders, with the ad no.`}
                      className="self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-3.5 capitalize !text-blue_gray-400"
                    />{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[124px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                    >
                      {" "}
                      Search{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-[30px] flex flex-col items-end">
                  {" "}
                  <div className="flex items-center justify-between gap-5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 bg-white px-2.5 py-3.5 sm:flex-col">
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="ml-3.5 text-[18.64px] font-normal capitalize md:ml-0"
                    >
                      {" "}
                      You do not have an order{" "}
                    </Text>{" "}
                    <SelectBox
                      size="xs"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_2.svg"
                          alt="Frame"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      name="groupthirtyfour"
                      options={dropDownOptions}
                      className="w-[32%] gap-2 rounded-[10px] border border-solid border-primary_colors-900 px-[18px] sm:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <Text
                    as="p"
                    className="relative mr-2.5 mt-[-16px] bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 md:mr-0 sm:pr-5"
                  >
                    {" "}
                    All{" "}
                  </Text>{" "}
                </div>
                <div>
                  {" "}
                  <div className="flex items-center justify-center px-2.5 md:flex-col">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-normal !text-black-900_01"
                    >
                      {" "}
                      Ad No{" "}
                    </Text>{" "}
                    <Text
                      as="p"
                      className="ml-[170px] text-[16px] font-normal !text-black-900_01 md:ml-0"
                    >
                      {" "}
                      Property Type{" "}
                    </Text>{" "}
                    <Text
                      as="p"
                      className="ml-[170px] text-[16px] font-normal !text-black-900_01 md:ml-0"
                    >
                      {" "}
                      Announcement Date{" "}
                    </Text>{" "}
                    <div className="mb-1.5 flex flex-1 flex-wrap items-center self-start px-3.5 md:self-stretch">
                      {" "}
                      <Text
                        as="p"
                        className="relative z-[2] bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
                      >
                        {" "}
                        Last 1 Week{" "}
                      </Text>{" "}
                      <Text
                        as="p"
                        className="relative mb-1.5 ml-[-170px] self-end text-[16px] font-normal !text-black-900_01"
                      >
                        {" "}
                        Price{" "}
                      </Text>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex flex-col items-end">
                    {" "}
                    <Text
                      as="p"
                      className="relative z-[3] mr-2.5 bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 md:mr-0 sm:pr-5"
                    >
                      {" "}
                      Last 1 Month{" "}
                    </Text>{" "}
                    <div className="relative mt-[-38px] flex flex-col self-stretch">
                      {" "}
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {" "}
                        {data.map((d, index) => (
                          <MyShoppingTransactionsMyCurrentRowzipcode
                            {...d}
                            key={"listzipcode" + index}
                          />
                        ))}{" "}
                      </Suspense>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <MyshoppingtransactionsmycurrentColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
