import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountaccountverificationColumnOne from "./MyaccountaccountverificationColumnOne";
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
  { myaccountOne4: "My Account Information" },
  { myaccountOne4: "Security" },
  { myaccountOne4: "My Permissions" },
];
export default function MyAccountAccountVerificationPage() {
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
      <div className="w-full bg-white">
        {" "}
        <Header />{" "}
        <div className="mt-[86px] flex flex-col items-center gap-[142px] md:gap-[106px] sm:gap-[71px]">
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
                                <div className="flex flex-wrap items-end justify-between gap-3.5 border border-solid border-primary_colors-900 bg-primary_colors-900 p-2.5">
                                  {" "}
                                  <Text
                                    size="text2xl"
                                    as="p"
                                    className="mt-1 text-[18.64px] font-normal !text-white"
                                  >
                                    {" "}
                                    {d.myaccountOne4}{" "}
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
                                Password Change{" "}
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
                              Account Verification{" "}
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
                                Account Cancellation{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>
                  </AccordionItem>
                ))}{" "}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Account Verification{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start justify-center gap-2.5 self-stretch rounded-[10px] bg-white px-6 py-5 shadow-xs sm:px-5">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="w-full text-[20px] font-normal leading-[54px]"
                  >
                    {" "}
                    In accordance with the regulation published by the Ministry
                    of Trade in order to increase reliability in the purchase,
                    sale and rental of second-hand vehicles and real estate, you
                    need to verify your account with e-Government once in order
                    to publish your advertisement.{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[384px] rounded-[24px] px-3 font-medium uppercase"
                  >
                    {" "}
                    Verify your account with e-government{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h3"
                    className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    E-commerce individual seller verification{" "}
                  </Heading>{" "}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch rounded-[10px] bg-white px-6 py-[18px] shadow-xs sm:px-5">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h4"
                      className="mt-1 w-full text-justify text-[20px] font-normal leading-[54px]"
                    >
                      {" "}
                      In order to increase the reliability of your S-Param Safe
                      and GeT advertisements, you need to verify your
                      information with e-Government once in each calendar year,
                      as per the legal regulations published by the Ministry of
                      Trade . In the following periods, if account holders do
                      not complete the verification, it will not be possible for
                      them to make sales.{" "}
                    </Heading>{" "}
                    <div className="flex rounded-[24px] bg-primary_colors-900 p-3">
                      {" "}
                      <Text
                        as="p"
                        className="text-[16px] font-medium uppercase !text-white"
                      >
                        {" "}
                        Verify your account with e-government{" "}
                      </Text>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <MyaccountaccountverificationColumnOne />{" "}
        </div>{" "}
        <Footer className="mt-[142px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
