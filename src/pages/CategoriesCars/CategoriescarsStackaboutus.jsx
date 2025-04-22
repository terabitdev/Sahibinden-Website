import { Button, Text, Heading, Img } from "../../components";
import React from "react";
export default function CategoriescarsStackaboutus() {
  return (
    <div className="relative mt-[162px] h-[600px] px-[156px] md:px-5">
      {" "}
      <Img
        src="images/img_rectangle_2.png"
        alt="Image"
        className="absolute bottom-0 left-[11%] top-0 my-auto h-[600px] w-[90%] rounded-[14px] object-contain"
      />{" "}
      <div className="absolute bottom-[7%] right-[11%] m-auto flex w-[58%] flex-col items-start gap-5 bg-primary_colors-900 px-10 py-3.5 sm:px-5">
        {" "}
        <Heading
          size="heading6xl"
          as="h3"
          className="text-[40px] font-black uppercase !text-white md:text-[38px] sm:text-[36px]"
        >
          {" "}
          About us{" "}
        </Heading>{" "}
        <Text
          as="p"
          className="w-full text-[16px] font-normal leading-6 !text-white"
        >
          {" "}
          Vector team main thumbnail vertical scrolling polygon align create
          arrange. Align link editor fill ipsum figjam. Device italic mask clip
          export selection figjam.{" "}
        </Text>{" "}
        <Button
          size="xl"
          shape="round"
          className="min-w-[188px] rounded-[24px] !border px-[17px] font-medium uppercase"
        >
          {" "}
          See all properties{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
