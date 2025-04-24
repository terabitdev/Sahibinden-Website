import {
  Button,
  Radio,
  Heading,
  SelectBox,
  Img,
  Input,
} from "../../components";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ZerovehicleworldColumn() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-5 md:px-5">
        {" "}
        <Heading
          size="text10xl"
          as="h1"
          className="text-[35px] font-medium md:text-[33px] sm:text-[31px]"
        >
          {" "}
          Zero Vehicle World{" "}
        </Heading>{" "}
        <div className="flex gap-5 self-stretch md:flex-col">
          {" "}
          <div className="flex w-full flex-col items-center gap-3.5 rounded-[5px] bg-white p-3 shadow-xl">
            {" "}
            <Heading
              size="headingmd"
              as="h2"
              className="text-[20px] font-semibold"
            >
              {" "}
              Search By Brand{" "}
            </Heading>{" "}
            <div className="mb-4 flex flex-col gap-6 self-stretch">
              {" "}
              <Input
                size="lg"
                shape="round"
                name="brand"
                placeholder={`Brand`}
                className="rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01"
              />{" "}
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Frame"
                    className="h-[20px] w-[22px]"
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
                    className="h-[20px] w-[22px]"
                  />
                }
                name="case_type"
                placeholder={`Case type`}
                options={dropDownOptions}
                className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
              />
              <Button
                color="primary_colors_900"
                size="lg"
                variant="fill"
                shape="round"
                className="self-stretch rounded-[22px] px-[34px] font-medium capitalize sm:px-5"
              >
                {" "}
                Search Vehicles by Brand{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex w-full flex-col items-center rounded-[5px] bg-white p-3 shadow-xl">
            {" "}
            <Heading
              size="headingmd"
              as="h3"
              className="text-[20px] font-semibold"
            >
              {" "}
              Search by your budget{" "}
            </Heading>{" "}
            <div className="mt-3.5 flex flex-col gap-6 self-stretch">
              {" "}
              <div className="flex gap-6 sm:flex-col">
                {" "}
                <Input
                  size="lg"
                  shape="round"
                  name="min_tl"
                  placeholder={`Min TL`}
                  className="w-full rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01 sm:w-full"
                />{" "}
                <Input
                  size="lg"
                  shape="round"
                  name="max_tl"
                  placeholder={`Max TL`}
                  className="w-full rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01 sm:w-full"
                />{" "}
              </div>
              <div className="flex gap-6 sm:flex-col">
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
                  name="gear"
                  placeholder={`gear`}
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
                  name="fuel"
                  placeholder={`Fuel`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:w-full sm:px-5"
                />{" "}
              </div>{" "}
            </div>{" "}
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="images/img_frame_primary_colors_900_18x18.svg"
                  alt="Frame"
                  className="h-[20px] w-[22px]"
                />
              }
              name="case_type_one"
              placeholder={`Case type`}
              options={dropDownOptions}
              className="mt-6 gap-[26px] self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
            />
            <Button
              color="primary_colors_900"
              size="lg"
              variant="fill"
              shape="round"
              className="mb-4 mt-6 self-stretch rounded-[22px] px-[22px] font-medium capitalize sm:px-5"
            >
              {" "}
              Search for a vehicle according to your budget{" "}
            </Button>{" "}
          </div>{" "}
          <div className="flex w-full flex-col items-center gap-3.5 rounded-[5px] bg-white p-3 shadow-xl">
            {" "}
            <Heading
              size="headingmd"
              as="h4"
              className="text-[20px] font-semibold"
            >
              {" "}
              Search by Case Type{" "}
            </Heading>{" "}
            <div className="mb-20 flex w-[86%] flex-col gap-6 md:w-full">
              {" "}
              <div className="grid grid-cols-3 justify-center gap-6 md:grid-cols-2 sm:grid-cols-1">
                {" "}
                <Radio
                  value="convertible1"
                  name="convertible"
                  label="Convertible"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="coupe1"
                  name="coupe"
                  label="Coupe"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="hatchback1"
                  name="hatchback"
                  label="Hatchback"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="convertible3"
                  name="convertible2"
                  label="Convertible"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="coupe3"
                  name="coupe2"
                  label="Coupe"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />
                <Radio
                  value="hatchback3"
                  name="hatchback2"
                  label="Hatchback"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="convertible5"
                  name="convertible4"
                  label="Convertible"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="coupe5"
                  name="coupe4"
                  label="Coupe"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="hatchback5"
                  name="hatchback4"
                  label="Hatchback"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="convertible7"
                  name="convertible6"
                  label="Convertible"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="coupe7"
                  name="coupe6"
                  label="Coupe"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
                <Radio
                  value="hatchback7"
                  name="hatchback6"
                  label="Hatchback"
                  className="w-full gap-2.5 text-[15px] capitalize text-black-900_01"
                />{" "}
              </div>{" "}
              <Button
                color="primary_colors_900"
                size="lg"
                variant="fill"
                shape="round"
                className="self-stretch rounded-[22px] px-[34px] font-medium capitalize sm:px-5"
              >
                {" "}
                Search Vehicles by body type{" "}
              </Button>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
