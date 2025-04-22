import { Text } from "./..";
import React from "react";
export default function MyShoppingTransactionsMyCurrentRowzipcode({
  zipcode = "12109",
  building = "Building",
  threeMillionTwoHundredTwoThousandTwentyFive = "3/20/2025",
  tl333 = "TL333",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col items-center self-stretch px-3.5 py-2.5 bg-blue_gray-100_7f flex-1 container-xs`}
    >
      {" "}
      <Text
        as="p"
        className="text-[16px] font-normal !text-black-900_01 sm:text-[13px]"
      >
        {" "}
        {zipcode}{" "}
      </Text>{" "}
      <div className="ml-[92px] h-[30px] w-px bg-white" />{" "}
      <div className="flex w-[36%] items-center justify-between gap-5 px-[42px] md:px-5">
        {" "}
        <Text
          as="p"
          className="ml-[42px] text-[16px] font-normal !text-black-900_01 sm:ml-0 sm:text-[13px]"
        >
          {" "}
          {building}{" "}
        </Text>{" "}
        <div className="h-[30px] w-px bg-white" />{" "}
      </div>{" "}
      <div className="flex w-[42%] items-center justify-between gap-5 px-[42px] md:px-5">
        {" "}
        <Text
          as="p"
          className="text-[16px] font-normal !text-black-900_01 sm:text-[13px]"
        >
          {" "}
          {threeMillionTwoHundredTwoThousandTwentyFive}{" "}
        </Text>{" "}
        <div className="mr-[42px] h-[30px] w-px bg-white sm:mr-0" />{" "}
      </div>{" "}
      <Text
        as="p"
        className="text-[16px] font-normal !text-black-900_01 sm:text-[13px]"
      >
        {" "}
        {tl333}{" "}
      </Text>{" "}
    </div>
  );
}
