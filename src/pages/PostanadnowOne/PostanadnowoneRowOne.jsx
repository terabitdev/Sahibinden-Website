import { Heading } from "../../components";
import RealEstateInfo from "../../components/RealEstateInfo";
import React, { Suspense } from "react";
const data = [
  {
    housingText: "Housing",
    workplaceText: "Workplace",
    plotText: "Plot",
    housingProjectsText: "Housing Projects",
    buildingText: "Building",
    timeshareText: "Timeshare",
    touristFacilityText: "Tourist Facility",
  },
  {
    housingText: "Housing",
    workplaceText: "Workplace",
    plotText: "Plot",
    housingProjectsText: "Housing Projects",
    buildingText: "Building",
    timeshareText: "Timeshare",
    touristFacilityText: "Tourist Facility",
  },
  {
    housingText: "Housing",
    workplaceText: "Workplace",
    plotText: "Plot",
    housingProjectsText: "Housing Projects",
    buildingText: "Building",
    timeshareText: "Timeshare",
    touristFacilityText: "Tourist Facility",
  },
  {
    housingText: "Housing",
    workplaceText: "Workplace",
    plotText: "Plot",
    housingProjectsText: "Housing Projects",
    buildingText: "Building",
    timeshareText: "Timeshare",
    touristFacilityText: "Tourist Facility",
  },
];
export default function PostanadnowoneRowOne() {
  return (
    <div className="mt-[126px] flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
          {" "}
          <div className="mb-14 flex flex-col items-start gap-5">
            {" "}
            <Heading
              size="text9xl"
              as="h1"
              className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
            >
              {" "}
              Step by Step Select Catgory{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="h2"
              className="text-[20px] font-medium !text-blue_gray-400_03"
            >
              {" "}
              Real Estate{" "}
            </Heading>{" "}
            <div className="mr-[124px] flex gap-5 self-stretch md:mr-0 md:flex-col">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data.map((d, index) => (
                  <RealEstateInfo {...d} key={"postAnAdNow" + index} />
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
