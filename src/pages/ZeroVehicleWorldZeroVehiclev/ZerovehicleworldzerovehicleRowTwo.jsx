import { Heading } from "../../components";
import React from "react";
export default function ZerovehicleworldzerovehicleRowTwo() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-5">
          {" "}
          <div className="flex flex-wrap items-center justify-between gap-5">
            {" "}
            <Heading
              size="text9xl"
              as="h1"
              className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
            >
              {" "}
              Zero Vehicle Launch Schedule{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="h2"
              className="self-end text-[20px] font-medium !text-primary_colors-900"
            >
              {" "}
              Show Full Calender{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="rounded-[10px] bg-white px-6 py-[34px] shadow-xs sm:p-5">
            {" "}
            <div className="flex items-center justify-center sm:flex-col">
              {" "}
              <div className="flex flex-1 flex-col items-start gap-2.5 sm:self-stretch">
                {" "}
                <Heading
                  size="text3xl"
                  as="h3"
                  className="text-[20px] font-medium !text-blue_gray-400_03"
                >
                  {" "}
                  Period{" "}
                </Heading>{" "}
                <Heading
                  size="text7xl"
                  as="h4"
                  className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  January - February - March{" "}
                </Heading>{" "}
              </div>{" "}
              <Heading
                size="text3xl"
                as="h5"
                className="mb-5 self-end text-[20px] font-medium !text-primary_colors-900"
              >
                {" "}
                Change Filters{" "}
              </Heading>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
