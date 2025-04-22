import { Text, Heading, Img } from "./..";
import React from "react";
export default function VehicleValueInfo({
  mainHeading = "Learn the Market Value of the Vehicle",
  descriptionText,
  detailedInfoText = "Detailed Information",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-start self-stretch flex-1`}
    >
      {" "}
      <Img
        src="images/img_refresh.svg"
        alt="Image"
        className="relative z-[1] mt-11 h-[24px]"
      />{" "}
      <div className="relative ml-[-6px] flex flex-1 flex-col items-start gap-5 self-center rounded-[10px] bg-white p-6 shadow-xs sm:gap-5 sm:self-stretch sm:p-5">
        {" "}
        <Heading
          size="text7xl"
          as="p"
          className="text-[25px] font-medium sm:text-[21px]"
        >
          {" "}
          {mainHeading}{" "}
        </Heading>{" "}
        <Heading
          size="text3xl"
          as="p"
          className="w-[88%] text-[20px] font-medium leading-[30px] sm:w-full sm:text-[17px]"
        >
          {" "}
          <span>
            {" "}
            <>
              {" "}
              You can learn the estimated market value of the <br /> vehicle you
              are considering purchasing through <br />{" "}
            </>{" "}
          </span>{" "}
          <span>the Vehicle Valuation service.</span>{" "}
        </Heading>{" "}
        <Text
          as="p"
          className="mb-[58px] text-[16px] font-medium !text-primary_colors-900 sm:text-[13px]"
        >
          {" "}
          {detailedInfoText}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
