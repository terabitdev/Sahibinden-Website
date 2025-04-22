import { Text, Img, Heading } from "./..";
import React from "react";
export default function WhileBuyingVehicleBuyingGuideColumnbeforepur({
  beforepurchase = "Before Purchase",
  description = "Do you know what you may need before buying a property? We have prepared a comprehensive guide for you, all the information you need is here. ",
  more = "More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-2.5`}
    >
      {" "}
      <Heading size="headingxl" as="h4" className="text-[25px] font-semibold">
        {" "}
        {beforepurchase}{" "}
      </Heading>{" "}
      <div className="flex flex-col items-start self-stretch">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[276px] w-full object-cover"
        />{" "}
        <Text
          size="textlg"
          as="p"
          className="mt-2.5 w-full text-[15px] font-normal leading-[165.5%] !text-black-900_01"
        >
          {" "}
          {description}{" "}
        </Text>{" "}
        <Text
          as="p"
          className="mt-5 text-[16px] font-medium !text-primary_colors-900"
        >
          {" "}
          {more}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
