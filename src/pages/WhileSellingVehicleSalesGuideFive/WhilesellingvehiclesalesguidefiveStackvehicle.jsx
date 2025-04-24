import { Button, Img, Heading, Text } from "../../components";
import VehicleValueInfo from "../../components/VehicleValueInfo";
import WhileBuyingVehicleBuyingGuideThreeRowcheck from "../../components/WhileBuyingVehicleBuyingGuideThreeRowcheck";
import React, { Suspense } from "react";
const data = [
  { check: " Check", detailed: "Detailed Information" },
  {
    check: "Have the Vehicle Appraised",
    detailed: "Detailed Information",
    description: (
      <>
        {" "}
        You can benefit from the Auto Expertise service to have the vehicle you
        want to buy appraised through the business partners of
        aracasahibinden.com .<br /> You can have the vehicle you want to buy
        appraised through authorized auto appraisal companies.{" "}
      </>
    ),
  },
  { check: "Prepare for Notary Procedures", detailed: "Detailed Information" },
  {
    check: "Get Car Insurance and Traffic Insurance",
    detailed: "Detailed Information",
    description:
      "You can secure your vehicle with Comprehensive and Traffic Insurance provided by insurance companies.",
  },
];
const data1 = [
  {
    mainHeading: "Learn the Market Value of the Vehicle",
    detailedInfoText: "Detailed Information",
  },
  {
    mainHeading: "How Much Should the Vehicle Deposit Be?",
    detailedInfoText: "Detailed Information",
  },
  { mainHeading: "Learn", detailedInfoText: "Detailed Information" },
  {
    mainHeading: "Check Out Credit Opportunities",
    detailedInfoText: "Detailed Information",
  },
  {
    mainHeading: "Decide How You Will Pay for the Vehicle",
    detailedInfoText: "Detailed Information",
  },
];
export default function WhilesellingvehiclesalesguidefiveStackvehicle() {
  return (
    <div className="relative h-[4236px] content-center md:h-auto">
      {" "}
      <div className="flex flex-1 flex-col items-center">
        {" "}
        <div className="flex flex-col items-center self-stretch">
          {" "}
          <div className="h-[462px] self-stretch bg-[url(/public/images/img_group_7172.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5">
            {" "}
            <div className="flex flex-col items-center gap-5">
              {" "}
              <div className="container-sm flex flex-col items-center px-14 md:px-5">
                {" "}
                <Heading
                  size="text11xl"
                  as="h1"
                  className="text-[60px] font-medium !text-white md:text-[52px] sm:text-[46px]"
                >
                  {" "}
                  Vehicle Purchasing Guide in 11 Steps{" "}
                </Heading>{" "}
              </div>{" "}
              <Heading
                size="text7xl"
                as="h2"
                className="self-stretch text-center text-[25px] font-medium leading-[37px] !text-white md:text-[23px] sm:text-[21px]"
              >
                {" "}
                <>
                  {" "}
                  Are you looking for a car? You are probably wondering about
                  many things. <br /> The 11-step car buying guide will help
                  you. You can find answers to your questions by following the
                  route.{" "}
                </>{" "}
              </Heading>{" "}
            </div>{" "}
          </div>
          <div className="container-sm relative mt-[-36px] md:px-5">
            {" "}
            <div className="flex items-start md:flex-col">
              {" "}
              <div className="flex w-[44%] flex-col items-start gap-5 self-center rounded-[10px] bg-white p-6 shadow-xs md:w-full sm:p-5">
                {" "}
                <Heading
                  size="text7xl"
                  as="h3"
                  className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Determine the Right Vehicle for You{" "}
                </Heading>{" "}
                <Heading
                  size="text3xl"
                  as="h4"
                  className="text-[20px] font-medium leading-[30px]"
                >
                  {" "}
                  <>
                    {" "}
                    The answers to many questions that come to your <br /> mind,
                    such as “New or second-hand?”, “Gasoline or <br /> diesel?”
                    or “SUV or sedan?” are in the article{" "}
                  </>{" "}
                </Heading>{" "}
                <Text
                  as="p"
                  className="mb-[58px] text-[16px] font-medium !text-primary_colors-900"
                >
                  {" "}
                  How Can I Find the Right Car for Me?{" "}
                </Text>{" "}
              </div>{" "}
              <Img
                src="images/img_forward.svg"
                alt="Forward"
                className="relative ml-[-6px] mt-11 h-[24px] md:ml-0 md:w-full"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container-sm relative mt-[-204px] px-6 md:px-5">
          {" "}
          <div className="flex items-center gap-3 md:flex-col">
            {" "}
            <div className="flex flex-1 flex-col items-end md:self-stretch">
              {" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="h5"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                2{" "}
              </Heading>
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="h6"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                3{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="mt-2.5 flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                4{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                5{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                6{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                7{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                8{" "}
              </Heading>
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                9{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                10{" "}
              </Heading>{" "}
              <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
              <Heading
                size="text10xl"
                as="p"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                11{" "}
              </Heading>{" "}
            </div>{" "}
            <div className="ml-3 flex w-[48%] flex-col gap-[410px] md:ml-0 md:w-full">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data1.map((d, index) => (
                  <VehicleValueInfo {...d} key={"listlearnthe" + index} />
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="absolute bottom-[-1px] left-0 right-0 z-[6] mx-10 flex flex-1 flex-col gap-[390px] md:mx-0 md:gap-[292px] sm:gap-[195px]">
        {" "}
        <div className="flex items-start md:flex-col">
          {" "}
          <div className="flex w-[44%] flex-col justify-center gap-5 self-center rounded-[10px] bg-white px-6 py-[18px] shadow-xs md:w-full md:px-5">
            {" "}
            <Heading
              size="text7xl"
              as="p"
              className="mt-1 text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
            >
              {" "}
              <>
                {" "}
                Search for a Vehicle and Contact the <br /> Advertiser{" "}
              </>{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium leading-[30px]"
            >
              {" "}
              <span>
                {" "}
                <>
                  {" "}
                  After deciding on the vehicle model you will buy, <br /> you
                  can search on sahibinden.com. You can&nbsp;{" "}
                </>{" "}
              </span>{" "}
              <span>
                {" "}
                <>
                  {" "}
                  save your searches and be notified when new <br /> listings
                  suitable for you arrive. <br /> You can contact the listing
                  owner for the vehicles you like.{" "}
                </>{" "}
              </span>{" "}
            </Heading>{" "}
          </div>{" "}
          <Img
            src="images/img_forward.svg"
            alt="Forward"
            className="relative ml-[-6px] mt-11 h-[24px] md:ml-0 md:w-full"
          />{" "}
        </div>{" "}
        <div className="mr-[742px] flex flex-col gap-[400px] md:mr-0">
          {" "}
          <Suspense fallback={<div>Loading feed...</div>}>
            {" "}
            {data.map((d, index) => (
              <WhileBuyingVehicleBuyingGuideThreeRowcheck
                {...d}
                key={"listcheck" + index}
              />
            ))}{" "}
          </Suspense>{" "}
        </div>{" "}
      </div>
      <Button
        size="10xl"
        shape="square"
        className="absolute left-0 right-0 top-[11%] mx-auto w-[74px]"
      >
        {" "}
        <Img src="images/defaultNoData.png" />{" "}
      </Button>{" "}
    </div>
  );
}
