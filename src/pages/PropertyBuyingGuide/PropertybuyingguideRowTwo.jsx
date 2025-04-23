import { Img, Heading } from "../../components";
import React from "react";
export default function PropertybuyingguideRowTwo() {
  return (
    <div className="mt-7 flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          {" "}
          <div className="w-full rounded-[10px] bg-white p-6 shadow-sm sm:p-5">
            {" "}
            <div className="mb-1.5 flex items-start md:flex-col">
              {" "}
              <div className="flex w-[70%] flex-col items-start gap-2.5 md:w-full">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h1"
                  className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  Home Buying Guide in 10 Steps{" "}
                </Heading>{" "}
                <Heading
                  size="text3xl"
                  as="h2"
                  className="text-[20px] font-medium leading-[30px]"
                >
                  {" "}
                  <>
                    {" "}
                    We have summarized the information for you may need and what
                    you need to <br /> do when buying a house in 10 steps and
                    compiled it in a guide. With the 10- <br /> Step Home Buying
                    Guide, your mind will be at ease and your job will be <br />{" "}
                    easy.{" "}
                  </>{" "}
                </Heading>{" "}
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
