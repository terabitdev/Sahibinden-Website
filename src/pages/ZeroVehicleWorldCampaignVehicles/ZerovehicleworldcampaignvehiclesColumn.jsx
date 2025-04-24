import { Heading } from "../../components";
import ZeroVehicleWorldCampaignVehiclesRow from "../../components/ZeroVehicleWorldCampaignVehiclesRow";
import React, { Suspense } from "react";
const data = [
  {
    dfskefive: "DFSK E5",
    tlCounter: "1,790,000 TL",
    thereareone: "There are 1 different engine and package options in total.",
  },
  {
    dfskefive: "DFSK E5",
    tlCounter: "1,790,000 TL",
    thereareone: "There are 1 different engine and package options in total.",
  },
  {
    dfskefive: "DFSK E5",
    tlCounter: "1,790,000 TL",
    thereareone: "There are 1 different engine and package options in total.",
  },
];
export default function ZerovehicleworldcampaignvehiclesColumn() {
  return (
    <div className="mt-7 flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-6 md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h4"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Price List 90 results found matching your search{" "}
        </Heading>{" "}
        <div className="flex flex-col gap-[30px] self-stretch">
          {" "}
          <Suspense fallback={<div>Loading feed...</div>}>
            {" "}
            {data.map((d, index) => (
              <ZeroVehicleWorldCampaignVehiclesRow
                {...d}
                key={"listdfskEfive" + index}
              />
            ))}{" "}
          </Suspense>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
