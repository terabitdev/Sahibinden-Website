import { Heading } from "../../components";
import ActiveSuspensionInfo from "../../components/ActiveSuspensionInfo";
import React from "react";
export default function WhilesellingautodictionaryColumnOne() {
  return (
    <div className="mt-10 flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-[60px] md:px-5 sm:gap-[30px]">
        {" "}
        <Heading
          size="text3xl"
          as="h2"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-primary_colors-900 text-center text-[20px] font-medium capitalize !text-white"
        >
          {" "}
          a{" "}
        </Heading>{" "}
        <div className="flex flex-col gap-[60px] self-stretch">
          {" "}
          <ActiveSuspensionInfo /> <ActiveSuspensionInfo />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
