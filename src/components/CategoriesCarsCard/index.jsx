import { Text, Img, Heading, Button } from "./..";
import React from "react";
export default function CategoriesCarsCard({
  highettCommon = "images/img_white_offroader_jeep_parking.png",
  car = "Car",
  highettcommon = "Highett Common",
  abbotsford = "Abbotsford, Victoria",
  thirteen = "1-3",
  p13one = "1-3",
  p13two = "1-3",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-6`}>
      {" "}
      <div className="relative h-[300px] content-center self-stretch">
        {" "}
        <Img
          src={highettCommon}
          alt="Highett Common"
          className="h-[300px] w-full flex-1 rounded-tl-[14px] rounded-tr-[14px] object-cover"
        />{" "}
        <Button
          color="white_A700_66"
          size="md"
          variant="fill"
          className="absolute left-3 top-3.5 m-auto min-w-[58px] rounded-[20px] border border-solid border-white px-[9px] font-medium uppercase"
        >
          {" "}
          {car}{" "}
        </Button>{" "}
      </div>{" "}
      <div className="flex flex-col items-start gap-2 self-stretch">
        {" "}
        <div className="flex items-center self-stretch">
          {" "}
          <Heading
            size="text3xl"
            as="p"
            className="text-[20px] font-medium !text-black-0"
          >
            {" "}
            {highettcommon}{" "}
          </Heading>{" "}
          <Img
            src="images/img_bitcoin_icons_verify_filled.svg"
            alt="Highett Common"
            className="h-[20px]"
          />{" "}
        </div>{" "}
        <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
          {" "}
          {abbotsford}{" "}
        </Text>{" "}
      </div>{" "}
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        {" "}
        <div className="h-px w-[74%] bg-gray-200_03" />{" "}
        <div className="flex items-center self-stretch">
          {" "}
          <div className="flex items-center gap-1.5">
            {" "}
            <Img
              src="images/img_bed.png"
              alt="Image"
              className="h-[18px] object-cover"
            />{" "}
            <Text as="p" className="text-[16px] font-normal">
              {" "}
              {thirteen}{" "}
            </Text>{" "}
          </div>{" "}
          <div className="ml-3.5 h-[20px] w-px bg-gray-200_03" />{" "}
          <div className="flex items-center gap-[7px]">
            {" "}
            <Img
              src="images/img_bath.png"
              alt="Image"
              className="h-[18px] object-cover"
            />{" "}
            <Text as="p" className="text-[16px] font-normal">
              {" "}
              {p13one}{" "}
            </Text>{" "}
          </div>
          <div className="ml-3.5 h-[20px] w-px bg-gray-200_03" />{" "}
          <div className="flex flex-1 items-center gap-[7px] px-3.5">
            {" "}
            <Img
              src="images/img_car_18x18.png"
              alt="Image"
              className="h-[18px] object-cover"
            />{" "}
            <Text as="p" className="text-[16px] font-normal">
              {" "}
              {p13two}{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
        <div className="h-px w-[74%] bg-gray-200_03" />{" "}
      </div>{" "}
    </div>
  );
}
