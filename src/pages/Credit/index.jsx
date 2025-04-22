import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button, SelectBox } from "../../components";
import CreditColumnwhatisa from "../../components/CreditColumnwhatisa";
import { CloseSVG } from "../../components/Input/close";
import CreditColumnFour from "./CreditColumnFour";
import CreditRowThree from "./CreditRowThree";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
const accordionData = [
  { whatisa: "What is a Consumer Loan?" },
  { whatisa: "What is a Vehicle loan?" },
  { whatisa: "Who provides the Credit Offers?" },
  {
    whatisa:
      "I applied for a loan through sahibinden.com. Who can I get support from for my questions about the loan?",
  },
  { whatisa: "How are loan rates calculated?" },
  { whatisa: "Why are my mobile phone and email details required?" },
  { whatisa: "Is my personal data safe?" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function CreditPage() {
  const [searchBarValue48, setSearchBarValue48] = React.useState("");
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
      <div className="flex w-full flex-col gap-[90px] bg-white md:gap-[67px] sm:gap-[45px]">
        {" "}
        <header className="mr-10 flex flex-col items-center gap-[30px] md:mr-0">
          {" "}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            {" "}
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Img
                src="images/img_untitled_design.png"
                alt="Untitleddesign"
                className="h-[80px] w-[22%] object-contain md:w-full"
              />{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue48}
                onChange={(e) => setSearchBarValue48(e.target.value)}
                suffix={
                  searchBarValue48?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue48("")} />
                  ) : null
                }
                className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>{" "}
            <div className="mb-3 flex w-[34%] items-center justify-between gap-5 self-end md:w-full md:px-5">
              {" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_frame_primary_colors_900.svg"
                  alt="Image"
                  className="h-[24px]"
                />{" "}
              </a>{" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_lock.svg"
                  alt="Lock"
                  className="h-[24px]"
                />{" "}
              </a>{" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_frame_primary_colors_900_24x24.svg"
                  alt="Image"
                  className="h-[24px]"
                />{" "}
              </a>{" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_frame_24x24.svg"
                  alt="Image"
                  className="h-[24px]"
                />{" "}
              </a>
              <Button
                color="primary_colors_900"
                size="xl"
                variant="fill"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    alt="Arrow Left"
                    className="my-0.5 h-[20px] w-[20px] object-contain"
                  />
                }
                className="min-w-[232px] gap-2 rounded-[24px] px-[18px] font-medium uppercase"
              >
                {" "}
                post an ad for free{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    While Buying{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    When Selling{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    Maintenance & Repair{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-[106px] md:gap-[79px] sm:gap-[53px]">
          {" "}
          <CreditRowThree />{" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex flex-col gap-[54px] sm:gap-[27px]">
              {" "}
              <div className="flex flex-col items-start gap-5">
                {" "}
                <Heading
                  size="text10xl"
                  as="h2"
                  className="text-[35px] font-medium md:text-[33px] sm:text-[31px]"
                >
                  {" "}
                  Credit Offers{" "}
                </Heading>{" "}
                <div className="self-stretch rounded-[10px] bg-white p-5 shadow-sm">
                  {" "}
                  <div className="flex items-center md:flex-col">
                    {" "}
                    <Tabs
                      className="flex w-[34%] flex-col gap-6 rounded-[5px] bg-white p-[18px] shadow-xl md:w-full"
                      selectedTabClassName="!text-white bg-primary_colors-900 rounded-[20px]"
                      selectedTabPanelClassName="mx-[38px] md:mx-0 !relative tab-panel--selected"
                    >
                      {" "}
                      <TabList className="flex flex-wrap justify-center gap-4 rounded-[20px] border border-solid border-primary_colors-900 bg-white">
                        {" "}
                        <Tab className="px-[18px] py-1 text-[20px] font-semibold text-primary_colors-900">
                          {" "}
                          Consumer Loan{" "}
                        </Tab>{" "}
                        <Tab className="px-[18px] py-1 text-[20px] font-semibold text-primary_colors-900">
                          {" "}
                          Vehicle Loan{" "}
                        </Tab>{" "}
                      </TabList>{" "}
                      {[...Array(2)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="absolute mx-[38px] items-center md:mx-0"
                        >
                          {" "}
                          <div className="w-full">
                            {" "}
                            <div className="flex flex-col gap-6">
                              {" "}
                              <Input
                                size="lg"
                                shape="round"
                                name="amount"
                                placeholder={`Loan Amount`}
                                className="rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01"
                              />
                              <SelectBox
                                shape="round"
                                indicator={
                                  <Img
                                    src="images/img_frame_primary_colors_900_18x18.svg"
                                    alt="Frame"
                                    className="h-[20px] w-[20px]"
                                  />
                                }
                                name="maturity"
                                placeholder={`Maturity`}
                                options={dropDownOptions}
                                className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                              />{" "}
                              <Button
                                color="primary_colors_900"
                                size="lg"
                                variant="fill"
                                shape="round"
                                className="self-stretch rounded-[22px] px-[34px] font-medium capitalize sm:px-5"
                              >
                                {" "}
                                Calculate Consumer Loan{" "}
                              </Button>{" "}
                            </div>{" "}
                          </div>{" "}
                        </TabPanel>
                      ))}{" "}
                    </Tabs>{" "}
                    <div className="ml-10 flex w-[36%] flex-col gap-1 self-start md:ml-0 md:w-full">
                      {" "}
                      <Heading
                        size="heading4xl"
                        as="h3"
                        className="text-[30px] font-semibold capitalize leading-[45px] md:text-[28px] sm:text-[26px]"
                      >
                        {" "}
                        Easily choose the offer that suits you best for Vehicle
                        Loan Offers.{" "}
                      </Heading>{" "}
                      <div className="flex flex-col items-start gap-2">
                        {" "}
                        <Text
                          as="p"
                          className="text-[16px] font-normal leading-[165.5%] !text-black-900_01"
                        >
                          {" "}
                          <>
                            {" "}
                            When buying a house, you can easily apply for a{" "}
                            <br /> loan by comparing the housing or consumer
                            loan <br /> rates that suit you on a single page on{" "}
                            <br /> sahibinden.com.{" "}
                          </>{" "}
                        </Text>{" "}
                        <Text
                          as="p"
                          className="text-[16px] font-medium !text-primary_colors-900"
                        >
                          {" "}
                          Detailed Information{" "}
                        </Text>{" "}
                      </div>{" "}
                    </div>
                    <Img
                      src="images/img_frame_blue_gray_600_03.svg"
                      alt="Image"
                      className="h-[274px] w-[20%] object-contain md:w-full"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-col items-start">
                {" "}
                <Heading
                  size="text7xl"
                  as="h4"
                  className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Detailed Information{" "}
                </Heading>{" "}
                <div className="mt-5 flex gap-[30px] self-stretch md:flex-col">
                  {" "}
                  <CreditColumnwhatisa />{" "}
                  <CreditColumnwhatisa
                    whatisa="What is a Vehicle Loan?"
                    consumerloans="A vehicle loan is a type of personal loan that allows you to own a car with regular monthly payments and can be used for second-hand or new vehicle purchases."
                  />{" "}
                </div>{" "}
                <Heading
                  size="text7xl"
                  as="h5"
                  className="mt-[30px] text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Frequently Asked Questions{" "}
                </Heading>{" "}
                <Accordion className="mt-5 flex flex-col gap-5 self-stretch">
                  {" "}
                  {accordionData.map((d, i) => (
                    <AccordionItem uuid={i} key={`expandablelistw${i}`}>
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
                                <div className="flex-1 rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                                  {" "}
                                  <div className="flex items-center justify-between gap-5">
                                    {" "}
                                    <Heading
                                      size="text3xl"
                                      as="h6"
                                      className="text-[20px] font-medium"
                                    >
                                      {" "}
                                      {d.whatisa}{" "}
                                    </Heading>{" "}
                                    <Img
                                      src="images/img_frame_black_900_01_24x24.svg"
                                      alt="Image"
                                      className="h-[24px] self-start"
                                    />{" "}
                                  </div>{" "}
                                </div>{" "}
                              </>
                            )}{" "}
                          </AccordionItemState>{" "}
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
                        <div>Dummy Content</div>{" "}
                      </AccordionItemPanel>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <CreditColumnFour />{" "}
        </div>{" "}
        <footer className="flex items-center justify-center bg-black-0 py-[18px]">
          {" "}
          <div className="container-sm mt-5 flex justify-center px-14 md:px-5">
            {" "}
            <div className="flex w-[90%] flex-col items-start md:w-full">
              {" "}
              <div className="flex items-center justify-between gap-5 self-stretch">
                {" "}
                <Img
                  src="images/img_footer_logo.svg"
                  alt="Footerlogo"
                  className="h-[44px] w-[52px] object-contain"
                />{" "}
                <div className="flex items-center gap-5">
                  {" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_facebook.svg" />{" "}
                  </Button>{" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_trash.svg" />{" "}
                  </Button>{" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_link.svg" />{" "}
                  </Button>{" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_vector.svg" />{" "}
                  </Button>{" "}
                  <Img
                    src="images/img_link_white.svg"
                    alt="Link"
                    className="h-[30px] w-[20%] rounded-[50%]"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-[94px] flex items-start justify-between gap-5 self-stretch md:flex-col">
                {" "}
                <div className="flex w-[30%] items-start justify-between gap-5 self-center md:w-full">
                  {" "}
                  <div className="flex w-[66%] flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="headings"
                      as="h6"
                      className="text-[16px] font-bold !text-white"
                    >
                      {" "}
                      Instruction & Guide{" "}
                    </Heading>{" "}
                    <ul className="flex flex-col items-start gap-5">
                      {" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Buyers Guide{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Buying & Living{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Industry Profiles{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col items-start gap-5 self-center">
                    {" "}
                    <Heading
                      size="headings"
                      as="h6"
                      className="text-[16px] font-bold !text-white"
                    >
                      {" "}
                      Quick links{" "}
                    </Heading>{" "}
                    <ul className="flex flex-col items-start gap-5">
                      {" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            About us{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Advertise with us{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Privacy Policy{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Terms of use{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Sitemap{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex w-[38%] flex-col items-start md:w-full">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="w-full text-[20px] font-medium leading-[30px] !text-white"
                  >
                    {" "}
                    Sign up for new development alerts and Receive every new
                    listing in your inbox.{" "}
                  </Heading>{" "}
                  <Input
                    size="sm"
                    type="email"
                    name="email"
                    placeholder={`Email address`}
                    suffix={
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-black-0">
                        {" "}
                        <Img
                          src="images/img_arrowleft_white.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px] rounded-[50%] object-contain p-2.5"
                        />{" "}
                      </div>
                    }
                    className="mt-5 gap-4 self-stretch rounded-[24px] px-[18px] !text-blue_gray-400"
                  />{" "}
                  <Text
                    size="texts"
                    as="p"
                    className="mt-2 text-[12px] font-normal !text-white"
                  >
                    {" "}
                    Donn’t worry! We don’t send spam.{" "}
                  </Text>{" "}
                </div>{" "}
              </div>{" "}
              <Text
                size="texts"
                as="p"
                className="mt-[58px] text-[12px] font-normal !text-white"
              >
                {" "}
                © 2024 Lar Ltd. All rights reserved.{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </footer>{" "}
      </div>{" "}
    </>
  );
}
