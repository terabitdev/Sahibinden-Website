import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealestateexpertisewhenrentingtwoColumnThree from "./RealestateexpertisewhenrentingtwoColumnThree";
import React from "react";
export default function RealEstateExpertiseWhenRentingTwoPage() {
  const [searchBarValue157, setSearchBarValue157] = React.useState("");
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
        <header className="flex flex-col items-center gap-7 self-stretch">
          {" "}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            {" "}
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                {" "}
                <Img
                  src="images/img_untitled_design.png"
                  alt="Untitleddesign"
                  className="h-[80px] w-[22%] object-contain md:w-full"
                />{" "}
              </a>{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue157}
                onChange={(e) => setSearchBarValue157(e.target.value)}
                suffix={
                  searchBarValue157?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue157("")} />
                  ) : null
                }
                className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>{" "}
            <div className="mb-3 mr-10 flex w-[34%] items-center justify-between gap-5 self-end md:mr-0 md:w-full md:px-5">
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
            <div className="flex flex-col items-end">
              {" "}
              <ul className="flex flex-wrap gap-[102px] md:gap-5">
                {" "}
                <li>
                  {" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
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
                      Credit{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
              <Text
                as="p"
                className="relative mr-[78px] mt-[-24px] text-[16px] font-medium !text-primary_colors-900 md:mr-0"
              >
                {" "}
                When Renting{" "}
              </Text>{" "}
            </div>{" "}
          </div>
        </header>{" "}
        <div className="container-sm mt-[88px] md:px-5">
          {" "}
          <div className="flex items-center justify-between gap-5 md:flex-col">
            {" "}
            <Heading
              size="heading4xl"
              as="h1"
              className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
            >
              {" "}
              What is a Family Residence Notification and How it is Placed?{" "}
            </Heading>{" "}
            <div className="flex gap-[31px]">
              {" "}
              <Button
                color="primary_colors_900"
                size="8xl"
                variant="fill"
                className="min-w-[174px] rounded-[10px] px-5 font-medium capitalize"
              >
                {" "}
                Before Renting{" "}
              </Button>{" "}
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                {" "}
                <Button
                  size="8xl"
                  variant="fill"
                  className="min-w-[174px] rounded-[10px] border border-solid border-primary_colors-900 px-[33px] font-medium capitalize !text-primary_colors-900 sm:px-5"
                >
                  {" "}
                  After Lease{" "}
                </Button>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <RealestateexpertisewhenrentingtwoColumnThree />{" "}
        <div className="mt-[100px] self-stretch">
          {" "}
          <Footer className="bg-black-0" />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
