import { Heading } from "../../components";
import VehicleCategoryList from "../../components/VehicleCategoryList";
import React, { Suspense } from "react";
const data = [
  {
    carCategoryText: "Car",
    offroadSuvCategoryText: "Off-Road, SUV & Pickup",
    minivanPanelCategoryText: "Minivan & Panel Van",
  },
  {
    carCategoryText: "Car",
    offroadSuvCategoryText: "Off-Road, SUV & Pickup",
    minivanPanelCategoryText: "Minivan & Panel Van",
  },
  {
    carCategoryText: "Car",
    offroadSuvCategoryText: "Off-Road, SUV & Pickup",
    minivanPanelCategoryText: "Minivan & Panel Van",
  },
  {
    carCategoryText: "Berlingo",
    offroadSuvCategoryText: "Jumper*",
    minivanPanelCategoryText: "Jumpy*",
  },
];
export default function WhilesellingvehiclevaluationoneRowFive() {
  return (
    <div className="self-stretch">
      {" "}
      <div className="flex items-center justify-center md:flex-col">
        {" "}
        <div className="flex w-full items-center justify-end md:flex-col md:px-5">
          {" "}
          <div className="container-sm flex justify-center rounded-[10px] bg-white p-6 shadow-xs md:px-5 sm:p-5">
            {" "}
            <div className="flex w-full flex-col items-start gap-5">
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
                size="text3xl"
                as="h2"
                className="text-[20px] font-medium !text-blue_gray-400_03"
              >
                {" "}
                Select the vehicle yor are interested in below.{" "}
              </Heading>{" "}
              <Heading
                size="text3xl"
                as="h3"
                className="text-[20px] font-medium"
              >
                {" "}
                Vehicle Type Selection{" "}
              </Heading>{" "}
              <div className="mr-[124px] flex gap-5 self-stretch md:mr-0 md:flex-col">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <VehicleCategoryList {...d} key={"listcar" + index} />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="mb-6 flex w-[12%] self-end rounded-[10px] bg-white p-6 shadow-xs md:w-full sm:p-5">
            {" "}
            <div className="mb-[158px] flex rounded-[10px] bg-primary_colors-900 px-4">
              {" "}
              <Heading
                size="text3xl"
                as="h4"
                className="text-[20px] font-medium !text-white"
              >
                {" "}
                Diesel{" "}
              </Heading>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mb-6 flex w-[44%] justify-center gap-5 self-end md:w-full md:px-5 sm:flex-col">
          {" "}
          <div className="flex w-[44%] rounded-[10px] bg-white p-6 shadow-xs sm:w-full sm:p-5">
            {" "}
            <div className="mb-[158px] flex h-[30px] items-center rounded-[10px] bg-[url(/public/images/img_group_1686557184.svg)] bg-cover bg-no-repeat px-4 md:h-auto">
              {" "}
              <Heading
                size="text3xl"
                as="h5"
                className="text-[20px] font-medium !text-white"
              >
                {" "}
                Glass Van{" "}
              </Heading>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex w-[44%] flex-col items-start gap-2.5 rounded-[10px] bg-white p-6 shadow-xs sm:w-full sm:p-5">
            {" "}
            <div className="flex h-[30px] items-center justify-center self-stretch rounded-[10px] bg-[url(/public/images/img_group_1686557184.svg)] bg-cover bg-no-repeat px-3.5 md:h-auto">
              {" "}
              <Heading
                size="text3xl"
                as="h6"
                className="text-[20px] font-medium !text-white"
              >
                {" "}
                1.5 BlueHDI Feel Bold{" "}
              </Heading>{" "}
            </div>{" "}
            <Heading size="text3xl" as="p" className="text-[20px] font-medium">
              {" "}
              1.5 Blue HDi Shine{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="mb-[78px] text-[20px] font-medium"
            >
              {" "}
              1.5 Blue HDi Shine Bold{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
