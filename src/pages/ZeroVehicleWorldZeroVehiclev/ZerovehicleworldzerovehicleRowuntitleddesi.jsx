import { Button, Img, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
export default function ZerovehicleworldzerovehicleRowuntitleddesi() {
  const [searchBarValue450, setSearchBarValue450] = React.useState("");
  return (
    <div className="flex items-center gap-[50px] self-stretch md:flex-col">
      {" "}
      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
        {" "}
        <Img
          src="images/img_untitled_design.png"
          alt="Untitleddesign"
          className="h-[80px] w-[10%] object-contain md:w-full"
        />{" "}
      </a>{" "}
      <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch md:px-5">
        {" "}
        <Input
          size="md"
          name="search"
          placeholder={`Type the content you want to search`}
          value={searchBarValue450}
          onChange={(e) => setSearchBarValue450(e.target.value)}
          suffix={
            searchBarValue450?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue450("")} />
            ) : null
          }
          className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
        />{" "}
        <div className="flex w-[40%] items-center justify-between gap-5 self-end md:w-full">
          {" "}
          <a href="#">
            {" "}
            <Img
              src="images/img_frame_primary_colors_900.svg"
              alt="Image"
              className="h-[24px]"
            />{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <Img
              src="images/img_lock.svg"
              alt="Lock"
              className="h-[24px]"
            />{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <Img
              src="images/img_frame_primary_colors_900_24x24.svg"
              alt="Image"
              className="h-[24px]"
            />{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <Img
              src="images/img_frame_24x24.svg"
              alt="Image"
              className="h-[24px]"
            />{" "}
          </a>{" "}
          <Button
            color="primary_colors_900"
            size="xl"
            variant="fill"
            shape="round"
            rightIcon={
              <Img
                src="images/img_arrowleft.svg"
                alt="Arrow Left"
                className="my-0.5 h-[20px] w-[20px] object-contain"
              />
            }
            className="min-w-[232px] gap-2 rounded-[24px] px-[18px] font-medium uppercase"
          >
            {" "}
            post an ad for free{" "}
          </Button>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
