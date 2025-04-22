import { Heading, Text, Img } from "./..";
import React from "react";
export default function AdManagementColumnnumberof({
  numberof = "&lt;&gt;Number of advertisements&lt;br /&gt;published&lt;/&gt;",
  zero = "0",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end w-[32%] md:w-full gap-3 px-3.5 bg-white shadow-md rounded-[14px]`}
    >
      {" "}
      <div className="mt-[22px] flex items-center justify-end gap-4 self-stretch">
        {" "}
        <Img
          src="images/img_frame_primary_colors_900_50x50.svg"
          alt="Image"
          className="h-[50px]"
        />{" "}
        <Text
          size="textlg"
          as="p"
          className="text-[15px] font-medium leading-[22px] !text-black-900_01"
        >
          {" "}
          {numberof}{" "}
        </Text>{" "}
      </div>{" "}
      <Heading
        size="text11xl"
        as="p"
        className="text-[60px] font-medium !text-primary_colors-900"
      >
        {" "}
        {zero}{" "}
      </Heading>{" "}
    </div>
  );
}
