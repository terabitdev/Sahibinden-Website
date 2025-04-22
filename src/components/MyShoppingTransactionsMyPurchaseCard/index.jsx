import { Button, Img, Text, Heading } from "./..";
import React from "react";
export default function MyShoppingTransactionsMyPurchaseCard({
  highettCommon = "images/img_image_500x426.png",
  house = "House",
  highettcommon = "Highett Common",
  abbotsford = "Abbotsford, Victoria",
  price = "Cost $700,000",
  thirteen = "1-3",
  p13one = "1-3",
  p13two = "1-3",
  brochure = "Brochure",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[426px] gap-6`}
    >
      {" "}
      <div className="relative h-[500px] content-center self-stretch">
        <Img
          src={highettCommon}
          alt="Highett Common"
          className="h-[500px] w-full flex-1 rounded-tl-[14px] rounded-tr-[14px] object-cover"
        />
        <Button
          color="white_A700_66"
          size="md"
          variant="fill"
          className="absolute left-[18px] top-[23px] m-auto min-w-[76px] rounded-[20px] border border-solid border-white px-[9px] font-medium uppercase"
        >
          {" "}
          {house}{" "}
        </Button>
      </div>
      <div className="flex flex-col gap-2 self-stretch">
        {" "}
        <div className="flex items-center">
          {" "}
          <Heading
            size="text6xl"
            as="p"
            className="text-[24px] font-medium !text-black-0"
          >
            {highettcommon}{" "}
          </Heading>{" "}
          <Img
            src="images/img_bitcoin_icons_verify_filled.svg"
            alt="Highett Common"
            className="h-[20px]"
          />{" "}
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          {" "}
          <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
            {" "}
            {abbotsford}
          </Text>{" "}
          <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
            {" "}
            {price}{" "}
          </Text>{" "}
        </div>{" "}
      </div>
      <div className="flex justify-center self-stretch">
        {" "}
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {" "}
          <div className="h-px w-[76%] bg-gray-200_03" />{" "}
          <div className="flex gap-1.5 self-stretch">
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
            <div className="flex w-[34%] items-center justify-center gap-3.5">
              {" "}
              <div className="h-[20px] w-px bg-gray-200_03" />{" "}
              <div className="flex flex-1 items-center justify-center gap-1.5">
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
              </div>{" "}
              <div className="h-[20px] w-px bg-gray-200_03" />{" "}
            </div>{" "}
            <div className="flex flex-1 items-center gap-[7px] px-1.5">
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
          <div className="h-px w-[76%] bg-gray-200_03" />{" "}
        </div>{" "}
        <Button
          size="md"
          variant="fill"
          rightIcon={
            <Img
              src="images/img_materialsymbolslightdownloadsharp.svg"
              alt="Material-symbols-light:download-sharp"
              className="my-0.5 h-[20px] w-[20px] object-contain"
            />
          }
          className="min-w-[150px] gap-2 rounded-[20px] border border-solid border-primary_colors-900 px-[17px] font-medium uppercase"
        >
          {" "}
          {brochure}{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
