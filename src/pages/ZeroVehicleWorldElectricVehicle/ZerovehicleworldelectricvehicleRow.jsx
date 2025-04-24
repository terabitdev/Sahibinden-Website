import { Heading, Button, SelectBox, Img } from "../../components";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ZerovehicleworldelectricvehicleRow() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
          {" "}
          <div className="mb-[22px] flex flex-col items-start gap-5">
            {" "}
            <Heading
              size="heading4xl"
              as="h1"
              className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
            >
              {" "}
              Electric Vehicle Charging Stations{" "}
            </Heading>{" "}
            <Heading
              size="headingxl"
              as="h2"
              className="text-[25px] font-semibold leading-[37px] !text-blue_gray-400_03 md:text-[23px] sm:text-[21px]"
            >
              {" "}
              <>
                {" "}
                Discover the nearest electric vehicle charging stations and
                easily access <br /> their information.{" "}
              </>{" "}
            </Heading>{" "}
            <div className="flex flex-col items-start gap-5 self-stretch">
              {" "}
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Frame"
                    className="h-[20px] w-[18px]"
                  />
                }
                name="province"
                placeholder={`Province`}
                options={dropDownOptions}
                className="w-[24%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
              />{" "}
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="images/img_frame_primary_colors_900_18x18.svg"
                    alt="Frame"
                    className="h-[20px] w-[18px]"
                  />
                }
                name="district"
                placeholder={`District`}
                options={dropDownOptions}
                className="w-[24%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
              />
              <Button
                color="primary_colors_900"
                size="8xl"
                variant="fill"
                className="min-w-[324px] rounded-[10px] px-[34px] font-opensans font-bold sm:px-5"
              >
                {" "}
                Show on Map{" "}
              </Button>{" "}
            </div>{" "}
            <Heading
              size="headingxs"
              as="h3"
              className="text-[15px] font-semibold !text-blue_gray-400_03"
            >
              {" "}
              Map information is provided by Başarsoft Bilgi Teknolojileri A.Ş.
              within the scope of the cooperation.{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
