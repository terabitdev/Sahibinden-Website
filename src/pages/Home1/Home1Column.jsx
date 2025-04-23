import { Heading } from "../../components";
import HomeColumnvehicle from "../../components/HomeColumnvehicle";
import React, { Suspense } from "react";
const data = [
  {
    vehicle: "images/img_frame_black_900_01_50x50.svg",
    vehicle1: (
      <>
        {" "}
        Vehicle <br /> Valuation{" "}
      </>
    ),
  },
  {
    vehicle: "images/img_group.png",
    vehicle1: (
      <>
        {" "}
        Vehicle <br /> Comparison{" "}
      </>
    ),
  },
  {
    vehicle: "images/img_frame_red_a200.svg",
    vehicle1: (
      <>
        {" "}
        Vehicle Damage <br /> Inquiry{" "}
      </>
    ),
  },
  {
    vehicle: "images/img_frame_black_900_01.svg",
    vehicle1: (
      <>
        {" "}
        Auto <br /> Expertise{" "}
      </>
    ),
  },
  {
    vehicle: "images/img_user.svg",
    vehicle1: (
      <>
        {" "}
        Credit <br /> Offers{" "}
      </>
    ),
  },
  {
    vehicle: "images/img_frame_3.svg",
    vehicle1: (
      <>
        {" "}
        Zero World <br /> Vehicle{" "}
      </>
    ),
  },
  {
    vehicle: "images/img_frame_red_600.png",
    vehicle1: (
      <>
        {" "}
        S-My <br /> Vehicle{" "}
      </>
    ),
  },
];
export default function Home1Column() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-5 md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h2"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Auto360{" "}
        </Heading>{" "}
        <div className="flex gap-[22px] self-stretch md:flex-col">
          {" "}
          <Suspense fallback={<div>Loading feed...</div>}>
            {" "}
            {data.map((d, index) => (
              <HomeColumnvehicle {...d} key={"listvehicle" + index} />
            ))}{" "}
          </Suspense>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
