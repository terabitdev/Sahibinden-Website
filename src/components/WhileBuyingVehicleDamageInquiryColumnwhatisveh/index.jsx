import { Text, Heading } from "./..";
import React from "react";
export default function WhileBuyingVehicleDamageInquiryColumnwhatisveh({
  whatisvehicle = "What is Vehicle Damage Inquiry Service?",
  description = "It is a service where you can find out whether a vehicle has been involved in an accident before, if so, the date of the accident, the cause of the accident and the amount of damage. You can easily make inquiries and have the damage information sent to your e-mail address.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-5 p-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading
        size="text3xl"
        as="p"
        className="text-[20px] font-medium sm:text-[17px]"
      >
        {" "}
        {whatisvehicle}{" "}
      </Heading>{" "}
      <Text
        size="textlg"
        as="p"
        className="mb-[22px] w-full text-[15px] font-medium leading-[22px] !text-black-900_01 sm:w-full"
      >
        {" "}
        {description}{" "}
      </Text>{" "}
    </div>
  );
}
