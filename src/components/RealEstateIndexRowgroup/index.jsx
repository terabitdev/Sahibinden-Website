import { Heading, Img } from "./..";
import React from "react";
export default function RealEstateIndexRowgroup({
  group = "1",
  diyarbakir = "DIYARBAKIR",
  p58nine = "58.9%",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-[20%] md:w-full`}
    >
      {" "}
      <div className="flex w-full flex-col items-start">
        {" "}
        <Heading
          size="text3xl"
          as="p"
          className="relative z-[2] flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-primary_colors-900 text-center text-[20px] font-medium capitalize !text-white"
        >
          {" "}
          {group}{" "}
        </Heading>{" "}
        <div className="relative mt-[-24px] flex flex-col items-center gap-5 self-stretch rounded-[10px] bg-white p-4 shadow-xs">
          {" "}
          <Heading size="text3xl" as="p" className="text-[20px] font-medium">
            {" "}
            {diyarbakir}{" "}
          </Heading>{" "}
          <div className="flex items-center gap-2.5">
            {" "}
            <Img
              src="images/img_arrow_up_green_a700.svg"
              alt="Image"
              className="h-[40px]"
            />{" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-medium capitalize"
            >
              {" "}
              {p58nine}{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
