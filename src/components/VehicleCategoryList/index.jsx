import { Heading } from "./..";
import React from "react";
export default function VehicleCategoryList({
  carCategoryText = "Car",
  offroadSuvCategoryText = "Off-Road, SUV & Pickup",
  minivanPanelCategoryText = "Minivan & Panel Van",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[24%] md:w-full gap-2.5 px-[22px] py-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading
        size="text3xl"
        as="p"
        className="flex items-center justify-center rounded-[10px] bg-primary_colors-900 px-[18px] text-[20px] font-medium !text-white"
      >
        {" "}
        {carCategoryText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="text-[20px] font-medium">
        {" "}
        {offroadSuvCategoryText}{" "}
      </Heading>{" "}
      <Heading
        size="text3xl"
        as="p"
        className="mb-[78px] text-[20px] font-medium"
      >
        {" "}
        {minivanPanelCategoryText}{" "}
      </Heading>{" "}
    </div>
  );
}
