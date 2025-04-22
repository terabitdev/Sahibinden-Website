import { Heading, Img } from "./..";
import React from "react";
export default function SoftwareIconsList({
  windowsText = "Windows",
  chromeText = "Google Chrome",
  regionText = "Punjab",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center self-stretch p-6 sm:p-5 bg-white shadow-xs flex-1 rounded-[10px]`}
    >
      {" "}
      <div className="flex items-center gap-5">
        {" "}
        <Img
          src="images/img_frame_gray_700_02.svg"
          alt="Windows"
          className="h-[50px]"
        />{" "}
        <Heading
          size="text3xl"
          as="p"
          className="text-[20px] font-medium capitalize sm:text-[17px]"
        >
          {" "}
          {windowsText}{" "}
        </Heading>{" "}
      </div>{" "}
      <div className="flex items-center gap-5 pl-[74px] pr-14 md:px-5">
        {" "}
        <Img
          src="images/img_floating_icon_green_500_01.svg"
          alt="Google Chrome"
          className="h-[50px]"
        />{" "}
        <Heading
          size="text3xl"
          as="p"
          className="text-[20px] font-medium capitalize sm:text-[17px]"
        >
          {" "}
          {chromeText}{" "}
        </Heading>{" "}
      </div>{" "}
      <Heading
        size="text3xl"
        as="p"
        className="text-[20px] font-medium capitalize sm:text-[17px]"
      >
        {" "}
        {regionText}{" "}
      </Heading>{" "}
    </div>
  );
}
