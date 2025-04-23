import { Helmet } from "react-helmet";
import { Button, Input, Heading, TextArea, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
export default function MyShoppingTransactionsCommentPage() {
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
      <div className="flex w-full flex-col items-center gap-[74px] bg-white md:gap-[55px] sm:gap-[37px]">
        {" "}
        <Header className="self-stretch" />{" "}
        <div className="container-sm md:px-5">
          {" "}
          <div>
            {" "}
            <div className="flex flex-col gap-16 sm:gap-8">
              {" "}
              <div className="flex items-start gap-[30px] md:flex-col">
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
                  </div>{" "}
                  <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
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
                        Summary{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>
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
                        className="w-[60%] text-[15px] font-normal leading-[22px]"
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
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                      >
                        {" "}
                        My delivery / billing addresses{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="w-[70%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                    >
                      {" "}
                      Comment Management{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>
                <div className="flex flex-1 flex-col gap-[30px] self-center md:self-stretch">
                  {" "}
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="text7xl"
                      as="h1"
                      className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      Comment Management{" "}
                    </Heading>{" "}
                    <Input
                      size="4xl"
                      shape="round"
                      name="comment"
                      placeholder={`Products I Sell / Products i purchased`}
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
                  <TextArea
                    shape="round"
                    name="group"
                    placeholder={`Comments...............`}
                    className="rounded-[10px] px-[34px] font-medium capitalize text-text_light sm:px-5 sm:pt-5"
                  />{" "}
                </div>{" "}
              </div>
              <div className="flex flex-col items-start gap-14 px-10 sm:gap-7 sm:px-5">
                {" "}
                <Heading
                  size="heading3xl"
                  as="h2"
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
                      as="h3"
                      className="text-[22px] font-normal capitalize !text-text_light"
                    >
                      {" "}
                      Your email address will not be published.{" "}
                    </Heading>{" "}
                    <Heading
                      size="text8xl"
                      as="h4"
                      className="text-[26px] font-medium capitalize !text-text_light md:text-[24px] sm:text-[22px]"
                    >
                      {" "}
                      Comment{" "}
                    </Heading>{" "}
                  </div>{" "}
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
                        as="h5"
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
                    </div>
                    <div className="flex w-full flex-col items-start gap-1.5">
                      {" "}
                      <Heading
                        as="h6"
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
        </div>{" "}
        <Footer className="self-stretch bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
