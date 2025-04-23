import { Helmet } from "react-helmet";
import { Button, Input, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountpasswordchangeColumnOne from "./MyaccountpasswordchangeColumnOne";
import React from "react";
export default function MyAccountPasswordChangePage() {
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
              <div className="flex w-[22%] flex-col items-center self-center md:w-full">
                {" "}
                <div className="flex items-end justify-center gap-3.5 self-stretch border border-solid border-primary_colors-900 bg-primary_colors-900 p-2.5">
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="mt-1 text-[18.64px] font-normal !text-white"
                  >
                    {" "}
                    My Account Information{" "}
                  </Text>{" "}
                  <Img
                    src="images/img_arrow_up.svg"
                    alt="Arrowup"
                    className="mb-1.5 h-[18px]"
                  />{" "}
                </div>{" "}
                <div className="self-stretch">
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
                        My Personal Information{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
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
                        Email{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
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
                        Mobile Phone{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal capitalize !text-primary_colors-900"
                    >
                      {" "}
                      Password Change{" "}
                    </Text>{" "}
                  </div>
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
                        Account Verification{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
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
                        Account Cancellation{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
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
                      Security{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Image"
                    className="h-[18px]"
                  />{" "}
                </div>{" "}
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
                </a>{" "}
                <Text
                  size="text2xl"
                  as="p"
                  className="border border-solid border-primary_colors-900 bg-white pb-2.5 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal sm:pr-5"
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
                </a>
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
              <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Password Change{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start justify-center gap-4 self-stretch rounded-[10px] bg-white px-6 py-5 shadow-xs sm:px-5">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="text-[20px] font-normal"
                  >
                    {" "}
                    To change your password, enter your current and new
                    password.{" "}
                  </Heading>{" "}
                  <div className="flex flex-col gap-5 self-stretch">
                    {" "}
                    <div className="flex items-center justify-center gap-3 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h3"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        current Password{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="teuserFortyFour"
                        placeholder={`teuser44`}
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0"
                      />{" "}
                    </div>{" "}
                    <div className="flex items-center justify-center gap-11 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h4"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        New Password{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="teuserfortyfour"
                        placeholder={`teuser44`}
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0"
                      />{" "}
                    </div>
                    <div className="flex items-center justify-center gap-[18px] md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h5"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        Retype Password{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="teuserfortyfour"
                        placeholder={`teuser44`}
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[100px] rounded-[24px] px-7 font-medium uppercase sm:px-5"
                  >
                    {" "}
                    sAVE{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountpasswordchangeColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
