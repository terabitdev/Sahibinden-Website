import { Img, Text, RatingBar } from "./..";
import React from "react";
export default function CategoriesCarsColumnsarah({
  description = "&lt;&gt;I had the pleasure of working with ABC Realty to find my dream home, and I couldn&#39;t be happier with the entire experience. &lt;br /&gt;&lt;br /&gt;From the moment I walked into their office, I felt welcomed and supported by their friendly team.&lt;/&gt;",
  sarahMone = "images/img_ellipse_13.png",
  sarahm = "Sarah M.",
  property = "Property consultation",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-[58px] px-[26px] py-[34px] sm:gap-[29px] sm:p-5 rounded-[20px]`}
    >
      {" "}
      <div className="ml-3 mt-1.5 flex flex-col gap-[18px] self-stretch">
        {" "}
        <div className="flex items-center justify-between gap-5">
          {" "}
          <Img
            src="images/img_user_primary_colors_900.svg"
            alt="Image"
            className="h-[28px]"
          />{" "}
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffcb2b"
            activeColor="#ffcb2b"
            size={26}
            className="flex gap-2.5"
          />{" "}
        </div>{" "}
        <Text
          as="p"
          className="text-[16px] font-normal leading-[146.52%] !text-black-900"
        >
          {" "}
          {description}{" "}
        </Text>{" "}
      </div>{" "}
      <div className="ml-3 mr-2 flex items-center justify-center self-stretch">
        {" "}
        <div className="flex flex-1 gap-3.5">
          {" "}
          <Img
            src={sarahMone}
            alt="Sarah Mone"
            className="h-[54px] w-[18%] rounded-[26px] object-contain"
          />{" "}
          <div className="flex flex-1 flex-col items-start">
            {" "}
            <Text
              size="text2xl"
              as="p"
              className="text-[18px] font-normal !text-black-900"
            >
              {" "}
              {sarahm}{" "}
            </Text>{" "}
            <Text
              size="textlg"
              as="p"
              className="text-[15px] font-normal !text-black-900"
            >
              {" "}
              {property}{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
        <Img
          src="images/img_checkmark_black_900_01.svg"
          alt="Sarah Mthree"
          className="mb-2.5 h-[22px] self-end"
        />{" "}
      </div>{" "}
    </div>
  );
}
