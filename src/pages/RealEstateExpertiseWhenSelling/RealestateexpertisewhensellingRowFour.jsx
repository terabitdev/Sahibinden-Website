import { Text, Img, Heading } from "../../components";
import React from "react";
export default function RealestateexpertisewhensellingRowFour() {
  return (
    <div className="mt-6 flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white px-4 py-6 shadow-sm sm:py-5">
          {" "}
          <div className="flex items-start md:flex-col">
            {" "}
            <div className="flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
              {" "}
              <Heading
                size="headingxl"
                as="h2"
                className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Pre-Sales{" "}
              </Heading>{" "}
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                {" "}
                <Img
                  src="images/img_front_view_man.png"
                  alt="Frontviewman"
                  className="h-[276px] w-[84%] object-contain"
                />{" "}
                <Text
                  size="textlg"
                  as="p"
                  className="text-[15px] font-normal leading-[165.5%] !text-black-900_01"
                >
                  {" "}
                  <>
                    {" "}
                    Do you know what you may need before selling your property?
                    We have <br /> prepared a comprehensive guide for you, all
                    the information you need is <br /> here.{" "}
                  </>{" "}
                </Text>{" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-medium !text-primary_colors-900"
                  >
                    {" "}
                    Detailed Information{" "}
                  </Text>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex w-[44%] flex-col items-start self-center md:w-full">
              {" "}
              <Heading
                size="headingxl"
                as="h3"
                className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
              >
                {" "}
                During Sales{" "}
              </Heading>{" "}
              <Img
                src="images/img_front_view_man.png"
                alt="Frontviewman"
                className="mt-1.5 h-[268px] w-full object-cover md:h-auto"
              />{" "}
              <Text
                size="textlg"
                as="p"
                className="mt-[18px] text-[15px] font-normal leading-[165.5%] !text-black-900_01"
              >
                {" "}
                <>
                  {" "}
                  Are you renting a home or office? The Real <br /> Estate
                  Rental Guide will provide you with all the <br /> answers you
                  need and help you with the <br /> rental process.{" "}
                </>{" "}
              </Text>
              <Text
                as="p"
                className="mt-3.5 text-[16px] font-medium !text-primary_colors-900"
              >
                {" "}
                Detailed Information{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
