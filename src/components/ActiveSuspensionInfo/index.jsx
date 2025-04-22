import { Heading, Img } from "./..";
import React from "react";
export default function ActiveSuspensionInfo({
  titleText = "ABC - What is Active Suspension System?",
  descriptionText = "&lt;&gt;The system, which stands for Active Body Control, is called ABC. This system, which means&lt;br /&gt;active body control in Turkish, protects vehicles from dangers such as tipping over or &lt;br /&gt;flipping over.&lt;/&gt;",
  moreText = "More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch px-[22px] py-6 sm:p-5 bg-white shadow-sm flex-1 rounded-[10px] container-sm`}
    >
      {" "}
      <div className="flex w-full items-start gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_360526306_11452734.png"
          alt="Image"
          className="h-[288px] w-[30%] self-center object-contain md:w-full"
        />{" "}
        <div className="flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
          {" "}
          <Heading
            size="heading4xl"
            as="h3"
            className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
          >
            {" "}
            {titleText}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="text-[20px] font-normal leading-[30px]"
          >
            {" "}
            {descriptionText}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="text-[20px] font-medium !text-primary_colors-900"
          >
            {" "}
            {moreText}{" "}
          </Heading>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
