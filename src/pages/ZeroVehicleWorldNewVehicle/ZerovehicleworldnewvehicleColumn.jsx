import { Heading } from "../../components";
import ZeroVehicleWorldNewVehicleColumn from "../../components/ZeroVehicleWorldNewVehicleColumn";
import React, { Suspense } from "react";
export default function ZerovehicleworldnewvehicleColumn() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-10 md:px-5">
        {" "}
        <Heading
          size="text9xl"
          as="h1"
          className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
        >
          {" "}
          Vehicle Comparison{" "}
        </Heading>{" "}
        <div className="flex gap-20 self-stretch md:flex-col">
          {" "}
          <Suspense fallback={<div>Loading feed...</div>}>
            {" "}
            {[...Array(3)].map((d, index) => (
              <ZeroVehicleWorldNewVehicleColumn
                key={"listaddvehicle" + index}
              />
            ))}{" "}
          </Suspense>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
