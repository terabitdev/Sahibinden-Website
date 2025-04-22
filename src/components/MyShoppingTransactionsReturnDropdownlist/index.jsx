import { Text } from "./..";
import React from "react";
export default function MyShoppingTransactionsReturnDropdownlist({
  one = "All",
  itemtwo = "Last 1 Week",
  duration = "Last 1 Month",
  duration1 = "Last 3 Month",
  duration2 = "Last 6 Month",
  duration3 = "Last 1 Year",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] m-auto absolute rounded-lg`}
    >
      {" "}
      <div className="flex self-stretch bg-white px-4 py-3">
        {" "}
        <Text
          as="p"
          className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
        >
          {" "}
          {one}{" "}
        </Text>{" "}
      </div>{" "}
      <Text
        as="p"
        className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
      >
        {" "}
        {itemtwo}{" "}
      </Text>{" "}
      <Text
        as="p"
        className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
      >
        {" "}
        {duration}{" "}
      </Text>{" "}
      <Text
        as="p"
        className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
      >
        {" "}
        {duration1}{" "}
      </Text>{" "}
      <Text
        as="p"
        className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
      >
        {" "}
        {duration2}{" "}
      </Text>{" "}
      <div className="flex self-stretch bg-white px-4 py-3">
        {" "}
        <Text
          as="p"
          className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
        >
          {" "}
          {duration3}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
