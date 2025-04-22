import { Text, Heading, Img } from "./..";
import React from "react";
export default function RealEstateIndexWhenSellingRowdeterminethe({
  determinethe = "Determine the Sales Price Realistically",
  description = "&lt;&gt;You can determine the sales price by learning the &lt;br /&gt;values ​​of similar properties that have been sold &lt;br /&gt;recently. Setting the price realistically ensures mutual &lt;br /&gt;trust between the parties.&lt;/&gt;",
  detailed = "Detailed Information",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-start self-stretch flex-1`}
    >
      {" "}
      <Img
        src="images/img_refresh.svg"
        alt="Image"
        className="relative z-[1] mt-11 h-[24px]"
      />{" "}
      <div className="relative ml-[-6px] flex flex-1 flex-col items-start gap-5 self-center rounded-[10px] bg-white p-6 shadow-xs sm:gap-5 sm:self-stretch sm:p-5">
        {" "}
        <Heading
          size="text7xl"
          as="p"
          className="text-[25px] font-medium sm:text-[21px]"
        >
          {" "}
          {determinethe}{" "}
        </Heading>{" "}
        <Heading
          size="text3xl"
          as="p"
          className="text-[20px] font-medium leading-[30px] sm:text-[17px]"
        >
          {" "}
          {description}{" "}
        </Heading>{" "}
        <Text
          as="p"
          className="mb-7 text-[16px] font-medium !text-primary_colors-900 sm:text-[13px]"
        >
          {" "}
          {detailed}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
