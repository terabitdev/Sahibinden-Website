import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import WhileBuyingVehicleComparisionColumnOne from "../../components/WhileBuyingVehicleComparisionColumnOne";
import WhilebuyingvehiclecomparisionColumnThree from "./WhilebuyingvehiclecomparisionColumnThree";
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
  { brand1: "Brand" },
  { brand1: "Model" },
  { brand1: "Gear" },
  { brand1: "Package" },
  { brand1: "Hardware" },
];
export default function WhileBuyingVehicleComparisionPage() {
  const [searchBarValue17, setSearchBarValue17] = React.useState("");
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
        <header className="flex flex-col items-center gap-[30px]">
          {" "}
          <div className="flex items-center justify-center gap-[50px] self-stretch md:flex-col">
            {" "}
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              {" "}
              <Img
                src="images/img_untitled_design.png"
                alt="Untitleddesign"
                className="h-[80px] w-[10%] object-contain md:w-full"
              />{" "}
            </a>
            <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue17}
                onChange={(e) => setSearchBarValue17(e.target.value)}
                suffix={
                  searchBarValue17?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue17("")} />
                  ) : null
                }
                className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
              <div className="flex w-[40%] items-center justify-between gap-5 self-end md:w-full">
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
                </a>{" "}
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
          </div>
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text as="p" className="text-[16px] font-normal">
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
                  <Text as="p" className="text-[16px] font-normal">
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
                  <Text as="p" className="text-[16px] font-normal">
                    {" "}
                    Maintenance & Repair{" "}
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
                  <Text as="p" className="text-[16px] font-normal">
                    {" "}
                    Credit{" "}
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
                  <Text as="p" className="text-[16px] font-normal">
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex flex-col gap-10">
              {" "}
              <div className="flex items-start gap-5 sm:flex-col">
                {" "}
                <Heading
                  size="text9xl"
                  as="h1"
                  className="self-end text-[30px] font-medium md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  Vehicle Comparison{" "}
                </Heading>{" "}
                <div className="mb-[42px] flex w-[16%] flex-col items-center rounded-lg sm:mb-0 sm:w-full">
                  {" "}
                  <div className="flex justify-center self-stretch bg-white p-3">
                    {" "}
                    <Text
                      as="p"
                      className="!font-montserrat text-[16px] font-normal !text-primary_colors-900"
                    >
                      {" "}
                      Vehicle Comparison{" "}
                    </Text>{" "}
                  </div>{" "}
                  <Input
                    size="xs"
                    shape="square"
                    name="itemtwo_one"
                    placeholder={`Vehicle Valuation`}
                    className="self-stretch px-3.5 font-montserrat !text-blue_gray-900_01"
                  />{" "}
                  <Text
                    as="p"
                    className="bg-white py-3 pl-4 !font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                  >
                    {" "}
                    Vehicle Damage Inquiry{" "}
                  </Text>{" "}
                  <Input
                    size="xs"
                    shape="square"
                    name="itemfour_one"
                    placeholder={`Auto Expertise`}
                    className="self-stretch px-3.5 font-montserrat !text-blue_gray-900_01"
                  />{" "}
                  <Button
                    size="lg"
                    variant="fill"
                    shape="square"
                    className="self-stretch px-[18px] font-montserrat !text-blue_gray-900_01"
                  >
                    {" "}
                    Vehicle Buying Guide{" "}
                  </Button>
                  <div className="flex self-stretch bg-white px-4 py-3">
                    {" "}
                    <Text
                      as="p"
                      className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                    >
                      {" "}
                      Auto Dictionary{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex md:flex-col">
                {" "}
                <div className="flex w-[34%] flex-col items-start md:w-full">
                  {" "}
                  <div className="flex w-[82%] flex-col gap-5 rounded-[10px] bg-white p-6 shadow-xs md:w-full sm:p-5">
                    {" "}
                    <div className="ml-[76px] mr-[62px] flex flex-col items-start gap-5 md:mx-0">
                      {" "}
                      <Heading
                        size="text9xl"
                        as="h2"
                        className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
                      >
                        {" "}
                        Add Vehicle{" "}
                      </Heading>{" "}
                      <Img
                        src="images/img_frame_black_900_01_200x200.svg"
                        alt="Image"
                        className="mr-3 h-[200px] w-full md:mr-0 md:h-auto"
                      />{" "}
                    </div>{" "}
                    <div className="mb-[54px] flex flex-col gap-5">
                      {" "}
                      <Accordion className="flex flex-col gap-5">
                        {" "}
                        {accordionData.map((d, i) => (
                          <AccordionItem uuid={i} key={`expandablelistb${i}`}>
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
                                      <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-[26px] py-[18px] sm:px-5">
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="text-[15px] font-normal capitalize !text-black-900_01"
                                        >
                                          {" "}
                                          {d.brand1}{" "}
                                        </Text>{" "}
                                        <Img
                                          src="images/img_frame_primary_colors_900_18x18.svg"
                                          alt="Image"
                                          className="mr-1 h-[20px] md:mr-0"
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
                      </Accordion>
                      <Button
                        color="primary_colors_900"
                        size="4xl"
                        variant="fill"
                        className="self-stretch rounded px-[34px] font-semibold !text-indigo-50_02 sm:px-5"
                      >
                        {" "}
                        Add{" "}
                      </Button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-1 gap-20 md:flex-col md:self-stretch">
                  {" "}
                  <WhileBuyingVehicleComparisionColumnOne className="hover:shadow-xs" />{" "}
                  <WhileBuyingVehicleComparisionColumnOne className="gap-5 rounded-[10px] bg-white p-6 shadow-xs hover:shadow-xs sm:p-5" />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <WhilebuyingvehiclecomparisionColumnThree />{" "}
        </div>{" "}
        <Footer className="mt-20 bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
s