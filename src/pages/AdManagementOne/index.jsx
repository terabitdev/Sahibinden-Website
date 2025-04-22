import { Helmet } from "react-helmet";
import {
  Button,
  Input,
  Heading,
  TextArea,
  SelectBox,
  Img,
  Text,
} from "../../components";
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
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const accordionData = [
  { advertisements: "Advertisements" },
  {},
  { advertisements: "Auto Expertise" },
];
export default function AdManagementOnePage() {
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
      <div className="flex w-full flex-col items-center bg-white">
        {" "}
        <Header className="self-stretch bg-white" />{" "}
        <div className="container-sm mt-[60px] md:px-5">
          {" "}
          <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
            {" "}
            <div className="flex items-center gap-[30px] md:flex-col">
              {" "}
              <div className="w-[22%] md:w-full">
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
                  {accordionData.map((d, i) => (
                    <AccordionItem uuid={i} key={`expandablelista${i}`}>
                      {" "}
                      <div className="flex flex-1 items-start">
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
                                  <div className="flex w-full items-center justify-between gap-5">
                                    {" "}
                                    {props?.expanded ? (
                                      <Img
                                        src="images/img_button_2.svg"
                                        alt="Background"
                                        className="h-[56px] w-full md:h-auto"
                                      />
                                    ) : (
                                      <Img
                                        src="images/img_arrow_up.svg"
                                        alt="Arrowup"
                                        className="mb-1 h-[18px] self-end"
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
                          <div className="relative ml-[-300px] mt-4 flex w-full flex-col items-start gap-4 self-end">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="ml-5 text-[15px] font-normal capitalize !text-primary_colors-900 md:ml-0"
                            >
                              {" "}
                              On Air{" "}
                            </Text>{" "}
                            <div className="flex h-[56px] items-center self-stretch bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
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
                                  Not On Air{" "}
                                </Text>{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>{" "}
                        </AccordionItemPanel>{" "}
                      </div>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>{" "}
              </div>
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal capitalize md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Published Advertisements{" "}
                </Heading>{" "}
                <Input
                  size="4xl"
                  shape="round"
                  type="number"
                  name="groupfive"
                  placeholder={`By ad number or word`}
                  className="mt-2.5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-3.5 capitalize !text-blue_gray-400"
                />{" "}
                <Button
                  color="primary_colors_900"
                  size="xl"
                  variant="fill"
                  shape="round"
                  className="mt-5 min-w-[124px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                >
                  {" "}
                  Search{" "}
                </Button>{" "}
                <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 bg-white px-2.5 py-3.5 sm:flex-col">
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="ml-3.5 text-[18.64px] font-normal capitalize md:ml-0"
                  >
                    {" "}
                    no ads found{" "}
                  </Text>{" "}
                  <SelectBox
                    size="xs"
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_frame_2.svg"
                        alt="Frame"
                        className="h-[24px] w-[24px]"
                      />
                    }
                    name="groupsix"
                    options={dropDownOptions}
                    className="w-[32%] gap-2 rounded-[10px] border border-solid border-primary_colors-900 px-[18px] sm:w-full sm:px-5"
                  />{" "}
                </div>
              </div>{" "}
            </div>{" "}
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
                />{" "}
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
                    />
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
        <Footer className="mt-[100px] self-stretch bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
