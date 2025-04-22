import { Heading } from "./..";
import React from "react";
export default function ServiceDescription({
  headlineText = "Get Comprehensive Service at an Affordable Price",
  descriptionText = "&lt;&gt;Choose from our expert packages and have a comprehensive &lt;br /&gt;expert assessment done at an affordable price.&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[50%] md:w-full gap-5 px-2.5 py-6 sm:py-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading
        size="text7xl"
        as="p"
        className="text-[25px] font-medium sm:text-[21px]"
      >
        {" "}
        {headlineText}{" "}
      </Heading>{" "}
      <Heading
        size="text3xl"
        as="p"
        className="mb-[30px] text-[20px] font-medium leading-[30px] sm:text-[17px]"
      >
        {" "}
        {descriptionText}{" "}
      </Heading>{" "}
    </div>
  );
}
