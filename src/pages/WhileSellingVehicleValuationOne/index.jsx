import { Helmet } from "react-helmet";
import { Text, Button, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import WhileBuyingVehicleValuationColumnwhatisveh from "../../components/WhileBuyingVehicleValuationColumnwhatisveh";
import WhilesellingvehiclevaluationoneColumn from "./WhilesellingvehiclevaluationoneColumn";
import WhilesellingvehiclevaluationoneColumnTwo from "./WhilesellingvehiclevaluationoneColumnTwo";
import WhilesellingvehiclevaluationoneRowFive from "./WhilesellingvehiclevaluationoneRowFive";
import React, { Suspense } from "react";
const data = [
  {
    whatisvehicle: "What is Vehicle Valuation?",
    description: (
      <>
        {" "}
        Vehicle Valuation is a service that <br /> suggests a certain price
        range for <br /> each vehicle using the current ad <br /> data on
        sahibinden.com. You can <br /> immediately learn the accurate <br /> and
        reliable value of the vehicle <br /> you want to sell or buy by entering{" "}
        <br /> its features with Vehicle Valuation.{" "}
      </>
    ),
  },
  {
    whatisvehicle: "How Do We Calculate?",
    description: (
      <>
        {" "}
        It is calculated using statistical <br /> modeling created using
        variables <br /> such as vehicle brand, model, <br /> production year,
        fuel type, gear <br /> type, body type and mileage and <br /> the price
        published in the <br /> advertisement, according to the <br />{" "}
        advertisement data published on <br /> sahibinden.com in the last 30
        days. The vehicle&#39;s paint, damage status, whether the body has been
        renovated and additional equipment features are not taken into
        consideration in the calculation.{" "}
      </>
    ),
  },
  {
    whatisvehicle: "Important Information",
    description: (
      <>
        {" "}
        sahibinden.com is not responsible <br /> for any damages that users or
        third parties may suffer if any transaction, including purchase or sale,
        is made or not made based on the information provided in the vehicle
        valuation service.{" "}
      </>
    ),
  },
];
export default function WhileSellingVehicleValuationOnePage() {
  const [searchBarValue88, setSearchBarValue88] = React.useState("");
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
                value={searchBarValue88}
                onChange={(e) => setSearchBarValue88(e.target.value)}
                suffix={
                  searchBarValue88?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue88("")} />
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
            <div className="flex">
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
          </div>{" "}
        </header>{" "}
        <div className="mt-1 flex flex-col items-center gap-[58px] sm:gap-[29px]">
          {" "}
          <div className="container-sm flex flex-col items-start pl-[462px] pr-14 md:px-5">
            {" "}
            <div className="flex w-[24%] flex-col items-center rounded-lg md:w-full">
              {" "}
              <div className="flex self-stretch bg-white px-4 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal !text-primary_colors-900"
                >
                  {" "}
                  Vehicle Valuation{" "}
                </Text>{" "}
              </div>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
              >
                {" "}
                Auto Expertise{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
              >
                {" "}
                Vehicle Sales Guide{" "}
              </Text>{" "}
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
          </div>
          <div className="flex flex-col items-center self-stretch">
            {" "}
            <WhilesellingvehiclevaluationoneRowFive />{" "}
            <div className="container-sm mt-[50px] md:px-5">
              {" "}
              <div className="flex gap-[94px] md:flex-col">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <WhileBuyingVehicleValuationColumnwhatisveh
                      {...d}
                      key={"listwhatisvehic" + index}
                    />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
            <WhilesellingvehiclevaluationoneColumn />{" "}
            <WhilesellingvehiclevaluationoneColumnTwo />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
