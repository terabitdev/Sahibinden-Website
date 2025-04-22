import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Input } from "../../components";
import AdManagementColumnnumberof from "../../components/AdManagementColumnnumberof";
import FavoriteListings from "../../components/FavoriteListings";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdmanagementColumn from "./AdmanagementColumn";
import React, { Suspense } from "react";
const data = [
  {
    numberof: (
      <>
        {" "}
        Number of advertisements <br /> published{" "}
      </>
    ),
    zero: "0",
  },
  {
    numberof: (
      <>
        {" "}
        Number of advertisements <br /> published{" "}
      </>
    ),
    zero: "0",
  },
  {
    numberof: (
      <>
        {" "}
        Number of advertisements <br /> published{" "}
      </>
    ),
    zero: "0",
  },
];
export default function AdManagementPage() {
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
      <div className="flex w-full flex-col gap-[68px] bg-white sm:gap-[34px]">
        {" "}
        <Header className="bg-white" />{" "}
        <div className="flex flex-col items-center gap-[98px] md:gap-[73px] sm:gap-[49px]">
          {" "}
          <div className="container-sm px-5">
            {" "}
            <div className="flex items-start gap-10 md:flex-col">
              {" "}
              <div className="w-[22%] md:w-full">
                {" "}
                <Input
                  color="primary_colors_900"
                  size="md"
                  shape="square"
                  name="buttonone_one"
                  placeholder={`Summary`}
                  className="relative z-[1] px-2.5 font-proximanova"
                />{" "}
                <div className="h-[56px] bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat p-4 md:h-auto">
                  {" "}
                  <div className="flex items-center justify-between gap-5">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="!font-proximanova text-[18.64px] font-normal capitalize !text-black-900"
                      >
                        {" "}
                        Advertisements{" "}
                      </Text>{" "}
                    </a>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[18px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="h-[56px] bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat p-4 md:h-auto">
                  {" "}
                  <div className="flex items-center justify-between gap-5">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="!font-proximanova text-[18.64px] font-normal capitalize !text-black-900"
                      >
                        {" "}
                        Auto Expertise{" "}
                      </Text>{" "}
                    </a>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[18px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="flex flex-1 flex-col gap-10 self-center md:self-stretch">
                {" "}
                <div className="flex gap-10 md:flex-col">
                  {" "}
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {" "}
                    {data.map((d, index) => (
                      <AdManagementColumnnumberof
                        {...d}
                        key={"listnumberof" + index}
                      />
                    ))}{" "}
                  </Suspense>{" "}
                </div>{" "}
                <div className="rounded-[14px] bg-white p-5 shadow-md">
                  {" "}
                  <div className="flex flex-col items-end gap-2">
                    {" "}
                    <div className="flex items-start justify-end gap-3.5 self-stretch md:flex-col">
                      {" "}
                      <Img
                        src="images/img_close.svg"
                        alt="Close"
                        className="h-[50px] md:w-full"
                      />{" "}
                      <div className="flex flex-1 flex-col items-start gap-1 self-center md:self-stretch">
                        {" "}
                        <Heading
                          size="text7xl"
                          as="h1"
                          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                        >
                          {" "}
                          Post an Ad Now{" "}
                        </Heading>{" "}
                        <Text
                          size="textlg"
                          as="p"
                          className="w-[90%] text-[15px] font-medium leading-[22px] !text-black-900_01 md:w-full"
                        >
                          {" "}
                          You too can place an ad on sahibinden.com and get
                          results in a short time by having your ad viewed by
                          millions of users.{" "}
                        </Text>{" "}
                      </div>{" "}
                    </div>{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[124px] rounded-[24px] px-5 font-medium uppercase"
                    >
                      {" "}
                      Advertise{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-10 md:flex-col">
                  {" "}
                  <FavoriteListings />{" "}
                  <FavoriteListings
                    favoriteImage="images/img_rewind.svg"
                    favoriteTitle="Favorite Searches"
                    favoriteDescription={
                      <>
                        {" "}
                        Save time by saving your search selections and <br />{" "}
                        receive email notifications when new results <br />{" "}
                        match your favorite searches .{" "}
                      </>
                    }
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <AdmanagementColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
