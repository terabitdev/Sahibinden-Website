import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import WhilesellingvehiclesalesguidethreeColumn from "./WhilesellingvehiclesalesguidethreeColumn";
import WhilesellingvehiclesalesguidethreeColumnOne from "./WhilesellingvehiclesalesguidethreeColumnOne";
import WhilesellingvehiclesalesguidethreeColumnThree from "./WhilesellingvehiclesalesguidethreeColumnThree";
import React from "react";
export default function WhileSellingVehicleSalesGuideThreePage() {
  const [searchBarValue94, setSearchBarValue94] = React.useState("");
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
      <div className="flex w-full flex-col gap-[92px] bg-white md:gap-[69px] sm:gap-[46px]">
        {" "}
        <header className="flex flex-col items-center gap-[30px]">
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
                value={searchBarValue94}
                onChange={(e) => setSearchBarValue94(e.target.value)}
                suffix={
                  searchBarValue94?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue94("")} />
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
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text as="p" className="text-[16px] font-medium">
                    {" "}
                    While Buying{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text as="p" className="text-[16px] font-medium">
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
                    className="text-[16px] font-normal hover:font-medium"
                  >
                    {" "}
                    Maintenance & Repair{" "}
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
                    className="text-[16px] font-normal hover:font-medium"
                  >
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
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:font-medium"
                  >
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-[52px] sm:gap-[26px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-center justify-between gap-5 md:flex-col">
              {" "}
              <Heading
                size="heading4xl"
                as="h1"
                className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
              >
                {" "}
                How Can I Find Out the Market Value of the Vehicle I Will Sell?{" "}
              </Heading>{" "}
              <div className="flex gap-[31px]">
                {" "}
                <Button
                  color="primary_colors_900"
                  size="8xl"
                  variant="fill"
                  className="min-w-[174px] rounded-[10px] px-[34px] font-medium capitalize sm:px-5"
                >
                  {" "}
                  Pre-Sales{" "}
                </Button>{" "}
                <Button
                  size="8xl"
                  variant="fill"
                  className="min-w-[174px] rounded-[10px] border border-solid border-primary_colors-900 px-[29px] font-medium capitalize !text-primary_colors-900 sm:px-5"
                >
                  {" "}
                  During Sales{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="flex flex-col items-center self-stretch">
            {" "}
            <WhilesellingvehiclesalesguidethreeColumn />{" "}
            <div className="container-sm mt-5 flex flex-col items-start md:px-5">
              {" "}
              <Heading
                size="headingxl"
                as="h4"
                className="text-[25px] font-bold md:text-[23px] sm:text-[21px]"
              >
                {" "}
                What are Notary Procedures?{" "}
              </Heading>{" "}
            </div>{" "}
            <WhilesellingvehiclesalesguidethreeColumnOne />{" "}
            <WhilesellingvehiclesalesguidethreeColumnThree />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
