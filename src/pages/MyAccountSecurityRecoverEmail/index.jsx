import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountsecurityrecoveremailColumnOne from "./MyaccountsecurityrecoveremailColumnOne";
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
  { myaccountOne7: "My Account Information" },
  { myaccountOne7: "Security" },
  { myaccountOne7: "My Permissions" },
];
export default function MyAccountSecurityRecoverEmailPage() {
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
                                <div className="relative z-[1] flex flex-wrap items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
                                  {" "}
                                  <Text
                                    size="text2xl"
                                    as="p"
                                    className="mt-1 text-[18.64px] font-normal !text-white"
                                  >
                                    {" "}
                                    {d.myaccountOne7}{" "}
                                  </Text>{" "}
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_arrow_up.svg"
                                      alt="Arrowup"
                                      className="mb-1.5 h-[18px]"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="h-[18px]"
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
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="border-[0.5px] border-solid border-primary_colors-900 bg-white py-4 pl-5 pr-[34px] text-[15px] font-normal capitalize sm:pr-5"
                            >
                              {" "}
                              2 Step Verification{" "}
                            </Text>{" "}
                          </a>{" "}
                          <Text
                            size="textlg"
                            as="p"
                            className="border-[0.5px] border-solid border-primary_colors-900 bg-white py-4 pl-5 pr-[34px] text-[15px] font-normal capitalize !text-primary_colors-900 sm:pr-5"
                          >
                            {" "}
                            Recovery Email{" "}
                          </Text>{" "}
                          <Text
                            size="textlg"
                            as="p"
                            className="border-[0.5px] border-solid border-primary_colors-900 bg-white py-4 pl-5 pr-[34px] text-[15px] font-normal capitalize sm:pr-5"
                          >
                            {" "}
                            Sessions & Devices{" "}
                          </Text>{" "}
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
                              className="border border-solid border-primary_colors-900 bg-white py-3 pl-5 pr-[34px] text-[18.64px] font-normal sm:pr-5"
                            >
                              {" "}
                              Account Holders / Blocked{" "}
                            </Text>
                          </a>{" "}
                        </div>{" "}
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
                  Recovery Email{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="w-full text-[20px] font-normal capitalize leading-[30px]"
                  >
                    {" "}
                    If you forget your password, you can use your recovery email
                    address to help you access your account.{" "}
                  </Heading>{" "}
                  <Heading
                    size="text3xl"
                    as="h3"
                    className="text-[20px] font-normal capitalize"
                  >
                    {" "}
                    You do not have a registered recovery email address .{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="mb-2.5 min-w-[100px] rounded-[24px] px-8 font-medium uppercase sm:px-5"
                  >
                    {" "}
                    ADD{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountsecurityrecoveremailColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
