import { Heading } from "./..";
import React from "react";
export default function DieselTextComponent({
  textContent = "Diesel",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-[32%] md:w-full p-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Heading
        size="text3xl"
        as="p"
        className="mb-[158px] flex items-center justify-center rounded-[10px] bg-primary_colors-900 px-4 text-[20px] font-medium !text-white"
      >
        {" "}
        {textContent}{" "}
      </Heading>{" "}
    </div>
  );
}
