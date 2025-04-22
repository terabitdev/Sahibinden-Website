import { Heading } from "./..";
import React from "react";
export default function WhileBuyingVehicleValuationColumnwhatisveh({
  whatisvehicle = "What is Vehicle Valuation?",
  description = "&lt;&gt;Vehicle Valuation is a service that &lt;br /&gt;suggests a certain price range for &lt;br /&gt;each vehicle using the current ad &lt;br /&gt;data on sahibinden.com. You can &lt;br /&gt;immediately learn the accurate &lt;br /&gt;and reliable value of the vehicle &lt;br /&gt;you want to sell or buy by entering &lt;br /&gt;its features with Vehicle Valuation.&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-5 px-4 py-6 sm:py-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading size="text7xl" as="p" className="text-[25px] font-medium">
        {" "}
        {whatisvehicle}{" "}
      </Heading>{" "}
      <Heading
        size="text3xl"
        as="p"
        className="mb-[210px] text-[20px] font-normal leading-[30px]"
      >
        {" "}
        {description}{" "}
      </Heading>{" "}
    </div>
  );
}
