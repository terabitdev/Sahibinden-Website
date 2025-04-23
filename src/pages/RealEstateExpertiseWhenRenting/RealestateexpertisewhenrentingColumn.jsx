import { Img, Text, Heading } from "../../components";
import React from "react";
export default function RealestateexpertisewhenrentingColumn() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-[30px] md:px-5">
        {" "}
        <Heading
          size="heading5xl"
          as="h1"
          className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
        >
          {" "}
          Property Rental Guide{" "}
        </Heading>{" "}
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          {" "}
          <div className="self-stretch rounded-[10px] bg-white p-4 shadow-sm">
            {" "}
            <div className="flex items-center md:flex-col">
              {" "}
              <div className="flex w-[74%] flex-col items-start gap-2.5 md:w-full">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  10 Step Home Rental Guide{" "}
                </Heading>{" "}
                <Heading
                  size="text3xl"
                  as="h3"
                  className="text-[20px] font-medium leading-[30px]"
                >
                  {" "}
                  <>
                    {" "}
                    We have summarized the information for you may need and what
                    you need to <br /> do when renting your house in 10 steps
                    and compiled it in a guide. With the <br /> 10-Step Home
                    Rental Guide, your mind will be at ease and your job will be{" "}
                    <br /> easy.{" "}
                  </>{" "}
                </Heading>{" "}
                <Text
                  as="p"
                  className="text-[16px] font-medium !text-primary_colors-900"
                >
                  {" "}
                  More{" "}
                </Text>{" "}
              </div>{" "}
              <Img
                src="images/img_frame_blue_gray_600_03.svg"
                alt="Image"
                className="h-[224px] w-[16%] object-contain md:w-full"
              />{" "}
            </div>{" "}
          </div>{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}
