import { Text, Heading } from "./..";
import React from "react";
export default function CreditColumnwhatisa({
  whatisa = "What is a Consumer Loan?",
  consumerloans = "Consumer loans are a type of loan used to meet our short-term and low-amount cash needs. ",
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
        {whatisa}{" "}
      </Heading>{" "}
      <Text
        size="textlg"
        as="p"
        className="w-[84%] text-[15px] font-normal leading-[22px] !text-black-900_01 sm:w-full"
      >
        {" "}
        {consumerloans}{" "}
      </Text>{" "}
    </div>
  );
}
