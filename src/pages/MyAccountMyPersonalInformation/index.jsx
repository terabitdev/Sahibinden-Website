import { Helmet } from "react-helmet";
import { Button, Input, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountmypersonalinformationColumnOne from "./MyaccountmypersonalinformationColumnOne";
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
  { myaccountOne: "My Account Information" },
  { myaccountOne: "Security" },
  { myaccountOne: "My Permissions" },
];
export default function MyAccountMyPersonalInformationPage() {
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
        <div className="flex flex-col items-center gap-[136px] md:gap-[102px] sm:gap-[68px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col md:w-full"
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
                                    {d.myaccountOne}{" "}
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
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize !text-primary_colors-900"
                            >
                              {" "}
                              My Personal Information{" "}
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
              <div className="flex flex-1 flex-col items-start gap-6 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  My Personal Information{" "}
                </Heading>{" "}
                <div className="flex flex-col items-center justify-center gap-5 self-stretch rounded-[10px] bg-white px-[26px] py-16 shadow-xs md:py-5 sm:p-5">
                  {" "}
                  <div className="flex flex-col items-center gap-4 rounded border border-solid border-primary_colors-900 bg-white px-9 py-[38px] shadow-bs sm:p-5">
                    {" "}
                    <Img
                      src="images/img_plus.svg"
                      alt="Plus"
                      className="h-[34px]"
                    />{" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal !text-primary_colors-900"
                    >
                      {" "}
                      Add Photo{" "}
                    </Text>{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-5 self-stretch">
                    {" "}
                    <div className="flex items-center justify-between gap-5 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h2"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        User Name{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="teuserFortyFour"
                        placeholder={`teuser44`}
                        className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0 md:w-full"
                      />{" "}
                    </div>{" "}
                    <div className="flex items-center justify-center gap-[30px] md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h3"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        Name Surname{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="test_user"
                        placeholder={`Test User`}
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0"
                      />{" "}
                    </div>
                    <div className="flex items-center justify-between gap-5 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h4"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        Home Phone{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="language"
                        placeholder={`-`}
                        className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0 md:w-full"
                      />{" "}
                    </div>{" "}
                    <div className="flex items-center justify-between gap-5 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h5"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        Work Phone{" "}
                      </Heading>{" "}
                      <Input
                        size="2xl"
                        shape="round"
                        name="language"
                        placeholder={`-`}
                        className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-0 md:w-full"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <Button
                  color="primary_colors_900"
                  size="xl"
                  variant="fill"
                  shape="round"
                  className="min-w-[124px] self-end rounded-[24px] px-[34px] font-medium uppercase sm:px-5"
                >
                  {" "}
                  Edit{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountmypersonalinformationColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
