import { Button, Heading, Img, Input } from "../../components";
import React from "react";
export default function AdmanagementbuynowRowOne() {
  return (
    <div>
      {" "}
      <div className="bg-white p-2.5 shadow-sm">
        {" "}
        <div className="flex items-center rounded border border-solid border-indigo-50_03 bg-white md:flex-col">
          {" "}
          <div className="w-full self-start border-r border-solid border-indigo-50_03 shadow-sm md:px-5">
            {" "}
            <div className="flex border-b border-solid border-indigo-50_03 px-8 py-6 sm:p-5">
              {" "}
              <Heading
                size="headinglg"
                as="h1"
                className="self-end !font-roboto text-[24px] font-bold !text-primary_colors-900 md:text-[22px]"
              >
                {" "}
                Compare plans{" "}
              </Heading>{" "}
            </div>{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_one"
              placeholder={`Body / Paint Control`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_three"
              placeholder={`Engine / Mechanical Control`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_five"
              placeholder={`Lower Mechanical Control on the Lift`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium leading-[26px] text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_seven"
              placeholder={`Front Team, Undercarriage Control`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium leading-[26px] text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_nine"
              placeholder={`OBD Electronic Diagnostic Check`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium text-black-900_01 sm:px-5"
            />
            <Input
              size="6xl"
              shape="square"
              name="div_eleven"
              placeholder={`Brake, Suspension, Lateral Slip or Road Test`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium leading-[26px] text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_thirteen"
              placeholder={`Vehicle Interior and Function Control`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium leading-[26px] text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_fifteen"
              placeholder={`Vehicle Exterior Parts and Function Control`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium leading-[26px] text-black-900_01 sm:px-5"
            />{" "}
            <Input
              size="6xl"
              shape="square"
              name="div_seventeen"
              placeholder={`Dyno Engine Performance Test or Road Test`}
              className="border-b border-solid border-indigo-50_03 px-8 font-inter font-medium leading-[26px] text-black-900_01 sm:px-5"
            />{" "}
          </div>{" "}
          <div className="w-full border-r border-solid border-indigo-50_03 shadow-sm md:px-5">
            {" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[22px] sm:p-5">
              {" "}
              <Heading
                size="headingxl"
                as="h2"
                className="self-end !font-roboto text-[25px] font-bold !text-black-0 md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Mini Appraisal Package{" "}
              </Heading>{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="flex flex-col items-center gap-7 border-b border-solid border-indigo-50_03 p-7 sm:p-5">
              {" "}
              <Heading
                size="heading6xl"
                as="h3"
                className="!font-roboto text-[40px] font-bold !text-primary_colors-900 md:text-[38px] sm:text-[36px]"
              >
                {" "}
                3,950 TL{" "}
              </Heading>{" "}
              <Button
                color="primary_colors_900"
                size="5xl"
                variant="fill"
                className="self-stretch rounded px-[34px] font-inter font-bold !text-indigo-50_02 sm:px-5"
              >
                {" "}
                Choose This Plan{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-full border-r border-solid border-indigo-50_03 shadow-sm md:px-5">
            {" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 px-[18px] py-[22px] sm:py-5">
              {" "}
              <Heading
                size="headingxl"
                as="h4"
                className="self-end !font-roboto text-[25px] font-bold !text-black-0 md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Standard Expertise Package{" "}
              </Heading>{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />{" "}
            <div className="h-[80px] border-b border-solid border-indigo-50_03" />
            <div className="flex flex-col items-center gap-7 border-b border-solid border-indigo-50_03 p-7 sm:p-5">
              {" "}
              <Heading
                size="heading6xl"
                as="h5"
                className="!font-roboto text-[40px] font-bold !text-primary_colors-900 md:text-[38px] sm:text-[36px]"
              >
                {" "}
                4,500 TL{" "}
              </Heading>{" "}
              <Button
                color="primary_colors_900"
                size="5xl"
                variant="fill"
                className="self-stretch rounded px-[34px] font-inter font-bold !text-indigo-50_02 sm:px-5"
              >
                {" "}
                Choose This Plan{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-full border-r border-solid border-indigo-50_03 shadow-sm md:px-5">
            {" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[22px] sm:p-5">
              {" "}
              <Heading
                size="headingxl"
                as="h6"
                className="self-end !font-roboto text-[25px] font-bold !text-black-0 md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Full Expertise Package{" "}
              </Heading>{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex justify-center border-b border-solid border-indigo-50_03 p-[30px] sm:p-5">
              {" "}
              <Img
                src="images/img_checkmark.svg"
                alt="Checkmark"
                className="h-[20px]"
              />{" "}
            </div>{" "}
            <div className="flex flex-col items-center gap-7 border-b border-solid border-indigo-50_03 p-7 sm:p-5">
              {" "}
              <Heading
                size="heading6xl"
                as="h1"
                className="!font-roboto text-[40px] font-bold !text-primary_colors-900 md:text-[38px] sm:text-[36px]"
              >
                {" "}
                4,750 TL{" "}
              </Heading>{" "}
              <Button
                color="primary_colors_900"
                size="5xl"
                variant="fill"
                className="self-stretch rounded px-[34px] font-inter font-bold !text-indigo-50_02 sm:px-5"
              >
                {" "}
                Choose This Plan{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
