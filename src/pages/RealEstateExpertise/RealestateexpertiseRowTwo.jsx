import { Img, Text, Heading, Button, SelectBox, Input } from "../../components";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function RealestateexpertiseRowTwo() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-5 shadow-sm">
          {" "}
          <div className="flex items-start gap-10 md:flex-col">
            {" "}
            <div className="flex w-[34%] flex-col items-start self-center rounded-[5px] bg-white p-5 shadow-xl md:w-full">
              {" "}
              <Text
                size="textlg"
                as="p"
                className="text-[15px] font-medium capitalize !text-black-900_01"
              >
                {" "}
                Contact Information{" "}
              </Text>{" "}
              <div className="mt-1.5 flex gap-5 self-stretch sm:flex-col">
                {" "}
                <Input
                  size="lg"
                  shape="round"
                  type="text"
                  name="name"
                  placeholder={`Your Name`}
                  className="w-full rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01 sm:w-full"
                />{" "}
                <Input
                  size="lg"
                  shape="round"
                  name="maturity"
                  placeholder={`Maturity`}
                  className="w-full rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01 sm:w-full"
                />{" "}
              </div>{" "}
              <Input
                size="lg"
                shape="round"
                type="number"
                name="phoneNumber"
                placeholder={`Your Mobile Phone Number`}
                className="mt-5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01"
              />
              <Input
                size="lg"
                shape="round"
                type="email"
                name="email"
                placeholder={`Your Email Address`}
                className="mt-5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01"
              />{" "}
              <Text
                size="textlg"
                as="p"
                className="mt-5 text-[15px] font-medium capitalize !text-black-900_01"
              >
                {" "}
                Information on the Property You Will Buy{" "}
              </Text>{" "}
              <div className="mt-5 flex gap-5 self-stretch sm:flex-col">
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
                  name="province"
                  placeholder={`Province`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:w-full sm:px-5"
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
                  name="district"
                  placeholder={`District`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:w-full sm:px-5"
                />{" "}
              </div>
              <Button
                color="primary_colors_900"
                size="lg"
                variant="fill"
                shape="round"
                className="mt-5 self-stretch rounded-[22px] px-[34px] font-medium capitalize sm:px-5"
              >
                {" "}
                Send an Expert Request{" "}
              </Button>{" "}
              <Text
                size="textlg"
                as="p"
                className="mb-9 ml-[108px] mt-5 text-[15px] font-medium !text-primary_colors-900 md:ml-0"
              >
                {" "}
                Sample Expert Report{" "}
              </Text>{" "}
            </div>{" "}
            <div className="flex flex-1 flex-col gap-2 md:self-stretch">
              {" "}
              <Heading
                size="heading4xl"
                as="h1"
                className="text-[30px] font-semibold capitalize leading-[45px] md:text-[28px] sm:text-[26px]"
              >
                {" "}
                <>
                  {" "}
                  Get a Real Estate Appraisal <br /> Before Buying Your Home,
                  Easily <br /> Learn What You Need to Know!{" "}
                </>{" "}
              </Heading>{" "}
              <Text
                as="p"
                className="text-[16px] font-normal leading-[165.5%] !text-black-900_01"
              >
                {" "}
                <>
                  {" "}
                  In addition to title deed information, you can <br /> learn
                  comprehensive information such as current <br /> zoning
                  status, factors affecting value, and price <br /> valuation.{" "}
                </>{" "}
              </Text>
              <div className="flex flex-col items-start gap-5">
                {" "}
                <Text
                  size="texts"
                  as="p"
                  className="text-[12px] font-medium leading-[165.5%] !text-blue_gray-400_03"
                >
                  {" "}
                  <>
                    {" "}
                    *Prices vary depending on the type and size of the property
                    and <br /> municipality fees. Pricing specific to our users
                    was last revised on <br /> 01.01.2025.{" "}
                  </>{" "}
                </Text>{" "}
                <Text
                  size="texts"
                  as="p"
                  className="w-[84%] text-[12px] font-medium leading-[165.5%] !text-blue_gray-400_03 md:w-full"
                >
                  {" "}
                  <span>
                    Real Estate Expertise service within the scope of
                    cooperation
                  </span>{" "}
                  <span>.&nbsp;</span>{" "}
                  <span>
                    {" "}
                    <>
                      {" "}
                      It <br /> is provided by Real Estate Appraisal Consultancy
                      Inc. The information <br /> received will be shared with
                      Eva GYD Inc. to provide you with <br /> information on the
                      subject. You can access <br /> detailed information about
                      the protection of personal data&nbsp;{" "}
                    </>{" "}
                  </span>{" "}
                  <a href="#" className="inline underline">
                    {" "}
                    here{" "}
                  </a>{" "}
                  <span>&nbsp;.</span>{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
            <Img
              src="images/img_frame_blue_gray_600_03.svg"
              alt="Image"
              className="mt-5 h-[274px] w-[22%] object-contain md:w-full"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
