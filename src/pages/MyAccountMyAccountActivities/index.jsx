import { Helmet } from "react-helmet";
import { Button, Input, Img, Heading, SelectBox, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountmyaccountactivitiesColumn from "./MyaccountmyaccountactivitiesColumn";
import MyaccountmyaccountactivitiesRowOne from "./MyaccountmyaccountactivitiesRowOne";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function MyAccountMyAccountActivitiesPage() {
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
        <div className="flex flex-col items-center gap-[30px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <div className="w-[22%] md:w-full">
                {" "}
                <div className="flex items-end justify-center gap-3.5 border border-solid border-primary_colors-900 bg-primary_colors-900 p-2.5">
                  {" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="mt-1 text-[18.64px] font-normal !text-white"
                    >
                      {" "}
                      My Account Information{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_arrow_up.svg"
                    alt="Arrowup"
                    className="mb-1.5 h-[18px]"
                  />{" "}
                </div>{" "}
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
                      Security{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Image"
                    className="h-[18px]"
                  />{" "}
                </div>{" "}
                <div className="flex flex-col items-center">
                  {" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="border border-solid border-primary_colors-900 bg-white pb-2 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal sm:pr-5"
                    >
                      {" "}
                      My Saved Cards{" "}
                    </Text>{" "}
                  </a>
                  <Text
                    size="text2xl"
                    as="p"
                    className="border border-solid border-primary_colors-900 bg-white pb-2.5 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal !text-primary_colors-900 sm:pr-5"
                  >
                    {" "}
                    My Account Activities{" "}
                  </Text>{" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="relative z-[1] border border-solid border-primary_colors-900 bg-white py-3 pl-5 pr-[34px] text-[18.64px] font-normal sm:pr-5"
                    >
                      {" "}
                      Account Holders / Blocked{" "}
                    </Text>{" "}
                  </a>{" "}
                  <div className="flex items-center justify-between gap-5 self-stretch border border-solid border-primary_colors-900 bg-white px-5 py-2.5">
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
                        My Permissions{" "}
                      </Text>{" "}
                    </a>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[18px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-1 flex-col items-start gap-5 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  My Account Activities{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <div className="mr-1.5 flex items-center gap-4 self-stretch md:mr-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Payment Method{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2552"
                      options={dropDownOptions}
                      className="flex-grow gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 sm:px-5"
                    />{" "}
                  </div>
                  <div className="mr-1.5 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h3"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Status{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2553"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="mr-1.5 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h4"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Product Type{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2554"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="mr-1.5 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h5"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Start Date{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="group2555"
                      suffix={
                        <Img
                          src="images/img_frame_primary_colors_900_20x34.svg"
                          alt="Frame"
                          className="h-[20px] w-[34px] object-contain"
                        />
                      }
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>
                  <div className="mr-1.5 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h6"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      End Date{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="group2556"
                      suffix={
                        <Img
                          src="images/img_frame_primary_colors_900_20x34.svg"
                          alt="Frame"
                          className="h-[20px] w-[34px] object-contain"
                        />
                      }
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="mb-[18px] min-w-[150px] rounded-[24px] px-[34px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    fILTER{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
            {" "}
            <MyaccountmyaccountactivitiesRowOne />{" "}
            <MyaccountmyaccountactivitiesColumn />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
