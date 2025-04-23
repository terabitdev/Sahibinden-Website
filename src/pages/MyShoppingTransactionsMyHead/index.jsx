import { Helmet } from "react-helmet";
import { Button, Input, Heading, SelectBox, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionsmyheadColumnOne from "./MyshoppingtransactionsmyheadColumnOne";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function MyShoppingTransactionsMyHeadPage() {
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
        <div className="flex flex-col items-center gap-[108px] md:gap-[81px] sm:gap-[54px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <div className="w-[22%] md:w-full">
                {" "}
                <div>
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
                    </div>{" "}
                  </div>{" "}
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
                        My delivery / billing addresses{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal capitalize"
                    >
                      {" "}
                      My bank Information{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[15px] font-normal capitalize !text-primary_colors-900"
                  >
                    {" "}
                    My head office address{" "}
                  </Text>{" "}
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
              <div className="flex flex-1 flex-col items-start gap-5 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Edit My Address{" "}
                </Heading>{" "}
                <div className="flex flex-col items-end justify-center gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <div className="ml-1.5 flex items-center justify-end gap-[30px] self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Name Surname{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext"
                      className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
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
                      Telephone{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_one"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h4"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      TR ID Number{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_two"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h5"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Country{" "}
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
                      name="groupnine"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h6"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Province{" "}
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
                      name="groupten"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      District{" "}
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
                      name="groupeleven"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-end gap-[30px] self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Neighbourhood{" "}
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
                      name="grouptwelve"
                      options={dropDownOptions}
                      className="flex-grow gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Address{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_three"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
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
          <MyshoppingtransactionsmyheadColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
