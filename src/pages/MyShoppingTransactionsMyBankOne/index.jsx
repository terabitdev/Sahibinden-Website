import { Helmet } from "react-helmet";
import { Button, CheckBox, Heading, Input, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionsmybankoneColumnOne from "./MyshoppingtransactionsmybankoneColumnOne";
import React from "react";
export default function MyShoppingTransactionsMyBankOnePage() {
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
        <div className="flex flex-col items-center gap-[94px] md:gap-[70px] sm:gap-[47px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <div className="mt-1 w-[22%] md:w-full">
                {" "}
                <div className="flex items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
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
                      My Purchase Transactions{" "}
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
                      My sales transactions{" "}
                    </Text>{" "}
                  </a>{" "}
                </div>
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
                      My delivery / billing addresses{" "}
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
                    My bank Information{" "}
                  </Text>{" "}
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
                      My head office address{" "}
                    </Text>{" "}
                  </a>{" "}
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
                    className="h-[18px] self-end"
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-3">
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
                      Safe E-Commerce{" "}
                    </Text>{" "}
                  </a>{" "}
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Image"
                    className="h-[18px]"
                  />{" "}
                </div>{" "}
              </div>
              <div className="flex flex-1 flex-col gap-3.5 self-center md:self-stretch">
                {" "}
                <div className="flex items-center justify-between gap-5">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h1"
                    className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    My Bank Information{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[182px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    Add new bank{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="flex flex-col items-end gap-5 rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      TR ID Number{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h3"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      IBAN{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_one"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>
                  <div className="ml-1.5 flex items-center justify-end gap-[30px] self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h4"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      name Surname{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_two"
                      className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-end gap-[42px] self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h5"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Office Address{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_three"
                      className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-end gap-[38px] self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h6"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Account Name{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_four"
                      className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 sm:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Current Account{" "}
                    </Heading>{" "}
                    <CheckBox
                      size="md"
                      name="checkbox_base"
                      label="Save as my current Account"
                      id="checkboxbase"
                      className="gap-2.5 text-left text-[15px] capitalize leading-[22px] text-black-900_01"
                    />{" "}
                  </div>
                  <Button
                    color="primary_colors_900"
                    size="5xl"
                    variant="fill"
                    className="min-w-[148px] rounded px-[34px] font-opensans font-bold sm:px-5"
                  >
                    {" "}
                    Save{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmybankoneColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
