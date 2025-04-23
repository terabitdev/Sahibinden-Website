import { Button, SelectBox, Img, Heading, Text, Input } from "../../components";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function RealestateindexRowone() {
  return (
    <div className="self-stretch">
      {" "}
      <div className="flex flex-col items-center">
        {" "}
        <div className="container-sm relative z-[1] flex flex-col items-start pl-[448px] pr-14 md:px-5">
          {" "}
          <div className="flex w-[24%] flex-col items-center rounded-lg md:w-full">
            {" "}
            <div className="flex justify-center self-stretch bg-white p-3">
              {" "}
              <Text as="p" className="!font-montserrat text-[16px] font-normal">
                {" "}
                Real Estate Expertise{" "}
              </Text>{" "}
            </div>{" "}
            <Input
              size="xs"
              shape="square"
              name="itemtwo_one"
              placeholder={`Real Estate Index`}
              className="self-stretch px-3.5 font-montserrat !text-primary_colors-900"
            />{" "}
            <Text
              as="p"
              className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
            >
              {" "}
              Credit{" "}
            </Text>{" "}
            <Button
              size="lg"
              variant="fill"
              shape="square"
              className="self-stretch pl-4 pr-2 font-montserrat"
            >
              {" "}
              Property Buying Guide{" "}
            </Button>{" "}
            <div className="flex justify-center self-stretch bg-white p-3">
              {" "}
              <Text as="p" className="!font-montserrat text-[16px] font-normal">
                {" "}
                Real Estate Dictionary{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="relative mt-[-146px] flex h-[600px] items-start justify-center self-stretch bg-[url(/public/images/img_group_7172.png)] bg-cover bg-no-repeat py-[124px] md:h-auto md:py-5">
          {" "}
          <div className="container-sm mb-[82px] flex justify-center px-11 md:px-5">
            {" "}
            <div className="flex w-full flex-col items-center gap-3">
              {" "}
              <Heading
                size="text11xl"
                as="h1"
                className="text-[60px] font-medium !text-white md:text-[52px] sm:text-[46px]"
              >
                {" "}
                Real Estate Index{" "}
              </Heading>{" "}
              <Heading
                size="text9xl"
                as="h2"
                className="text-center text-[30px] font-medium leading-[45px] !text-white md:text-[28px] sm:text-[26px]"
              >
                <>
                  {" "}
                  Create an index in any location you want to examine Turkiye’s
                  most comprehensive <br /> real estate index.{" "}
                </>{" "}
              </Heading>{" "}
              <div className="flex gap-[30px] self-stretch md:flex-col">
                {" "}
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[14px]"
                    />
                  }
                  name="location"
                  placeholder={`House For Sale`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />{" "}
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[14px]"
                    />
                  }
                  name="house_for_sale"
                  placeholder={`House For Sale`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />{" "}
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[14px]"
                    />
                  }
                  name="house_for_sale"
                  placeholder={`House For Sale`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[14px]"
                    />
                  }
                  name="house_for_sale"
                  placeholder={`House For Sale`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />{" "}
                <Button
                  color="primary_colors_900"
                  size="8xl"
                  variant="fill"
                  className="w-full rounded-[10px] px-[34px] font-medium capitalize sm:px-5"
                >
                  {" "}
                  Create Index{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
