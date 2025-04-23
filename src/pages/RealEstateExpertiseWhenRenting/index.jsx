import { Helmet } from "react-helmet";
import { Text, Button, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealestateexpertisewhenrentingColumn from "./RealestateexpertisewhenrentingColumn";
import RealestateexpertisewhenrentingColumnOne from "./RealestateexpertisewhenrentingColumnOne";
import RealestateexpertisewhenrentingRowTwo from "./RealestateexpertisewhenrentingRowTwo";
import React from "react";
export default function RealEstateExpertiseWhenRentingPage() {
  const [searchBarValue154, setSearchBarValue154] = React.useState("");
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
        <header className="flex flex-col items-center gap-7">
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
            </a>{" "}
            <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue154}
                onChange={(e) => setSearchBarValue154(e.target.value)}
                suffix={
                  searchBarValue154?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue154("")} />
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    When Selling{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-medium !text-primary_colors-900"
                  >
                    {" "}
                    When Renting{" "}
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="flex flex-col items-center gap-16 sm:gap-8">
          {" "}
          <div className="container-sm flex flex-col items-end pl-14 pr-[436px] md:px-5">
            {" "}
            <div className="flex w-[24%] flex-col gap-[46px] rounded-lg md:w-full">
              {" "}
              <div className="flex bg-white px-4 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Real Estate Index{" "}
                </Text>{" "}
              </div>{" "}
              <div className="flex justify-center bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Real Estate Dictionary{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
            {" "}
            <RealestateexpertisewhenrentingColumn />{" "}
            <RealestateexpertisewhenrentingRowTwo />{" "}
            <RealestateexpertisewhenrentingColumnOne />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
