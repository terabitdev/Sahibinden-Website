import { Button, Heading } from "../../components";
import ZeroVehicleWorldColumn from "../../components/ZeroVehicleWorldColumn";
import React from "react";
export default function ZerovehicleworldColumnOne() {
  return (
    <div className="mt-[76px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-center gap-[60px] md:px-5 sm:gap-[30px]">
        {" "}
        <div className="flex flex-col items-start gap-5 self-stretch">
          {" "}
          <Heading
            size="text10xl"
            as="h5"
            className="text-[35px] font-medium md:text-[33px] sm:text-[31px]"
          >
            {" "}
            Vehicle Comparison{" "}
          </Heading>{" "}
          <div className="mx-60 flex gap-20 self-stretch md:mx-0 md:flex-col">
            {" "}
            <ZeroVehicleWorldColumn /> <ZeroVehicleWorldColumn />{" "}
          </div>{" "}
        </div>{" "}
        <Button
          color="primary_colors_900"
          size="4xl"
          variant="fill"
          className="min-w-[352px] rounded px-[34px] font-semibold !text-indigo-50_02 sm:px-5"
        >
          {" "}
          Compare{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
