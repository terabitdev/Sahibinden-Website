import {
  Img,
  Text,
  Heading,
  Button,
  Input,
  Radio,
  RadioGroup,
} from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
export default function WhilebuyingvehicledamageinquiryRowTwo() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white shadow-sm">
          {" "}
          <div className="flex items-center md:flex-col">
            {" "}
            <Tabs
              className="flex flex-1 flex-col gap-[34px] rounded-[5px] bg-white p-4 shadow-xl md:self-stretch"
              selectedTabClassName="!text-white bg-primary_colors-900 rounded-[20px]"
              selectedTabPanelClassName="mx-[38px] md:mx-0 !relative tab-panel--selected"
            >
              {" "}
              <TabList className="flex gap-2 rounded-[20px] border border-solid border-primary_colors-900 bg-white sm:flex-col">
                {" "}
                <Tab className="w-[52%] p-2.5 text-center text-[15px] font-semibold leading-[18px] text-primary_colors-900 sm:w-full sm:px-5">
                  {" "}
                  Vehicle Damage Inquiry{" "}
                </Tab>{" "}
                <Tab className="w-[46%] p-2.5 text-center text-[15px] font-semibold leading-[18px] text-primary_colors-900 sm:w-full sm:px-5">
                  {" "}
                  Vehicle Detail Inquiry{" "}
                </Tab>{" "}
              </TabList>{" "}
              {[...Array(2)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index}`}
                  className="absolute mx-[38px] items-center md:mx-0"
                >
                  {" "}
                  <div className="w-full">
                    {" "}
                    <div className="flex flex-col items-center gap-[18px]">
                      {" "}
                      <RadioGroup
                        name="group5260"
                        className="flex self-stretch"
                      >
                        {" "}
                        <Radio
                          value="platenumber"
                          label="Plate Number"
                          className="gap-2.5 text-[15px] capitalize text-black-900_01"
                        />{" "}
                        <Radio
                          value="chassisno"
                          label="Chassis No."
                          className="ml-[30px] gap-2.5 text-[15px] capitalize text-black-900_01"
                        />{" "}
                      </RadioGroup>{" "}
                      <Input
                        size="lg"
                        shape="round"
                        type="number"
                        name="plate_number"
                        placeholder={`Plate Number`}
                        className="self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01"
                      />{" "}
                      <Button
                        color="primary_colors_900"
                        size="lg"
                        variant="fill"
                        shape="round"
                        className="self-stretch rounded-[22px] px-[34px] font-medium capitalize sm:px-5"
                      >
                        {" "}
                        Vehicle Damage Inquiry{" "}
                      </Button>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        {" "}
                        <Text
                          size="textlg"
                          as="p"
                          className="text-[15px] font-normal capitalize !text-primary_colors-900"
                        >
                          {" "}
                          My Past Queries{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </TabPanel>
              ))}{" "}
            </Tabs>{" "}
            <div className="ml-10 mt-5 flex w-[30%] flex-col items-start gap-1 self-start md:ml-0 md:w-full">
              {" "}
              <Heading
                size="heading4xl"
                as="h1"
                className="text-[30px] font-semibold capitalize md:text-[28px] sm:text-[26px]"
              >
                {" "}
                Vehicle Damage Inquiry{" "}
              </Heading>{" "}
              <Text
                as="p"
                className="text-[16px] font-normal leading-[165.5%] !text-black-900_01"
              >
                {" "}
                <>
                  {" "}
                  You can learn the damage information or vehicle <br /> details
                  of any vehicle you want by using its plate <br /> or chassis
                  number. <br /> <br /> Log in with your corporate account to
                  get special <br /> pricing for corporate account holders.{" "}
                </>{" "}
              </Text>{" "}
            </div>{" "}
            <Img
              src="images/img_360526306_11452734.png"
              alt="Image"
              className="ml-1.5 h-[360px] w-[34%] object-contain md:ml-0 md:w-full"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
