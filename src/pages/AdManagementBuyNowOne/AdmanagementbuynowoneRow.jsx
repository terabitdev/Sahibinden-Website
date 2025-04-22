import { Button, SelectBox, Img, Heading } from "../../components";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function AdmanagementbuynowoneRow() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-10">
          {" "}
          <div className="flex flex-col items-start gap-2.5">
            {" "}
            <Heading
              size="text9xl"
              as="h1"
              className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
            >
              {" "}
              Auto Expertise{" "}
            </Heading>{" "}
            <Heading
              size="text7xl"
              as="h2"
              className="text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
            >
              {" "}
              <>
                {" "}
                If you are wondering where to get expertise service; choose one
                of the branches of sahibinden.com&#39;s <br /> professional
                business partner Auto King Auto Expertise and get comprehensive
                expertise packages at <br /> affordable prices.{" "}
              </>{" "}
            </Heading>{" "}
            <Heading
              size="text7xl"
              as="h3"
              className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
            >
              {" "}
              Log in with your corporate account to receive special offers for
              Vehicle Store users .{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex items-center md:flex-col">
            {" "}
            <div className="flex w-[34%] gap-5 md:w-full sm:flex-col">
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
                className="w-[42%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:w-full sm:px-5"
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
                className="w-[42%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:w-full sm:px-5"
              />
            </div>{" "}
            <Button
              color="primary_colors_900"
              size="5xl"
              variant="fill"
              className="min-w-[298px] rounded px-[34px] font-inter font-bold !text-indigo-50_02 sm:px-5"
            >
              {" "}
              Select branch and purchase{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
