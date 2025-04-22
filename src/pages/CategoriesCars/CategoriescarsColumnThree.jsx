import { Text, Heading } from "../../components";
import React from "react";
export default function CategoriescarsColumnThree() {
  return (
    <div className="mt-20 flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-center px-14 md:px-5">
        {" "}
        <div className="h-px w-[90%] bg-gray-200_03" />{" "}
        <div className="flex w-[90%] justify-center md:w-full sm:flex-col">
          {" "}
          <div className="flex flex-col items-center px-[18px]">
            {" "}
            <Heading
              size="heading8xl"
              as="h4"
              className="text-[64px] font-black uppercase !text-black-0 md:text-[48px]"
            >
              {" "}
              20K{" "}
            </Heading>{" "}
            <Text
              as="p"
              className="text-[16px] font-medium uppercase !text-blue_gray-400"
            >
              {" "}
              Satisfied Clients{" "}
            </Text>{" "}
          </div>{" "}
          <div className="flex flex-1 flex-col items-end pl-14 pr-[88px] md:px-5 sm:self-stretch">
            {" "}
            <Heading
              size="heading8xl"
              as="h5"
              className="text-[64px] font-black uppercase !text-black-0 md:text-[48px]"
            >
              {" "}
              30K{" "}
            </Heading>{" "}
            <Text
              as="p"
              className="mr-[22px] text-[16px] font-medium uppercase !text-blue_gray-400 md:mr-0"
            >
              {" "}
              Items sold{" "}
            </Text>{" "}
          </div>{" "}
          <div className="flex flex-col items-center px-14 md:px-5">
            {" "}
            <Heading
              size="heading8xl"
              as="h6"
              className="text-[64px] font-black uppercase !text-black-0 md:text-[48px]"
            >
              {" "}
              99%{" "}
            </Heading>{" "}
            <Text
              as="p"
              className="text-[16px] font-medium uppercase !text-blue_gray-400"
            >
              {" "}
              Client Satisfaction{" "}
            </Text>{" "}
          </div>{" "}
          <div className="flex flex-col items-end px-4">
            {" "}
            <Heading
              size="heading8xl"
              as="h1"
              className="mr-[18px] text-[64px] font-black uppercase !text-black-0 md:mr-0 md:text-[48px]"
            >
              {" "}
              10+{" "}
            </Heading>{" "}
            <Text
              as="p"
              className="text-[16px] font-medium uppercase !text-blue_gray-400"
            >
              {" "}
              Work experience{" "}
            </Text>{" "}
          </div>
        </div>{" "}
        <div className="mt-5 h-px w-[90%] bg-gray-200_03" />{" "}
      </div>{" "}
    </div>
  );
}
