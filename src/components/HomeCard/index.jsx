import { Text, Img, Heading, Button } from "./..";
import React from "react";
export default function HomeCard({
  highettCommon = "images/img_frames_for_your.png",
  house = "House",
  highettcommon = "Highett Common",
  abbotsford = "Abbotsford, Victoria",
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
          className="absolute left-[12.50px] top-3.5 m-auto min-w-[76px] rounded-[20px] border border-solid border-white px-[9px] font-medium uppercase"
        >
          {" "}
          {house}{" "}
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
    </div>
  );
}
