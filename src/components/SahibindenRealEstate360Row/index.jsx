import { Img, Text, Heading, Button, SelectBox } from "./..";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function SahibindenRealEstate360Row({
  province = "Province",
  district = "District",
  neighbourhood = "Neighbourhood",
  creatIndex = "Creat Index",
  realestate = "Real Estate Index",
  description = "&lt;&gt;With Türkiye&#39;s most comprehensive Real Estate &lt;br /&gt;Index, you can comparatively follow current sale &lt;br /&gt;and rental price changes, demographic &lt;br /&gt;information, and the districts that gained/lost the &lt;br /&gt;most value in the region you are interested in.&lt;/&gt;",
  detailed = "Detailed Information",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-6 sm:p-5 flex-1 cursor-pointer container-sm hover:shadow-sm`}
    >
      {" "}
      <div className="flex w-full items-center justify-center gap-[41px] md:flex-col">
        {" "}
        <div className="flex w-[40%] flex-col items-start gap-5 md:w-full">
          {" "}
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-normal capitalize"
            >
              {" "}
              {province}{" "}
            </Heading>{" "}
            <SelectBox
              size="lg"
              shape="round"
              indicator={
                <Img
                  src="images/img_frame_primary_colors_900_18x18.svg"
                  alt="Frame"
                  className="h-[20px] w-[20px]"
                />
              }
              name="group2954"
              options={dropDownOptions}
              className="w-[64%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 sm:w-full sm:px-5"
            />{" "}
          </div>{" "}
          <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="mt-2 text-[20px] font-normal capitalize"
            >
              {" "}
              {district}{" "}
            </Heading>{" "}
            <SelectBox
              size="lg"
              shape="round"
              indicator={
                <Img
                  src="images/img_frame_primary_colors_900_18x18.svg"
                  alt="Frame"
                  className="h-[20px] w-[20px]"
                />
              }
              name="group2955"
              options={dropDownOptions}
              className="w-[64%] gap-[26px] self-center rounded-[10px] border border-solid border-primary_colors-900 px-6 sm:w-full sm:px-5"
            />{" "}
          </div>
          <div className="flex items-center gap-6 self-stretch sm:flex-col">
            {" "}
            <Heading
              size="text3xl"
              as="p"
              className="text-[20px] font-normal capitalize"
            >
              {" "}
              {neighbourhood}{" "}
            </Heading>{" "}
            <SelectBox
              size="lg"
              shape="round"
              indicator={
                <Img
                  src="images/img_frame_primary_colors_900_18x18.svg"
                  alt="Frame"
                  className="h-[20px] w-[20px]"
                />
              }
              name="group2956"
              options={dropDownOptions}
              className="flex-grow gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 sm:px-5"
            />{" "}
          </div>{" "}
          <Button
            color="primary_colors_900"
            size="xl"
            variant="fill"
            shape="round"
            className="min-w-[150px] rounded-[24px] px-6 font-medium uppercase sm:px-5"
          >
            {" "}
            {creatIndex}{" "}
          </Button>{" "}
        </div>{" "}
        <div className="flex w-[32%] flex-col items-start gap-1 self-start md:w-full">
          {" "}
          <Heading
            size="heading4xl"
            as="h3"
            className="text-[30px] font-semibold uppercase md:text-[28px] sm:text-[26px]"
          >
            {" "}
            {realestate}{" "}
          </Heading>{" "}
          <div className="mr-1 flex flex-col items-start gap-0.5 self-stretch md:mr-0">
            {" "}
            <Text
              as="p"
              className="text-[16px] font-normal leading-[165.5%] !text-black-900_01"
            >
              {" "}
              {description}{" "}
            </Text>{" "}
            <Text
              as="p"
              className="text-[16px] font-medium !text-primary_colors-900"
            >
              {" "}
              {detailed}{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
        <Img
          src="images/img_frame_blue_50_01.svg"
          alt="District"
          className="h-[274px] w-[22%] object-contain md:w-full"
        />{" "}
      </div>{" "}
    </div>
  );
}
