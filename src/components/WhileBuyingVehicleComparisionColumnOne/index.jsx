import { Button, SelectBox, Img, Heading } from "./..";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function WhileBuyingVehicleComparisionColumnOne({
  addvehicle = "Add Vehicle",
  add = "Add",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[50%] md:w-full cursor-pointer hover:shadow-xs`}
    >
      {" "}
      <div className="flex flex-col gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
        {" "}
        <div className="ml-[72px] mr-[62px] flex flex-col items-start gap-5">
          {" "}
          <Heading size="text9xl" as="p" className="text-[30px] font-medium">
            {" "}
            {addvehicle}{" "}
          </Heading>{" "}
          <Img
            src="images/img_frame_black_900_01_200x200.svg"
            alt="Add Vehicle"
            className="mr-3 h-[200px] w-full"
          />{" "}
        </div>{" "}
        <div className="mb-[54px] flex flex-col gap-5">
          {" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="brand"
            placeholder={`Brand`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="model"
            placeholder={`Model`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="year"
            placeholder={`Year`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="case_type"
            placeholder={`Case Type`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="engine"
            placeholder={`Engine`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="gear"
            placeholder={`Gear`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="package"
            placeholder={`Package`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_frame_primary_colors_900_18x18.svg"
                alt="Frame"
                className="h-[20px] w-[20px]"
              />
            }
            name="hardware"
            placeholder={`Hardware`}
            options={dropDownOptions}
            className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
          />{" "}
          <Button
            color="primary_colors_900"
            size="4xl"
            variant="fill"
            className="self-stretch rounded px-[34px] font-semibold !text-indigo-50_02 sm:px-5"
          >
            {" "}
            {add}{" "}
          </Button>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
