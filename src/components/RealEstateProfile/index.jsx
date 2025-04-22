import { Heading, Img } from "./..";
import React from "react";
export default function RealEstateProfile({
  realEstateImage = "images/img_home_orange_100.svg",
  realEstateText = "Real Estate",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-2.5 px-14 py-[70px] md:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Img src={realEstateImage} alt="Real Estate" className="h-[50px]" />{" "}
      <Heading as="p" className="text-[22px] font-medium capitalize">
        {" "}
        {realEstateText}{" "}
      </Heading>{" "}
    </div>
  );
}
