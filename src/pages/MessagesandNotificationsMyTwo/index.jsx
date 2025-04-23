import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MessagesandnotificationsmytwoColumnOne from "./MessagesandnotificationsmytwoColumnOne";
import React from "react";
export default function MessagesandNotificationsMyTwoPage() {
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
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <div className="flex w-[22%] flex-col items-center md:w-full">
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
                    My Messages{" "}
                  </Text>{" "}
                </a>{" "}
                <Input
                  size="md"
                  shape="square"
                  name="buttonone_two"
                  placeholder={`Informations`}
                  className="self-stretch border border-solid border-primary_colors-900 px-2.5 !text-black-0"
                />{" "}
                <div className="self-stretch">
                  {" "}
                  <div className="flex items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="mt-1 text-[18.64px] font-normal !text-white"
                    >
                      {" "}
                      My Product Offers{" "}
                    </Text>{" "}
                    <Img
                      src="images/img_arrow_up.svg"
                      alt="Arrowup"
                      className="mb-1.5 h-[18px]"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
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
                          I am seller{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>
                    <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="text-[15px] font-normal capitalize !text-primary_colors-900"
                      >
                        {" "}
                        i am buyer{" "}
                      </Text>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-1 flex-col items-start gap-2.5 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  My Product Offers - I am a Buyer{" "}
                </Heading>{" "}
                <div className="flex flex-col items-center justify-center gap-5 self-stretch rounded-[10px] bg-white px-14 py-[126px] shadow-xs md:p-5">
                  {" "}
                  <Img
                    src="images/img_frame_200x200.svg"
                    alt="Image"
                    className="h-[200px] w-[22%] object-contain"
                  />{" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="text-center text-[20px] font-medium capitalize leading-[30px]"
                  >
                    {" "}
                    <>
                      {" "}
                      You haven&#39;t bid yet <br /> Make offers on the products
                      you like and buy them easily at more affordable prices.{" "}
                    </>{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[174px] rounded-[24px] px-6 font-medium uppercase sm:px-5"
                  >
                    {" "}
                    Discover now{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MessagesandnotificationsmytwoColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
