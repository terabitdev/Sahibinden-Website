import { Img, Text, Heading } from "./..";
import React from "react";
export default function WhileBuyingVehicleBuyingGuideThreeRowcheck({
  check = "Check",
  description,
  detailed = "Detailed Information",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-start self-stretch md:px-5 flex-1`}
    >
      {" "}
      <div className="flex flex-1 flex-col items-start justify-center gap-5 self-center rounded-[10px] bg-white px-4 py-[22px] shadow-xs sm:gap-5 sm:self-stretch sm:py-5">
        {" "}
        <Heading
          size="text7xl"
          as="p"
          className="ml-2 text-[25px] font-medium sm:ml-0 sm:text-[21px]"
        >
          {" "}
          {check}{" "}
        </Heading>{" "}
        <Heading
          size="text3xl"
          as="p"
          className="ml-2 text-[20px] font-medium leading-[30px] sm:ml-0 sm:text-[17px]"
        >
          {" "}
          <span>
            {" "}
            <>
              {" "}
              When you contact the seller and see the vehicle on site; <br />{" "}
            </>{" "}
          </span>{" "}
          <span>
            {" "}
            <>
              {" "}
              Inquiry into the damage to the vehicle, <br />{" "}
            </>{" "}
          </span>{" "}
          <span>
            {" "}
            <>
              {" "}
              You should take a test drive with the vehicle, <br />{" "}
            </>{" "}
          </span>{" "}
          <span>
            {" "}
            <>
              {" "}
              It is recommended that you check the vehicle&#39;s <br />{" "}
              registration information and chassis information.{" "}
            </>{" "}
          </span>{" "}
        </Heading>{" "}
        <Text
          as="p"
          className="ml-2 text-[16px] font-medium !text-primary_colors-900 sm:ml-0 sm:text-[13px]"
        >
          {" "}
          {detailed}{" "}
        </Text>{" "}
      </div>{" "}
      <Img
        src="images/img_forward.svg"
        alt="Check"
        className="relative ml-[-6px] mt-11 h-[24px]"
      />{" "}
    </div>
  );
}
