import { Text, Heading, Img } from "./..";
import React from "react";
export default function RealEstateExpertiseAfterLeaseThreeRow({
  canahouse = "Can a House with Property Tax Debt Be Sold?",
  description = "According to the Real Estate Tax Law No. 319, real estate owners are obliged to pay real estate tax. Only under certain conditions, widows, unemployed, relatives of martyrs, housewives, veterans or retired people are not obliged to pay real estate tax. Those who purchase real estate can go to the municipality where the real estate is located or through the e-government Land Registry Immovable Declaration page to make a real estate declaration...",
  more = "More",
  readsCounter = "214490 Reads",
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
        <div className="flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
          {" "}
          <Heading
            size="headingxl"
            as="h4"
            className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
          >
            {" "}
            {canahouse}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="w-full text-[20px] font-normal leading-[30px]"
          >
            {" "}
            {description}{" "}
          </Heading>{" "}
          <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
            {" "}
            <Text
              as="p"
              className="mb-4 text-[16px] font-medium !text-primary_colors-900"
            >
              {" "}
              {more}{" "}
            </Text>{" "}
            <Text
              as="p"
              className="self-end text-[16px] font-medium !text-blue_gray-100"
            >
              {" "}
              {readsCounter}{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
