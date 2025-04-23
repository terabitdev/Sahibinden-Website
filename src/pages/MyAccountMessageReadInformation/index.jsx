import { Helmet } from "react-helmet";
import {
  Button,
  Input,
  Heading,
  TextArea,
  Text,
  Switch,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import {
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
export default function MyAccountMessageReadInformationPage() {
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
                {[...Array(5)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistm${i}`}>
                    {" "}
                    <div className="flex-1 border border-solid border-primary_colors-900 bg-white px-5">
                      {" "}
                      <AccordionItemPanel>
                        {" "}
                        <div className="mb-3 flex flex-col items-start gap-[22px]">
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
                              My Saved Cards{" "}
                            </Text>{" "}
                          </a>{" "}
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
                              My Account Activities{" "}
                            </Text>{" "}
                          </a>{" "}
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
                              Account Holders / Blocked{" "}
                            </Text>{" "}
                          </a>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal !text-black-0 md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Message Read Information{" "}
                </Heading>
                <div className="mt-2.5 self-stretch bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <div className="flex flex-col items-center gap-2">
                    {" "}
                    <div className="flex items-center justify-between gap-5 self-stretch">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h2"
                        className="text-[20px] font-normal !text-black-0"
                      >
                        {" "}
                        Message Read Information{" "}
                      </Heading>{" "}
                      <Switch
                        value={true}
                        className="border border-solid border-blue-a100"
                      />{" "}
                    </div>{" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal leading-[22px] !text-blue_gray-400_03"
                    >
                      {" "}
                      <>
                        {" "}
                        People who have message read information turned on can
                        learn whether their messages have been read or not. If
                        you do not <br /> want this information to be sent to
                        the person you are messaging, you can turn this setting
                        off. If you turn this setting off, you <br /> will not
                        be able to see the read information of the messages you
                        have sent.{" "}
                      </>{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
                <Button
                  color="primary_colors_900"
                  size="xl"
                  variant="fill"
                  shape="round"
                  className="mt-[30px] min-w-[100px] self-end rounded-[24px] px-7 font-medium uppercase sm:px-5"
                >
                  {" "}
                  SAVE{" "}
                </Button>{" "}
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
