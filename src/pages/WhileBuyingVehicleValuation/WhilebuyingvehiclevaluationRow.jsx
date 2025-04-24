import { Heading, Button, Text, Input } from "../../components";
import React from "react";
export default function WhilebuyingvehiclevaluationRow() {
  return (
    <div className="flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col items-start">
          {" "}
          <div className="relative z-[1] ml-[328px] flex w-[20%] flex-col items-center rounded-lg md:ml-0 md:w-full">
            {" "}
            <div className="flex justify-center self-stretch bg-white p-3">
              {" "}
              <Text
                as="p"
                className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
              >
                {" "}
                Vehicle Comparison{" "}
              </Text>{" "}
            </div>{" "}
            <Input
              size="xs"
              shape="square"
              name="itemtwo_one"
              placeholder={`Vehicle Valuation`}
              className="self-stretch px-3.5 font-montserrat !text-primary_colors-900"
            />{" "}
            <Text
              as="p"
              className="bg-white py-3 pl-4 !font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
            >
              {" "}
              Vehicle Damage Inquiry{" "}
            </Text>{" "}
            <Input
              size="xs"
              shape="square"
              name="itemfour_one"
              placeholder={`Auto Expertise`}
              className="self-stretch px-3.5 font-montserrat !text-blue_gray-900_01"
            />{" "}
            <Button
              size="lg"
              variant="fill"
              shape="square"
              className="self-stretch pl-4 pr-5 font-montserrat !text-blue_gray-900_01"
            >
              {" "}
              Vehicle Buying Guide{" "}
            </Button>{" "}
            <div className="flex self-stretch bg-white px-4 py-3">
              {" "}
              <Text
                as="p"
                className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
              >
                {" "}
                Auto Dictionary{" "}
              </Text>{" "}
            </div>{" "}
          </div>
          <div className="relative mt-[-80px] self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
            {" "}
            <div className="mb-[18px] mr-[62px] flex flex-col items-start gap-5 md:mr-0">
              {" "}
              <Heading
                size="text9xl"
                as="h1"
                className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
              >
                {" "}
                Vehicle Valuation{" "}
              </Heading>{" "}
              <Heading
                size="text9xl"
                as="h2"
                className="text-[30px] font-medium leading-[45px] md:text-[28px] sm:text-[26px]"
              >
                {" "}
                <>
                  {" "}
                  Learn the estimated market value of the vehicle you want to
                  buy or sell with <br /> our &quot;Vehicle Valuation
                  Service&quot;! This service is offered by utilizing the
                  current <br /> and comprehensive ad data on sahibinden.com.{" "}
                </>{" "}
              </Heading>{" "}
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                {" "}
                <Button
                  color="primary_colors_900"
                  size="4xl"
                  variant="fill"
                  className="min-w-[352px] rounded px-[34px] font-semibold !text-indigo-50_02 sm:px-5"
                >
                  {" "}
                  Vehicle Valuation{" "}
                </Button>{" "}
              </a>{" "}
              <Heading
                size="headingmd"
                as="h3"
                className="text-[20px] font-semibold leading-[30px] !text-blue_gray-400_03"
              >
                {" "}
                <>
                  {" "}
                  sahibinden.com is not responsible for any damages that users
                  or third parties may suffer in the event that any transaction,{" "}
                  <br /> including purchase or sale, is made or not made based
                  on the information provided in the vehicle valuation service.{" "}
                  <br /> The vehicle&#39;s paint, damage status and additional
                  equipment features are not taken into consideration in the
                  calculation.{" "}
                </>{" "}
              </Heading>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
