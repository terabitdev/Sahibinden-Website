import { Heading } from "./..";
import React from "react";
export default function RealEstateInfo({
  housingText = "Housing",
  workplaceText = "Workplace",
  plotText = "Plot",
  housingProjectsText = "Housing Projects",
  buildingText = "Building",
  timeshareText = "Timeshare",
  touristFacilityText = "Tourist Facility",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[24%] md:w-full gap-2.5 p-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading
        size="text3xl"
        as="p"
        className="rounded-bl-[5px] rounded-br-[14px] rounded-tl-[5px] rounded-tr-[14px] bg-primary_colors-900 pl-[22px] pr-[34px] text-[20px] font-medium !text-white sm:px-5"
      >
        {" "}
        {housingText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="text-[20px] font-medium">
        {" "}
        {workplaceText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="text-[20px] font-medium">
        {" "}
        {plotText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="text-[20px] font-medium">
        {" "}
        {housingProjectsText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="text-[20px] font-medium">
        {" "}
        {buildingText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="text-[20px] font-medium">
        {" "}
        {timeshareText}{" "}
      </Heading>{" "}
      <Heading size="text3xl" as="p" className="mb-14 text-[20px] font-medium">
        {" "}
        {touristFacilityText}{" "}
      </Heading>{" "}
    </div>
  );
}
