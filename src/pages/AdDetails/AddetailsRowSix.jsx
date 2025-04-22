import { Heading, Img } from "../../components";
import React, { Suspense } from "react";
const data = [
  { image: "images/img_mask_group.png" },
  { image: "images/img_mask_group_106x180.png" },
  { image: "images/img_mask_group_106x180.png" },
];
export default function AddetailsRowSix() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[20px] border border-solid border-gray-300_01 bg-white py-[38px] sm:py-5">
          {" "}
          <div className="flex items-center justify-center gap-4 md:flex-col">
            {" "}
            <div className="flex w-[58%] flex-col gap-[26px] md:w-full">
              {" "}
              <Img
                src="images/img_frames_for_your_400x794.png"
                alt="Image"
                className="h-[400px] rounded-[10px] object-cover"
              />{" "}
              <div className="mr-[226px] flex gap-2.5 md:mr-0 md:flex-col">
                {" "}
                <Suspense fallback={<div>Loading feed...</div>}>
                  {" "}
                  {data.map((d, index) => (
                    <Img
                      key={"list" + index}
                      src={d.image}
                      alt="Image"
                      className="h-[106px] w-[32%] object-contain md:w-full"
                    />
                  ))}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
            <div className="w-[38%] px-3.5 md:w-full">
              {" "}
              <div className="flex flex-col items-start gap-3">
                {" "}
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="text-[26px] font-bold !text-blue_gray-900 md:text-[24px] sm:text-[22px]"
                >
                  {" "}
                  1,395,000 TL{" "}
                </Heading>{" "}
                <div className="flex items-center self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Ad No.{" "}
                  </Heading>{" "}
                  <div className="ml-2.5 h-[24px] w-px bg-black-900_01" />{" "}
                  <Heading
                    size="text3xl"
                    as="h3"
                    className="ml-2 text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    12562345678654{" "}
                  </Heading>{" "}
                </div>
                <div className="flex items-center self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h4"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Announcement Date{" "}
                  </Heading>{" "}
                  <div className="ml-2.5 h-[24px] w-px bg-black-900_01" />{" "}
                  <Heading
                    size="text3xl"
                    as="h5"
                    className="ml-2 text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    March 2025{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="flex items-center self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h6"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Property Type{" "}
                  </Heading>{" "}
                  <div className="ml-2.5 h-[24px] w-px bg-black-900_01" />{" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="ml-2 text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    House For Sale{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="flex items-center self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    m2 (Gross){" "}
                  </Heading>{" "}
                  <div className="ml-2.5 h-[24px] w-px bg-black-900_01" />{" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="ml-2 text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    70{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="flex items-center self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    m2 (Net){" "}
                  </Heading>{" "}
                  <div className="ml-2.5 h-[24px] w-px bg-black-900_01" />{" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="ml-2 text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    65{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="flex gap-2.5 self-stretch">
                  {" "}
                  <div className="flex items-center gap-2.5">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal !text-gray-800_02"
                    >
                      {" "}
                      Number of Rooms{" "}
                    </Heading>{" "}
                    <div className="h-[24px] w-px bg-black-900_01" />{" "}
                  </div>{" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    3 + 3{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="flex self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Building Age{" "}
                  </Heading>
                  <div className="flex flex-1 items-center gap-[9px] px-2.5">
                    {" "}
                    <div className="h-[24px] w-px bg-black-900_01" />{" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal !text-gray-800_02"
                    >
                      {" "}
                      Between 2-3{" "}
                    </Heading>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-2.5 self-stretch">
                  {" "}
                  <div className="flex items-center gap-2.5">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal !text-gray-800_02"
                    >
                      {" "}
                      Number of Floors{" "}
                    </Heading>{" "}
                    <div className="h-[24px] w-px bg-black-900_01" />{" "}
                  </div>{" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    2{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="flex items-center self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Heating{" "}
                  </Heading>{" "}
                  <div className="ml-2.5 h-[24px] w-px bg-black-900_01" />{" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="ml-2 text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Combi Boiler{" "}
                  </Heading>{" "}
                </div>{" "}
                <div className="mb-[30px] flex self-stretch">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="text-[20px] font-normal !text-gray-800_02"
                  >
                    {" "}
                    Parking{" "}
                  </Heading>{" "}
                  <div className="flex flex-1 items-center gap-[9px] px-2.5">
                    {" "}
                    <div className="h-[24px] w-px bg-black-900_01" />{" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal !text-gray-800_02"
                    >
                      {" "}
                      Two Vehicles{" "}
                    </Heading>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
