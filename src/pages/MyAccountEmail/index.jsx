import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountemailColumnOne from "./MyaccountemailColumnOne";
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
  { myaccountOne2: "My Account Information" },
  { myaccountOne2: "Security" },
  { myaccountOne2: "My Permissions" },
];
export default function MyAccountEmailPage() {
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
            <div>
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
                                      {d.myaccountOne2}{" "}
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
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize !text-primary_colors-900"
                              >
                                {" "}
                                Email{" "}
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
                                  Account Cancellation{" "}
                                </Text>{" "}
                              </a>{" "}
                            </div>{" "}
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
                    Email{" "}
                  </Heading>{" "}
                  <div className="flex flex-col items-start justify-center gap-5 self-stretch rounded-[10px] bg-white px-6 py-[30px] shadow-xs sm:p-5">
                    {" "}
                    <div className="flex flex-col items-start gap-5 self-stretch">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h2"
                        className="w-[94%] text-[20px] font-normal leading-[10px] md:w-full"
                      >
                        {" "}
                        <>
                          {" "}
                          To ensure that you receive important emails regarding
                          your listings, favorites and messages, <br /> please
                          make sure that your current email address is
                          registered.{" "}
                        </>{" "}
                      </Heading>{" "}
                      <Heading
                        size="text7xl"
                        as="h3"
                        className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        Your registered email address: mhagdp1542@gmail.com{" "}
                      </Heading>{" "}
                    </div>{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[174px] rounded-[24px] px-3 font-medium uppercase"
                    >
                      {" "}
                      Change my email{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountemailColumnOne />{" "}
        </div>
        <Footer className="mt-[142px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
