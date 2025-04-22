import { Heading, Img } from "./..";
import React from "react";
export default function ZeroVehicleWorldCampaignVehiclesRow({
  dfskefive = "DFSK E5",
  tlCounter = "1,790,000 TL",
  thereareone = "There are 1 different engine and package options in total.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch px-6 sm:px-5 bg-white shadow-xs flex-1 rounded-[10px] container-sm`}
    >
      {" "}
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_360526306_11452734.png"
          alt="Dfsk Efive"
          className="h-[274px] w-[38%] object-contain md:w-full"
        />{" "}
        <Heading
          size="text9xl"
          as="p"
          className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
        >
          {" "}
          {dfskefive}{" "}
        </Heading>{" "}
        <div className="flex flex-col items-start gap-2.5">
          {" "}
          <Heading
            size="text9xl"
            as="p"
            className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
          >
            {" "}
            {tlCounter}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="text-[20px] font-medium !text-blue_gray-400_03"
          >
            {" "}
            {thereareone}{" "}
          </Heading>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
