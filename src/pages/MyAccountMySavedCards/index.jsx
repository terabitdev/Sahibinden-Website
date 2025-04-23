import { Helmet } from "react-helmet";
import { Button, Input, Heading, TextArea, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const accordionData = [
  { myaccountOne8: "My Account Information" },
  { myaccountOne8: "Security" },
  { myaccountOne8: "My Permissions" },
];
export default function MyAccountMySavedCardsPage() {
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
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col self-center md:w-full"
              >
                {" "}
                {accordionData.map((d, i) => (
                  <AccordionItem uuid={i} key={`expandablelistm${i}`}>
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
                                <div className="flex flex-wrap items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-2.5">
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
                                      {d.myaccountOne8}{" "}
                                    </Text>{" "}
                                  </a>{" "}
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="h-[18px]"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_arrow_up.svg"
                                      alt="Arrowup"
                                      className="mb-1.5 h-[18px]"
                                    />
                                  )}{" "}
                                </div>
                              </>
                            )}{" "}
                          </AccordionItemState>{" "}
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
                        {" "}
                        <div className="flex flex-col items-center">
                          {" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="border border-solid border-primary_colors-900 bg-white pb-2 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal !text-primary_colors-900 sm:pr-5"
                          >
                            {" "}
                            My Saved Cards{" "}
                          </Text>{" "}
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            {" "}
                            <Text
                              size="text2xl"
                              as="p"
                              className="border border-solid border-primary_colors-900 bg-white pb-2.5 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal sm:pr-5"
                            >
                              {" "}
                              My Account Activities{" "}
                            </Text>{" "}
                          </a>{" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="relative z-[1] border border-solid border-primary_colors-900 bg-white py-3 pl-5 pr-[34px] text-[18.64px] font-normal sm:pr-5"
                          >
                            {" "}
                            Account Holders / Blocked{" "}
                          </Text>{" "}
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
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
                                          {d.myaccountOne8}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                      <Img
                                        src={d.undefined}
                                        alt="Image"
                                        className="h-[18px]"
                                      />{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                        </div>
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  My Saved Cards{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start justify-center gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="text-[20px] font-normal capitalize"
                  >
                    {" "}
                    You can make your payments quickly by saving your card to
                    Masterpass.{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[150px] rounded-[24px] px-3 font-medium uppercase"
                  >
                    {" "}
                    Add NEW CARD{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col items-start gap-14 px-10 sm:gap-7 sm:px-5">
              {" "}
              <Heading
                size="heading3xl"
                as="h3"
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
                    as="h4"
                    className="text-[22px] font-normal capitalize !text-text_light"
                  >
                    {" "}
                    Your email address will not be published.{" "}
                  </Heading>{" "}
                  <Heading
                    size="text8xl"
                    as="h5"
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
                      as="h6"
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
        <Footer className="self-stretch bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
