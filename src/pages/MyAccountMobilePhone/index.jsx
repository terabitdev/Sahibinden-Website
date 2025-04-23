import { Helmet } from "react-helmet";
import { Button, Input, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountmobilephoneColumnOne from "./MyaccountmobilephoneColumnOne";
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
  { myaccountOne3: "My Account Information" },
  { myaccountOne3: "Security" },
  { myaccountOne3: "My Permissions" },
];
export default function MyAccountMobilePhonePage() {
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
                                    {d.myaccountOne3}{" "}
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
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize !text-primary_colors-900"
                            >
                              {" "}
                              Mobile Phone{" "}
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
                  Mobile Phone{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start justify-center gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h2"
                    className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    Help Us Protect Your Account{" "}
                  </Heading>{" "}
                  <Heading
                    size="text3xl"
                    as="h3"
                    className="w-[90%] text-[20px] font-normal leading-[10px] md:w-full"
                  >
                    {" "}
                    <>
                      {" "}
                      You can add your mobile phone number so that you can log
                      in to your account when you <br /> forget your password or
                      protect your account with SMS verification.{" "}
                    </>{" "}
                  </Heading>{" "}
                  <div className="mr-1.5 flex items-center gap-[26px] self-stretch md:mr-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h4"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Mobile Phone Number{" "}
                    </Heading>{" "}
                    <Input
                      size="2xl"
                      shape="round"
                      name="group2547"
                      placeholder={`+90(__)__ ___`}
                      className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0"
                    />{" "}
                  </div>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[214px] rounded-[24px] px-3 font-medium uppercase"
                  >
                    {" "}
                    add my phone number{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountmobilephoneColumnOne />{" "}
        </div>{" "}
        <Footer className="mt-[142px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
