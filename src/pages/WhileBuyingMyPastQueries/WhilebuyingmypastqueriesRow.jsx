import { Heading, Img, Input, Button } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
export default function WhilebuyingmypastqueriesRow() {
  const [searchBarValue210, setSearchBarValue210] = React.useState("");
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-[50px]">
          {" "}
          <div className="flex flex-col gap-[30px]">
            {" "}
            <div className="flex items-center gap-[31px]">
              {" "}
              <Heading
                size="text9xl"
                as="h1"
                className="text-[30px] font-medium md:text-[28px] sm:text-[26px]"
              >
                {" "}
                My Past Queries{" "}
              </Heading>{" "}
              <Button
                color="primary_colors_900"
                size="5xl"
                variant="fill"
                className="min-w-[298px] rounded px-[34px] font-inter font-bold !text-indigo-50_02 sm:px-5"
              >
                {" "}
                New Vehicle Damage Inquiry{" "}
              </Button>{" "}
            </div>{" "}
            <div className="flex items-center gap-[30px] md:flex-col">
              {" "}
              <Input
                size="lg"
                shape="round"
                name="duration"
                placeholder={`The Results of your queries within the last 90 days are listed.`}
                className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-blue_gray-400_03"
              />{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue210}
                onChange={(e) => setSearchBarValue210(e.target.value)}
                suffix={
                  searchBarValue210?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue210("")} />
                  ) : null
                }
                className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col items-center justify-center rounded-[10px] bg-white px-14 py-[74px] shadow-xs md:p-5">
            {" "}
            <div className="flex flex-col items-center gap-5">
              {" "}
              <Img
                src="images/img_video_camera.svg"
                alt="Videocamera"
                className="h-[100px] w-[22%] object-contain"
              />{" "}
              <Heading
                size="text7xl"
                as="h2"
                className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
              >
                {" "}
                You haven’t made any queries yet.{" "}
              </Heading>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
