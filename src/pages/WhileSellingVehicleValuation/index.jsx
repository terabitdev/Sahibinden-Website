import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import WhileBuyingVehicleValuationColumnwhatisveh from "../../components/WhileBuyingVehicleValuationColumnwhatisveh";
import WhilesellingvehiclevaluationColumnOne from "./WhilesellingvehiclevaluationColumnOne";
import WhilesellingvehiclevaluationColumnThree from "./WhilesellingvehiclevaluationColumnThree";
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
export default function WhileSellingVehicleValuationPage() {
  const [searchBarValue87, setSearchBarValue87] = React.useState("");
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
      <div className="flex w-full flex-col gap-[100px] bg-white md:gap-[75px] sm:gap-[50px]">
        {" "}
        <div className="flex flex-col items-center">
          {" "}
          <header className="flex flex-col items-center gap-[30px] self-stretch">
            {" "}
            <div className="flex items-center justify-center gap-[50px] self-stretch md:flex-col">
              {" "}
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
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
                  value={searchBarValue87}
                  onChange={(e) => setSearchBarValue87(e.target.value)}
                  suffix={
                    searchBarValue87?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue87("")} />
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
                    <Text as="p" className="text-[16px] font-normal">
                      {" "}
                      While Buying{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">
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
                </li>
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
          </header>{" "}
          <div className="container-sm flex flex-col items-start gap-16 md:px-5 sm:gap-8">
            {" "}
            <div className="ml-[462px] flex w-[22%] flex-col items-center rounded-lg md:ml-0 md:w-full">
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
            </div>
            <div className="flex flex-col gap-[50px] self-stretch">
              {" "}
              <div>
                {" "}
                <div className="rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <div className="mb-12 mr-[62px] flex flex-col items-start gap-5 md:mr-0">
                    {" "}
                    <Heading
                      size="text9xl"
                      as="h1"
                      className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
                    >
                      {" "}
                      Vehicle Valuation{" "}
                    </Heading>{" "}
                    <Heading
                      size="text9xl"
                      as="h2"
                      className="text-[30px] font-medium leading-[45px] md:text-[28px] sm:text-[26px]"
                    >
                      {" "}
                      <>
                        {" "}
                        Learn the estimated market value of the vehicle you want
                        to buy or sell with <br /> our &quot;Vehicle Valuation
                        Service&quot;! This service is offered by utilizing the
                        current <br /> and comprehensive ad data on
                        sahibinden.com.{" "}
                      </>{" "}
                    </Heading>{" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Button
                        color="primary_colors_900"
                        size="4xl"
                        variant="fill"
                        className="min-w-[352px] rounded px-[34px] font-semibold !text-indigo-50_02 sm:px-5"
                      >
                        {" "}
                        Vehicle Valuation{" "}
                      </Button>{" "}
                    </a>{" "}
                    <Heading
                      size="headingmd"
                      as="h3"
                      className="w-full text-[20px] font-semibold leading-5 !text-blue_gray-400_03"
                    >
                      {" "}
                      <>
                        {" "}
                        sahibinden.com is not responsible for any damages that
                        users or third parties may suffer in the event that any
                        transaction, <br /> including purchase or sale, is made
                        or not made based on the information provided in the
                        vehicle valuation service. <br /> The vehicle&#39;s
                        paint, damage status and additional equipment features
                        are not taken into consideration in the calculation.{" "}
                      </>{" "}
                    </Heading>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
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
          </div>{" "}
        </div>{" "}
        <WhilesellingvehiclevaluationColumnOne />{" "}
        <WhilesellingvehiclevaluationColumnThree />{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
