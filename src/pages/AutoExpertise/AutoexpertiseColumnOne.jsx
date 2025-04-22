import { Heading } from "../../components";
import ServiceDescription from "../../components/ServiceDescription";
import React from "react";
export default function AutoexpertiseColumnOne() {
  return (
    <div className="mt-[50px] flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col items-start gap-[26px] md:px-5">
        {" "}
        <Heading
          size="text9xl"
          as="h2"
          className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
        >
          {" "}
          Why should I get expert service from sahibinden.com?{" "}
        </Heading>{" "}
        <div className="flex gap-[30px] self-stretch md:flex-col">
          {" "}
          <ServiceDescription />{" "}
          <ServiceDescription
            headlineText="Choose Professional Service"
            descriptionText={
              <>
                {" "}
                Selected for you by sahibinden.com to Get professional and{" "}
                <br /> quality service by choosing one of our kspertiz business{" "}
                <br /> partner Auto King Auto Expertise branches.{" "}
              </>
            }
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
