import { Text, Heading } from "./..";
import React from "react";
export default function CategoriesMobilePhoneItem({
  p20k = "20K",
  satisfied = "Satisfied Clients",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center md:w-full px-[18px]`}
    >
      {" "}
      <Heading
        size="heading8xl"
        as="h1"
        className="text-[64px] font-black uppercase !text-black-0"
      >
        {" "}
        {p20k}{" "}
      </Heading>{" "}
      <Text
        as="p"
        className="text-[16px] font-medium uppercase !text-blue_gray-400"
      >
        {" "}
        {satisfied}{" "}
      </Text>{" "}
    </div>
  );
}
