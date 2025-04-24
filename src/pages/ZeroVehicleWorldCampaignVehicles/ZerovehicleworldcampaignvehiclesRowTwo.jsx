import { Heading } from "../../components";
import React from "react";
export default function ZerovehicleworldcampaignvehiclesRowTwo() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white px-6 py-[34px] shadow-xs sm:p-5">
          {" "}
          <div className="flex items-center justify-center">
            {" "}
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {" "}
              <Heading
                size="text3xl"
                as="h1"
                className="text-[20px] font-medium !text-blue_gray-400_03"
              >
                {" "}
                Campaign Vehicles{" "}
              </Heading>{" "}
              <Heading
                size="text7xl"
                as="h2"
                className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
              >
                {" "}
                Yes{" "}
              </Heading>{" "}
            </div>{" "}
            <Heading
              size="text3xl"
              as="h3"
              className="mb-5 self-end text-[20px] font-medium !text-primary_colors-900"
            >
              {" "}
              Change Filters{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
