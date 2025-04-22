import { Heading } from "../../components";
import React from "react";
export default function AddetailsColumnTwo() {
  return (
    <div className="mt-[60px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-6 px-10 md:px-5">
        {" "}
        <Heading
          size="heading3xl"
          as="h3"
          className="text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
        >
          {" "}
          Additional Details{" "}
        </Heading>{" "}
        <div className="self-stretch">
          {" "}
          <div className="flex flex-wrap justify-between gap-5 bg-white px-[30px] py-[18px] sm:px-5">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium capitalize !text-black-1"
            >
              {" "}
              BEDROOM FEATURES:{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="mr-[346px] self-end text-[20px] font-normal capitalize !text-text md:mr-0"
            >
              {" "}
              Main Floor Master Bedroom, Walk-In Closet{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex flex-wrap justify-between gap-5 bg-primary_colors-900 px-[30px] py-5 sm:px-5">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium capitalize !text-white"
            >
              {" "}
              DINING AREA:{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="mr-[332px] text-[20px] font-normal capitalize !text-white md:mr-0"
            >
              {" "}
              Breakfast Counter/Bar, Living/Dining Combo{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex flex-wrap gap-[247px] bg-white px-[30px] py-[18px] md:gap-5 sm:px-5">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="self-end text-[20px] font-medium capitalize !text-black-1"
            >
              {" "}
              DOORS & WINDOWS{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="self-end text-[20px] font-normal capitalize !text-text"
            >
              {" "}
              Bay Window{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex flex-wrap gap-[273px] bg-primary_colors-900 px-[30px] py-5 md:gap-5 sm:px-5">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium capitalize !text-white"
            >
              {" "}
              ENTRY LOCATION:{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-normal capitalize !text-white"
            >
              {" "}
              Mid Level{" "}
            </Heading>{" "}
          </div>
          <div className="flex flex-wrap gap-[185px] bg-white px-[30px] py-5 md:gap-5 sm:px-5">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium capitalize !text-black-1"
            >
              {" "}
              EXTERIOR CONSTRUCTION:{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-normal capitalize !text-text"
            >
              {" "}
              Wood{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex flex-wrap gap-[293px] bg-primary_colors-900 px-[30px] py-5 md:gap-5 sm:px-5">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium capitalize !text-white"
            >
              {" "}
              FIREPLACE FUEL:{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-normal capitalize !text-white"
            >
              {" "}
              Pellet Stove{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
