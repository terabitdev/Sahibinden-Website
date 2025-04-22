import { Heading, Img } from "./..";
import React from "react";
export default function HomeColumnvehicle({
  vehicle = "images/img_frame_black_900_01_50x50.svg",
  vehicle1 = "&lt;&gt;Vehicle &lt;br /&gt;Valuation&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[14%] md:w-full gap-2.5 p-3.5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Img src={vehicle} alt="Vehicle" className="h-[50px]" />{" "}
      <Heading
        size="text3xl"
        as="p"
        className="text-center text-[20px] font-medium leading-[30px]"
      >
        {" "}
        {vehicle1}{" "}
      </Heading>{" "}
    </div>
  );
}
