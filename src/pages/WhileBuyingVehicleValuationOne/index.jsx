import { Helmet } from "react-helmet";
import { Text, Button, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import WhileBuyingVehicleValuationColumnwhatisveh from "../../components/WhileBuyingVehicleValuationColumnwhatisveh";
import WhilebuyingvehiclevaluationoneColumnOne from "./WhilebuyingvehiclevaluationoneColumnOne";
import WhilebuyingvehiclevaluationoneColumnThree from "./WhilebuyingvehiclevaluationoneColumnThree";
import WhilebuyingvehiclevaluationoneRow from "./WhilebuyingvehiclevaluationoneRow";
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
export default function WhileBuyingVehicleValuationOnePage() {
  const [searchBarValue20, setSearchBarValue20] = React.useState("");
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
        <div className="flex flex-col items-center gap-1 self-stretch">
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
                  value={searchBarValue20}
                  onChange={(e) => setSearchBarValue20(e.target.value)}
                  suffix={
                    searchBarValue20?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue20("")} />
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
                    <Text as="p" className="text-[16px] font-medium">
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
          <div className="container-sm flex flex-col items-start pl-[328px] pr-14 md:px-5">
            {" "}
            <div className="flex w-[20%] flex-col items-center rounded-lg md:w-full">
              {" "}
              <div className="flex justify-center self-stretch bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
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
                className="self-stretch px-3.5 font-montserrat !text-primary_colors-900"
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
        </div>{" "}
        <WhilebuyingvehiclevaluationoneRow />{" "}
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
        <WhilebuyingvehiclevaluationoneColumnOne />{" "}
        <WhilebuyingvehiclevaluationoneColumnThree />{" "}
        <Footer className="mt-[100px] self-stretch bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
