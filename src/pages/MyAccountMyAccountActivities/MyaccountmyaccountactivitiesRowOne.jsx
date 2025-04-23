import { Text } from "../../components";
import React from "react";
export default function MyaccountmyaccountactivitiesRowOne() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-end md:px-5">
        {" "}
        <div className="flex w-[76%] items-center justify-center gap-7 bg-blue_gray-100_7f p-2.5 md:w-full md:flex-col">
          {" "}
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            Payment Number{" "}
          </Text>{" "}
          <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
            {" "}
            <div className="h-[30px] w-px bg-white" />{" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Process{" "}
            </Text>{" "}
            <div className="h-[30px] w-px bg-white" />{" "}
          </div>{" "}
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            Payment Method{" "}
          </Text>{" "}
          <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
            {" "}
            <div className="h-[30px] w-px bg-white" />{" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              History{" "}
            </Text>{" "}
            <div className="h-[30px] w-px bg-white" />{" "}
          </div>{" "}
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            Amount{" "}
          </Text>{" "}
          <div className="h-[30px] w-px bg-white md:h-px md:w-[30px] md:px-5" />{" "}
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            Status{" "}
          </Text>{" "}
          <div className="flex w-[12%] items-center justify-between gap-5 md:w-full">
            {" "}
            <div className="h-[30px] w-px bg-white" />{" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Total{" "}
            </Text>{" "}
            <div className="h-[30px] w-px bg-white" />{" "}
          </div>{" "}
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            Invoice{" "}
          </Text>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
