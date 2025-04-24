import { Img, Text, Heading } from "../../components";
import React from "react";
export default function WhilebuyingvehiclebuyingguideColumn() {
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
          Vehicle Buying Guide{" "}
        </Heading>{" "}
        <div className="self-stretch rounded-[10px] bg-white shadow-sm">
          {" "}
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {" "}
            <div className="flex items-center md:flex-col">
              {" "}
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  Vehicle Purchasing Guide in 11 Steps{" "}
                </Heading>{" "}
                <Heading
                  size="text3xl"
                  as="h3"
                  className="mt-2.5 text-[20px] font-medium leading-[30px]"
                >
                  {" "}
                  <>
                    {" "}
                    Are you looking for car? You probably have many questions in
                    you mind. <br /> “11 Step Car Buying Guide” will provide you
                    with all the answers you need <br /> and help you buy a car.{" "}
                  </>{" "}
                </Heading>{" "}
                <Text
                  as="p"
                  className="mt-5 text-[16px] font-medium !text-primary_colors-900"
                >
                  {" "}
                  More{" "}
                </Text>{" "}
              </div>{" "}
              <Img
                src="images/img_360526306_11452734.png"
                alt="Image"
                className="h-[238px] w-[40%] object-contain md:w-full"
              />{" "}
            </div>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
