import { Text, Heading, Img } from "./..";
import React from "react";
export default function VehicleMarketValueInfo({
  headingText = "How Can I Find Out the Market Value of the Vehicle I Will Sell?",
  descriptionText = "There are some simple steps you need to follow to find out the price of your car. With these applications, you can sell your car at its real value and get the amount you expect. You need to answer some questions to find out the value of your car. If you are the first user of your car or in other words, if you bought a brand new car, you know if there is any damage.......",
  moreText = "More",
  readsCounterText = "214490 Reads",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-6 sm:p-5 bg-white shadow-sm flex-1 rounded-[10px] container-sm`}
    >
      {" "}
      <div className="flex w-full items-center gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[288px] w-[30%] object-contain md:w-full"
        />{" "}
        <div className="flex-1 md:self-stretch">
          {" "}
          <div className="flex flex-col items-start">
            {" "}
            <Heading
              size="headingxl"
              as="h4"
              className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
            >
              {" "}
              {headingText}{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="mt-4 w-full text-[20px] font-normal leading-[30px]"
            >
              {" "}
              {descriptionText}{" "}
            </Heading>{" "}
            <div className="mt-[50px] flex flex-wrap justify-between gap-5 self-stretch">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-medium !text-primary_colors-900"
              >
                {" "}
                {moreText}{" "}
              </Text>{" "}
              <Text
                as="p"
                className="text-[16px] font-medium !text-blue_gray-100"
              >
                {" "}
                {readsCounterText}{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
