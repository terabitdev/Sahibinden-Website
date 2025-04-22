import { Text, Heading, Img } from "./..";
import React from "react";
export default function RealEstateExpertisePropertyRowOne({
  whichhouses = "Which Houses Fall into the Defective Category?",
  description = "Defective housing is a real estate that does not meet the specifications specified by the seller, does not meet the agreed technical specifications, and prevents the buyer from benefiting from the house as required. Law No. 6506 on Consumer Protection states that the seller is responsible for defective goods and the buyer has certain rights in this case.",
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
      <div className="flex w-full items-start gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[288px] w-[30%] self-center object-contain md:w-full"
        />{" "}
        <div className="flex-1 md:self-stretch">
          {" "}
          <div className="flex flex-col items-start gap-[18px]">
            {" "}
            <Heading
              size="headingxl"
              as="h4"
              className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
            >
              {" "}
              {whichhouses}{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="w-full text-[20px] font-normal leading-[30px]"
            >
              {" "}
              {description}{" "}
            </Heading>{" "}
            <div className="flex flex-wrap justify-between gap-5 self-stretch">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-medium !text-primary_colors-900"
              >
                {" "}
                {more}{" "}
              </Text>{" "}
              <Text
                as="p"
                className="text-[16px] font-medium !text-blue_gray-100"
              >
                {" "}
                {readsCounter}{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
