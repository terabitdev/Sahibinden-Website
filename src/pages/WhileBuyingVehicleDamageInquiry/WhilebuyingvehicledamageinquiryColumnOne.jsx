import { Heading } from "../../components";
import WhileBuyingVehicleDamageInquiryColumnwhatisveh from "../../components/WhileBuyingVehicleDamageInquiryColumnwhatisveh";
import React from "react";
export default function WhilebuyingvehicledamageinquiryColumnOne() {
  return (
    <div className="mt-[50px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-5 md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h2"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Detailed Information{" "}
        </Heading>{" "}
        <div className="flex gap-[30px] self-stretch md:flex-col">
          {" "}
          <WhileBuyingVehicleDamageInquiryColumnwhatisveh />{" "}
          <WhileBuyingVehicleDamageInquiryColumnwhatisveh
            whatisvehicle="What is Vehicle Detail Inquiry Service?"
            description="It is a service where you can learn the brand and model of the vehicle, its registration date, its period with or without insurance, whether it has insurance in force, whether there has been a change in plate or vehicle type, in which provinces it is registered, and the last ownership period."
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
