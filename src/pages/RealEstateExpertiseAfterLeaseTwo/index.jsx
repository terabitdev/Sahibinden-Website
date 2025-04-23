import { Helmet } from "react-helmet";
import { Text, Button, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealestateexpertiseafterleasetwoColumn from "./RealestateexpertiseafterleasetwoColumn";
import RealestateexpertiseafterleasetwoColumnOne from "./RealestateexpertiseafterleasetwoColumnOne";
import React from "react";
export default function RealEstateExpertiseAfterLeaseTwoPage() {
  const [searchBarValue165, setSearchBarValue165] = React.useState("");
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
      <div className="flex w-full flex-col gap-[94px] bg-white md:gap-[70px] sm:gap-[47px]">
        {" "}
        <header className="flex flex-col items-center gap-7">
          {" "}
          <div className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
            {" "}
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col">
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
                value={searchBarValue165}
                onChange={(e) => setSearchBarValue165(e.target.value)}
                suffix={
                  searchBarValue165?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue165("")} />
                  ) : null
                }
                className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>
            <div className="mb-3 flex w-[34%] items-center justify-between gap-5 self-end md:w-full">
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
          </div>
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
                    className="text-[16px] font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    While Buying{" "}
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
                    className="text-[16px] font-medium hover:text-primary_colors-900"
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
                    className="text-[16px] font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <RealestateexpertiseafterleasetwoColumn />{" "}
          <RealestateexpertiseafterleasetwoColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
