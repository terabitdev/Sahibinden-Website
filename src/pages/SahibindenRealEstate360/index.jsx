import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import SahibindenRealEstate360Row from "../../components/SahibindenRealEstate360Row";
import Sahibindenrealestate360Column from "./Sahibindenrealestate360Column";
import React, { Suspense } from "react";
const data = [
  {
    province: "Province",
    district: "District",
    neighbourhood: "Neighbourhood",
    creatIndex: "Creat Index",
    realestate: "Real Estate Index",
    description: (
      <>
        {" "}
        With Türkiye&#39;s most comprehensive Real Estate <br /> Index, you can
        comparatively follow current sale <br /> and rental price changes,
        demographic <br /> information, and the districts that gained/lost the{" "}
        <br /> most value in the region you are interested in.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    province: "Province",
    district: "District",
    neighbourhood: "Neighbourhood",
    creatIndex: "Creat Index",
    realestate: "Real Estate Index",
    description: (
      <>
        {" "}
        With Türkiye&#39;s most comprehensive Real Estate <br /> Index, you can
        comparatively follow current sale <br /> and rental price changes,
        demographic <br /> information, and the districts that gained/lost the{" "}
        <br /> most value in the region you are interested in.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    province: "Province",
    district: "District",
    neighbourhood: "Neighbourhood",
    creatIndex: "Creat Index",
    realestate: "Real Estate Index",
    description: (
      <>
        {" "}
        With Türkiye&#39;s most comprehensive Real Estate <br /> Index, you can
        comparatively follow current sale <br /> and rental price changes,
        demographic <br /> information, and the districts that gained/lost the{" "}
        <br /> most value in the region you are interested in.{" "}
      </>
    ),

    detailed: "Detailed Information",
  },
];
export default function SahibindenRealEstate360Page() {
  const [searchBarValue141, setSearchBarValue141] = React.useState("");
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
                value={searchBarValue141}
                onChange={(e) => setSearchBarValue141(e.target.value)}
                suffix={
                  searchBarValue141?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue141("")} />
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
              </a>
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
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a href="#" className="cursor-pointer">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-medium !text-primary_colors-900 hover:font-normal"
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
                    className="text-[16px] font-medium hover:font-normal hover:text-primary_colors-900"
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
                    className="text-[16px] font-medium hover:font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    When Renting{" "}
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
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm flex flex-col items-start gap-[62px] md:px-5 sm:gap-[31px]">
            {" "}
            <div className="ml-[448px] flex w-[22%] flex-col items-center rounded-lg md:ml-0 md:w-full">
              {" "}
              <div className="flex justify-center self-stretch bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                >
                  {" "}
                  Real Estate Expertise{" "}
                </Text>{" "}
              </div>{" "}
              <Input
                size="xs"
                shape="square"
                name="itemtwo_one"
                placeholder={`Real Estate Index`}
                className="self-stretch px-3.5 font-montserrat !text-blue_gray-900_01"
              />{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
              >
                {" "}
                Credit{" "}
              </Text>{" "}
              <Button
                size="lg"
                variant="fill"
                shape="square"
                className="self-stretch pl-4 pr-2 font-montserrat !text-blue_gray-900_01"
              >
                {" "}
                Property Buying Guide{" "}
              </Button>{" "}
              <div className="flex justify-center self-stretch bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                >
                  {" "}
                  Real Estate Dictionary{" "}
                </Text>{" "}
              </div>{" "}
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch">
              {" "}
              <Heading
                size="text7xl"
                as="h1"
                className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Most Used{" "}
              </Heading>{" "}
              <div className="flex flex-col gap-[50px] self-stretch">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <SahibindenRealEstate360Row
                      {...d}
                      key={"listprovince" + index}
                      className="rounded-[10px] bg-white shadow-sm hover:shadow-sm"
                    />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <Sahibindenrealestate360Column />{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
