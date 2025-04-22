import { Heading, Img } from "./..";
import React, { Suspense } from "react";
const data = [
  {
    image: "images/img_frame_black_900_01.svg",
    realestate: (
      <>
        {" "}
        Real Estate <br /> Expertise{" "}
      </>
    ),
  },
  {
    image: "images/img_user.svg",
    realestate: (
      <>
        {" "}
        Credit <br /> Offers{" "}
      </>
    ),
  },
  {
    image: "images/img_frame_light_blue_400.svg",
    realestate: (
      <>
        {" "}
        Property Buying <br /> Guide{" "}
      </>
    ),
  },
  {
    image: "images/img_frame_light_blue_400.svg",
    realestate: (
      <>
        {" "}
        Property Rental <br /> Guide{" "}
      </>
    ),
  },
  {
    image: "images/img_frame_light_blue_400.svg",
    realestate: (
      <>
        {" "}
        Real Estate <br /> Sales Guide{" "}
      </>
    ),
  },
];
export default function HomeColumnrealestat({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start self-stretch mr-[396px] gap-5 md:mr-0 flex-1`}
    >
      {" "}
      <Heading
        size="text7xl"
        as="p"
        className="text-[25px] font-medium sm:text-[21px]"
      >
        {" "}
        Real Estate360{" "}
      </Heading>{" "}
      <div className="flex gap-[22px] self-stretch">
        {" "}
        <Suspense fallback={<div>Loading feed...</div>}>
          {" "}
          {data.map((d, index) => (
            <div
              key={"listrealestate" + index}
              className="flex w-[20%] flex-col items-center gap-2.5 rounded-[10px] bg-white p-3.5 shadow-xs sm:gap-2.5"
            >
              {" "}
              <Img
                src={d.image}
                alt="Image"
                className="h-[50px] w-[34%] object-contain"
              />{" "}
              <Heading
                size="text3xl"
                as="p"
                className="text-center text-[20px] font-medium leading-[30px] sm:text-[17px]"
              >
                {" "}
                {d.realestate}{" "}
              </Heading>{" "}
            </div>
          ))}{" "}
        </Suspense>{" "}
      </div>{" "}
    </div>
  );
}
