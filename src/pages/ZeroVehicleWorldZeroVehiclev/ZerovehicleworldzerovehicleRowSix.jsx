import { Img } from "../../components";
import UserProfileImage1 from "../../components/UserProfileImage1";
import React, { Suspense } from "react";
export default function ZerovehicleworldzerovehicleRowSix() {
  return (
    <div className="mt-[72px] flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-5 shadow-xs">
          {" "}
          <div className="flex items-start gap-5 md:flex-col">
            {" "}
            <div className="flex w-[12%] flex-col gap-5 md:w-full">
              {" "}
              <Img
                src="images/img_bmw_seeklogo_1.png"
                alt="Bmwseeklogofour"
                className="h-[150px] object-cover"
              />{" "}
              <Img
                src="images/img_audi_seeklogo_1.png"
                alt="Audiseeklogotwo"
                className="h-[92px] object-cover"
              />{" "}
              <Img
                src="images/img_bmw_seeklogo_1.png"
                alt="Bmwseeklogofive"
                className="h-[150px] object-cover"
              />{" "}
              <Img
                src="images/img_audi_seeklogo_1.png"
                alt="Audiseeklogothr"
                className="h-[92px] object-cover"
              />{" "}
              <Img
                src="images/img_bmw_seeklogo_1.png"
                alt="Bmwseeklogosix"
                className="h-[150px] object-cover"
              />{" "}
            </div>{" "}
            <div className="ml-5 grid flex-1 grid-cols-3 gap-5 self-center md:ml-0 md:grid-cols-2 md:self-stretch sm:grid-cols-1">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {[...Array(12)].map((d, index) => (
                  <UserProfileImage1 key={"grid" + index} />
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
