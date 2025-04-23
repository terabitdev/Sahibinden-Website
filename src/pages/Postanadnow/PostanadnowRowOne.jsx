import { Heading } from "../../components";
import RealEstateProfile from "../../components/RealEstateProfile";
import React, { Suspense } from "react";
const data = [
  {
    realEstateImage: "images/img_home_orange_100.svg",
    realEstateText: "Real Estate",
  },
  {
    realEstateImage: "images/img_car_red_400_04.svg",
    realEstateText: "Vehicle",
  },
  {
    realEstateImage: "images/img_frame.svg",
    realEstateText: (
      <>
        {" "}
        Spare Parts, <br /> Accessories, <br /> Hardware &Tuning{" "}
      </>
    ),
  },
  {
    realEstateImage: "images/img_television.svg",
    realEstateText: (
      <>
        {" "}
        Second Hand and <br /> new shopping{" "}
      </>
    ),
  },
  {
    realEstateImage: "images/img_television_yellow_600.svg",
    realEstateText: (
      <>
        {" "}
        Construction <br /> Machinery & <br /> Industry{" "}
      </>
    ),
  },
  {
    realEstateImage: "images/img_frame_deep_orange_100_02.svg",
    realEstateText: (
      <>
        {" "}
        Masters and <br /> Services{" "}
      </>
    ),
  },
  {
    realEstateImage: "images/img_frame_blue_gray_800_04.svg",
    realEstateText: "Private Tutors",
  },
  {
    realEstateImage: "images/img_settings.svg",
    realEstateText: "Job Postings",
  },
  { realEstateImage: "images/img_mail.svg", realEstateText: "Animal Kingdom" },
  {
    realEstateImage: "images/img_television_black_900_01.svg",
    realEstateText: (
      <>
        {" "}
        Those Seeking <br /> Help{" "}
      </>
    ),
  },
];
export default function PostanadnowRowOne() {
  return (
    <div className="flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
          {" "}
          <div className="mb-[46px] flex flex-col items-start gap-5">
            {" "}
            <Heading
              size="text7xl"
              as="h1"
              className="text-[25px] font-medium capitalize md:text-[23px] sm:text-[21px]"
            >
              {" "}
              Step by step Select category{" "}
            </Heading>{" "}
            <div className="grid grid-cols-5 gap-5 self-stretch md:grid-cols-3 sm:grid-cols-1">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data.map((d, index) => (
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <RealEstateProfile
                      {...d}
                      key={"postAnAdNow" + index}
                    />{" "}
                  </a>
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
