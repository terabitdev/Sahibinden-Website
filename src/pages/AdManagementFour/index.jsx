import { Helmet } from "react-helmet";
import { Button, Input, Heading, TextArea, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const accordionData = [
  { clickfor1: "click for Detailed Search" },
  { clickfor1: "no reports found" },
];
const accordionData1 = [
  { advertisements2: "Advertisements" },
  { advertisements2: "Auto Expertise" },
];
export default function AdManagementFourPage() {
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
      <div className="flex w-full flex-col items-center gap-[92px] bg-white md:gap-[69px] sm:gap-[46px]">
        {" "}
        <Header className="self-stretch" />{" "}
        <div className="container-sm md:px-5">
          {" "}
          <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <div className="mt-2.5 w-[22%] self-center md:w-full">
                {" "}
                <Input
                  size="md"
                  shape="square"
                  name="buttonone_one"
                  placeholder={`Summary`}
                  className="relative z-[1] border border-solid border-primary_colors-900 px-2.5 !text-black-0"
                />{" "}
                <Accordion preExpanded={[0]} className="flex-col">
                  {" "}
                  {accordionData1.map((d, i) => (
                    <AccordionItem uuid={i} key={`expandablelista${i}`}>
                      {" "}
                      <div className="flex-1">
                        {" "}
                        <AccordionItemHeading className="w-full">
                          {" "}
                          <AccordionItemButton>
                            {" "}
                            <AccordionItemState>
                              {" "}
                              {(props) => (
                                <>
                                  {" "}
                                  <div className="flex flex-wrap items-center justify-between gap-5 border-[0.46px] border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
                                    {" "}
                                    <Text
                                      size="text2xl"
                                      as="p"
                                      className="self-end text-[18.64px] font-normal capitalize !text-white"
                                    >
                                      {" "}
                                      {d.advertisements2}{" "}
                                    </Text>
                                    {props?.expanded ? (
                                      <Img
                                        src="images/img_arrow_up.svg"
                                        alt="Arrowup"
                                        className="h-[18px]"
                                      />
                                    ) : (
                                      <Img
                                        src="images/img_frame_primary_colors_900_18x18.svg"
                                        alt="Image"
                                        className="h-[18px]"
                                      />
                                    )}{" "}
                                  </div>{" "}
                                </>
                              )}{" "}
                            </AccordionItemState>{" "}
                          </AccordionItemButton>{" "}
                        </AccordionItemHeading>{" "}
                        <AccordionItemPanel>
                          {" "}
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
                                  Buy Now{" "}
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
                                  My Transactions{" "}
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
                                My Expert Reports{" "}
                              </Text>{" "}
                            </div>{" "}
                          </div>{" "}
                        </AccordionItemPanel>{" "}
                      </div>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>{" "}
              </div>
              <div className="flex flex-1 flex-col gap-2.5 md:self-stretch">
                {" "}
                <div className="flex items-center justify-between gap-5">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h1"
                    className="self-end text-[25px] font-normal capitalize md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    My expert Reprts{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[182px] rounded-[24px] px-[34px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    bUY eXPERTISE{" "}
                  </Button>{" "}
                </div>{" "}
                <Accordion className="flex flex-col gap-3.5">
                  {" "}
                  {accordionData.map((d, i) => (
                    <AccordionItem uuid={i} key={`expandablelistc${i}`}>
                      {" "}
                      <AccordionItemHeading className="w-full">
                        {" "}
                        <AccordionItemButton>
                          {" "}
                          <AccordionItemState>
                            {" "}
                            {(props) => (
                              <>
                                {" "}
                                <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-6 py-5 sm:px-5">
                                  {" "}
                                  <Text
                                    size="text2xl"
                                    as="p"
                                    className="text-[18.64px] font-normal capitalize"
                                  >
                                    {" "}
                                    {d.clickfor1}{" "}
                                  </Text>{" "}
                                  <Img
                                    src="images/img_frame_primary_colors_900_18x18.svg"
                                    alt="Image"
                                    className="h-[24px]"
                                  />{" "}
                                </div>{" "}
                              </>
                            )}{" "}
                          </AccordionItemState>{" "}
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
                        {" "}
                        <div>Dummy Content</div>{" "}
                      </AccordionItemPanel>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>{" "}
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
                />
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
                  </div>{" "}
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
        <Footer className="self-stretch bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
