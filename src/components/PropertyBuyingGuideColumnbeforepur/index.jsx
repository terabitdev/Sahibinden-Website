import { Text, Img, Heading } from "./..";
import React from "react";
export default function PreSalesInfo({
  presales = "Pre-Sales",
  descriptionText = "&lt;&gt;You can find answers to many of your questions, from calculating the &lt;br /&gt;value of your vehicle to tips on selling it, from deposits to mortgage....&lt;/&gt;",
  moreText = "More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-2.5`}
    >
      {" "}
      <Heading
        size="headingxl"
        as="h4"
        className="text-[25px] font-semibold sm:text-[21px]"
      >
        {" "}
        {presales}{" "}
      </Heading>{" "}
      <div className="flex flex-col items-start self-stretch">
        {" "}
        <Img
          src="images/img_luxurious_car_p_276x600.png"
          alt="Image"
          className="h-[276px] w-full object-cover sm:h-auto"
        />{" "}
        <Text
          size="textlg"
          as="p"
          className="mt-2.5 text-[15px] font-normal leading-[165.5%] !text-black-900_01"
        >
          {" "}
          {descriptionText}{" "}
        </Text>{" "}
        <Text
          as="p"
          className="mt-5 text-[16px] font-medium !text-primary_colors-900 sm:text-[13px]"
        >
          {" "}
          {moreText}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
