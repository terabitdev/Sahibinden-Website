import { Img, Text, Heading } from "./..";
import React from "react";
export default function RealEstateIndex10StepsForRowexaminethe({
  examinethe = "Examine the Value Change in the Area",
  description = "You can easily examine the rental square meter prices, access demographic information such as population age distribution and education status, and choose a house that meets your expectations.",
  detailed = "Detailed Information",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-start self-stretch md:px-5 flex-1`}
    >
      {" "}
      <div className="flex flex-1 flex-col items-start gap-5 self-center rounded-[10px] bg-white p-6 shadow-xs sm:gap-5 sm:self-stretch sm:p-5">
        {" "}
        <Heading
          size="text7xl"
          as="p"
          className="text-[25px] font-medium sm:text-[21px]"
        >
          {" "}
          {examinethe}{" "}
        </Heading>{" "}
        <Heading
          size="text3xl"
          as="p"
          className="w-full text-[20px] font-medium leading-[30px] sm:w-full sm:text-[17px]"
        >
          {" "}
          {description}{" "}
        </Heading>{" "}
        <Text
          as="p"
          className="mb-7 text-[16px] font-medium !text-primary_colors-900 sm:text-[13px]"
        >
          {" "}
          {detailed}{" "}
        </Text>{" "}
      </div>{" "}
      <Img
        src="images/img_forward.svg"
        alt="Image"
        className="relative ml-[-6px] mt-11 h-[24px]"
      />{" "}
    </div>
  );
}
