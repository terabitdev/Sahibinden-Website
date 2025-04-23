import { Helmet } from "react-helmet";
import { Button, Input, Heading, TextArea, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
export default function MessagesandNotificationsMyThreePage() {
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
      <div className="flex w-full flex-col items-center bg-white">
        {" "}
        <Header className="self-stretch" />{" "}
        <div className="container-sm mt-14 md:px-5">
          {" "}
          <div className="flex flex-col gap-[116px] md:gap-[87px] sm:gap-[58px]">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <div className="flex w-[22%] flex-col items-center md:w-full">
                {" "}
                <Text
                  size="text2xl"
                  as="p"
                  className="border border-solid border-primary_colors-900 bg-primary_colors-900 pb-2 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal !text-white sm:pr-5"
                >
                  {" "}
                  My Messages{" "}
                </Text>{" "}
                <Input
                  size="md"
                  shape="square"
                  name="buttonone_two"
                  placeholder={`Informations`}
                  className="self-stretch border border-solid border-primary_colors-900 px-2.5 !text-black-0"
                />{" "}
                <div className="flex items-center justify-between gap-5 self-stretch border border-solid border-primary_colors-900 bg-white px-[18px] py-2.5">
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
                      My Product Offers{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Image"
                    className="h-[18px]"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-1 flex-col gap-[30px] self-center md:self-stretch">
                {" "}
                <div className="flex items-start justify-center gap-2.5 rounded-[10px] bg-white px-4 py-6 shadow-xs md:flex-col sm:py-5">
                  {" "}
                  <Img
                    src="images/img_360526306_11452734.png"
                    alt="Image"
                    className="h-[108px] w-[16%] object-contain md:w-full"
                  />{" "}
                  <div className="mb-2 flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h1"
                      className="text-[20px] font-medium"
                    >
                      {" "}
                      PIRANLAR MASERATI LEVANTE 2.0 330HP HYBRIDGT VACUUM
                      K.K12INST{" "}
                    </Heading>
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="text-[20px] font-medium leading-[165.5%] !text-blue_gray-400"
                    >
                      {" "}
                      <>
                        {" "}
                        2.0 Hybrid GT <br /> Gebze / Osman Yilmaz Mh.{" "}
                      </>{" "}
                    </Heading>{" "}
                  </div>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    className="mt-[30px] min-w-[130px] rounded px-[18px] font-medium capitalize md:px-5"
                  >
                    {" "}
                    1,950,000 TL{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="flex flex-col items-start justify-center gap-5 rounded-[10px] bg-white px-6 py-[22px] shadow-xs sm:p-5">
                  {" "}
                  <div className="flex items-center gap-5 self-stretch">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h3"
                      className="text-[20px] font-medium"
                    >
                      {" "}
                      Hakan Ceylan{" "}
                    </Heading>{" "}
                    <Button
                      color="primary_colors_900"
                      size="sm"
                      variant="fill"
                      className="min-w-[124px] rounded px-[18px] font-medium capitalize"
                    >
                      {" "}
                      0533 505 20 91{" "}
                    </Button>{" "}
                  </div>
                  <Input
                    size="2xl"
                    shape="round"
                    name="message"
                    placeholder={`Type your message here`}
                    className="self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-2.5 font-medium !text-blue_gray-400"
                  />{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[124px] rounded-[24px] px-[34px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    Send{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col items-start gap-14 px-10 sm:gap-7 sm:px-5">
              {" "}
              <Heading
                size="heading3xl"
                as="h4"
                className="text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
              >
                {" "}
                Leave a Reply{" "}
              </Heading>{" "}
              <div className="flex flex-col items-center self-stretch rounded-[30px] bg-white p-[38px] sm:p-5">
                {" "}
                <div className="mx-2 flex flex-col items-start gap-1.5 self-stretch md:mx-0">
                  {" "}
                  <Heading
                    as="h5"
                    className="text-[22px] font-normal capitalize !text-text_light"
                  >
                    {" "}
                    Your email address will not be published.{" "}
                  </Heading>{" "}
                  <Heading
                    size="text8xl"
                    as="h6"
                    className="text-[26px] font-medium capitalize !text-text_light md:text-[24px] sm:text-[22px]"
                  >
                    {" "}
                    Comment{" "}
                  </Heading>{" "}
                </div>
                <TextArea
                  shape="round"
                  name="your_comment"
                  placeholder={`Your Comment`}
                  className="mt-3 self-stretch rounded-[10px] px-[34px] font-medium capitalize text-text_light sm:px-5 sm:pt-5"
                />{" "}
                <div className="mt-[22px] flex gap-[38px] self-stretch md:flex-col">
                  {" "}
                  <div className="flex w-full flex-col items-start gap-1.5">
                    {" "}
                    <Heading
                      as="p"
                      className="text-[22px] font-medium capitalize !text-text_light"
                    >
                      {" "}
                      Name{" "}
                    </Heading>{" "}
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch rounded-[12px] px-3 font-medium capitalize"
                    />{" "}
                  </div>{" "}
                  <div className="flex w-full flex-col items-start gap-1.5">
                    {" "}
                    <Heading
                      as="p"
                      className="text-[22px] font-medium capitalize !text-text_light"
                    >
                      {" "}
                      Email{" "}
                    </Heading>{" "}
                    <Input
                      shape="round"
                      type="text"
                      name="email"
                      placeholder={`Your Name`}
                      className="self-stretch rounded-[12px] px-3 font-medium capitalize"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <Button
                  color="primary_colors_900"
                  size="5xl"
                  variant="fill"
                  className="mt-[50px] min-w-[390px] rounded-[10px] px-[34px] font-medium shadow-lg sm:px-5"
                >
                  {" "}
                  Post Comment{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[100px] self-stretch bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
