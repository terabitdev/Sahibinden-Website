import { Heading } from "../../components";
import DieselTextComponent from "../../components/DieselTextComponent";
import VehicleCategoryList from "../../components/VehicleCategoryList";
import React, { Suspense } from "react";
const data = [
  { textContent: "Diesel" },
  { textContent: "Diesel" },
  { textContent: "Diesel" },
];
const data1 = [
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
export default function WhilebuyingvehiclevaluationoneRow() {
  return (
    <div className="mt-[60px] self-stretch">
      {" "}
      <div className="flex items-center justify-center md:flex-col">
        {" "}
        <div className="container-sm rounded-[10px] bg-white p-6 shadow-xs md:px-5 sm:p-5">
          {" "}
          <div className="flex flex-col items-start gap-5">
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
            <Heading size="text3xl" as="h3" className="text-[20px] font-medium">
              {" "}
              Vehicle Type Selection{" "}
            </Heading>{" "}
            <div className="mr-[124px] flex gap-5 self-stretch md:mr-0 md:flex-col">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data1.map((d, index) => (
                  <VehicleCategoryList {...d} key={"listcar" + index} />
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mb-6 flex w-[62%] gap-5 self-end md:w-full md:flex-col md:px-5">
          {" "}
          <Suspense fallback={<div>Loading feed...</div>}>
            {" "}
            {data.map((d, index) => (
              <DieselTextComponent {...d} key={"listdiesel" + index} />
            ))}{" "}
          </Suspense>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
