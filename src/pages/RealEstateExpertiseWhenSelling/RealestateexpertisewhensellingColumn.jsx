import { Img, Text, Heading } from "../../components";
import React from "react";
export default function RealestateexpertisewhensellingColumn() {
  return (
    <div className="mt-[62px] flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col items-start gap-[30px] md:px-5">
        {" "}
        <Heading
          size="heading5xl"
          as="h1"
          className="ml-2 text-[35px] font-semibold md:ml-0 md:text-[33px] sm:text-[31px]"
        >
          {" "}
          Real Estate Sales Guide{" "}
        </Heading>{" "}
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          {" "}
          <div className="self-stretch rounded-[10px] bg-white p-6 shadow-sm sm:p-5">
            {" "}
            <div className="mb-1.5 flex items-start justify-center md:flex-col">
              {" "}
              <div className="flex w-[72%] flex-col items-start gap-2.5 md:w-full">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  10 Step Home Selling Guide{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h3"
                    className="text-[20px] font-medium leading-[30px]"
                  >
                    {" "}
                    <>
                      {" "}
                      We have summarized the information for you may need and
                      what you need to <br /> do when selling a house in 10
                      steps and compiled it in a guide. With the 10- <br /> Step
                      Home Selling Guide, your mind will be at ease and your job
                      will be <br /> easy.{" "}
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
              </div>{" "}
              <Img
                src="images/img_frame_blue_gray_600_03.svg"
                alt="Image"
                className="mt-1.5 h-[274px] w-[20%] self-center object-contain md:w-full"
              />{" "}
            </div>{" "}
          </div>{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}
