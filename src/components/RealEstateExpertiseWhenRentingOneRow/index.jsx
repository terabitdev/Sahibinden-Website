import { Text, Heading, Img } from "./..";
import React from "react";
export default function RealEstateExpertiseWhenRentingOneRow({
  whatisa = "What is a Family Residence Notification and How is it Placed?",
  description = "&lt;&gt;The residence where the spouses live as long as the marriage continues is called the &lt;br /&gt;family residence. The family residence annotation isa regulation that prevents one &lt;br /&gt;spouse from selling or renting a residence without the permission of the other. The family &lt;br /&gt;residence annotation, which is made by adding an annotation to the title deed, is a legal &lt;br /&gt;regulation that aims to protect the rights of the spouses by restricting their right to &lt;br /&gt;dispose of the residence.......&lt;/&gt;",
  more = "More",
  readsCounter = "214490 Reads",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-6 sm:p-5 bg-white shadow-sm flex-1 rounded-[10px] container-sm`}
    >
      {" "}
      <div className="flex w-full items-center gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[288px] w-[30%] object-contain md:w-full"
        />{" "}
        <div className="flex flex-1 flex-col items-start gap-[18px] md:self-stretch">
          {" "}
          <Heading
            size="headingxl"
            as="h4"
            className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
          >
            {" "}
            {whatisa}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="text-[20px] font-normal leading-[30px]"
          >
            {" "}
            {description}{" "}
          </Heading>{" "}
          <div className="flex flex-wrap justify-between gap-5 self-stretch">
            {" "}
            <Text
              as="p"
              className="text-[16px] font-medium !text-primary_colors-900"
            >
              {" "}
              {more}{" "}
            </Text>{" "}
            <Text
              as="p"
              className="text-[16px] font-medium !text-blue_gray-100"
            >
              {" "}
              {readsCounter}{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
