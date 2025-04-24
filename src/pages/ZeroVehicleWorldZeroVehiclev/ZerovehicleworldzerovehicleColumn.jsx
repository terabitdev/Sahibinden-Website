import { Button, Img, Heading } from "../../components";
import React from "react";
export default function ZerovehicleworldzerovehicleColumn() {
  return (
    <div className="mt-[50px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-7 md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h6"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          The 2024 new vehicle Launch calendar is listed for “all brands”{" "}
        </Heading>{" "}
        <div className="flex gap-[50px] self-stretch md:flex-col">
          {" "}
          <Button
            color="primary_colors_900"
            size="7xl"
            variant="fill"
            shape="circle"
            className="w-[60px] rounded-[30px] px-3.5"
          >
            {" "}
            <Img src="images/img_frame_white_60x60.svg" />{" "}
          </Button>{" "}
          <div className="flex flex-1 gap-5 md:flex-col md:self-stretch">
            {" "}
            <Button
              color="primary_colors_900"
              size="6xl"
              variant="fill"
              className="w-full rounded-[10px] px-[34px] font-medium sm:px-5"
            >
              {" "}
              January{" "}
            </Button>{" "}
            <Button
              color="primary_colors_900"
              size="6xl"
              variant="fill"
              className="w-full rounded-[10px] px-[34px] font-medium sm:px-5"
            >
              {" "}
              February{" "}
            </Button>{" "}
            <Button
              color="primary_colors_900"
              size="6xl"
              variant="fill"
              className="w-full rounded-[10px] px-[34px] font-medium sm:px-5"
            >
              {" "}
              March{" "}
            </Button>{" "}
          </div>{" "}
          <Button
            color="primary_colors_900"
            size="7xl"
            variant="fill"
            shape="circle"
            className="w-[60px] rounded-[30px] px-3.5"
          >
            {" "}
            <Img src="images/img_frame_60x60.svg" />{" "}
          </Button>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
