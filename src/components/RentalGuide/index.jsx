import { Text, Img, Heading } from "./..";
import React from "react";
export default function RentalGuide({
  headingText = "Before Renting ",
  descriptionText = "&lt;&gt;Finding a rental house is a difficult process. Doing your research well is &lt;br /&gt;the most important step in finding a house that suits your needs. We have &lt;br /&gt;compiled the things you need to pay attention to during this process in our &lt;br /&gt;guide.&lt;/&gt;",
  moreText = "More ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-2.5`}
    >
      {" "}
      <Heading
        size="headingxl"
        as="h4"
        className="text-[25px] font-semibold sm:text-[21px]"
      >
        {" "}
        {headingText}{" "}
      </Heading>{" "}
      <div className="flex flex-col items-start gap-2.5 self-stretch sm:gap-2.5">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[276px] w-full object-cover sm:h-auto"
        />{" "}
        <Text
          size="textlg"
          as="p"
          className="text-[15px] font-normal leading-[165.5%] !text-black-900_01"
        >
          {" "}
          {descriptionText}{" "}
        </Text>{" "}
        <Text
          as="p"
          className="text-[16px] font-medium !text-primary_colors-900 sm:text-[13px]"
        >
          {" "}
          {moreText}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
