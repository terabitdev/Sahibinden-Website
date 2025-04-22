import { Button, Heading, Img } from "../../components";
import React from "react";
export default function CartRowTwo() {
  return (
    <div className="mt-[154px] flex justify-center">
      {" "}
      <div className="container-sm flex justify-center px-14 md:px-5">
        {" "}
        <div className="flex w-[82%] flex-col items-center justify-center gap-5 rounded-[10px] bg-white px-14 py-[140px] shadow-xs md:w-full md:p-5">
          {" "}
          <Img
            src="images/img_frame_primary_colors_900.svg"
            alt="Image"
            className="h-[200px] w-[22%] object-contain"
          />{" "}
          <Heading
            size="text3xl"
            as="h2"
            className="text-[20px] font-medium capitalize"
          >
            {" "}
            No Items found in your cart{" "}
          </Heading>{" "}
          <Button
            color="primary_colors_900"
            size="xl"
            variant="fill"
            shape="round"
            className="min-w-[174px] rounded-[24px] px-[34px] font-medium uppercase sm:px-5"
          >
            {" "}
            Post an ad{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
