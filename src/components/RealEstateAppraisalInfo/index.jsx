import { Text, Heading } from "./..";
import React from "react";
export default function RealEstateAppraisalInfo({
  titleText = "What is Real Estate Appraisal?",
  descriptionText = "Real estate appraisal is a valuation study that includes not only the value of a house but also details such as title deed information and current zoning status.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-5 p-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading
        size="text3xl"
        as="p"
        className="text-[20px] font-medium sm:text-[17px]"
      >
        {" "}
        {titleText}{" "}
      </Heading>{" "}
      <Text
        size="textlg"
        as="p"
        className="mb-[46px] w-[84%] text-[15px] font-medium leading-[22px] !text-black-900_01 sm:w-full"
      >
        {" "}
        {descriptionText}{" "}
      </Text>{" "}
    </div>
  );
}
