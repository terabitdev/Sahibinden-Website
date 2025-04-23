import { Helmet } from "react-helmet";
import { Input, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import PostanadnowColumnOne from "./PostanadnowColumnOne";
import PostanadnowRowOne from "./PostanadnowRowOne";
import React from "react";
export default function PostanadnowPage() {
  const [searchBarValue38, setSearchBarValue38] = React.useState("");
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Sahibinden</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="flex w-full flex-col gap-28 bg-white md:gap-[84px] sm:gap-14">
        {" "}
        <header className="mr-10 flex items-center justify-between gap-5 md:mr-0 md:flex-col">
          {" "}
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {" "}
            <Img
              src="images/img_untitled_design.png"
              alt="Untitleddesign"
              className="h-[80px] w-[10%] object-contain md:w-full"
            />{" "}
          </a>{" "}
          <div className="relative mb-3 h-[48px] w-[34%] content-center self-end md:h-auto md:w-full md:px-5">
            {" "}
            <div className="flex flex-1 items-center justify-center sm:flex-col">
              {" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_frame_primary_colors_900.svg"
                  alt="Image"
                  className="h-[24px] sm:w-full"
                />{" "}
              </a>{" "}
              <div className="relative ml-[-6px] flex flex-1 items-start justify-center sm:ml-0 sm:flex-col sm:self-stretch">
                {" "}
                <Heading
                  size="textxs"
                  as="p"
                  className="flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white"
                >
                  {" "}
                  1{" "}
                </Heading>{" "}
                <Heading
                  size="textxs"
                  as="p"
                  className="ml-[46px] mt-1 flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white sm:ml-0"
                >
                  {" "}
                  1{" "}
                </Heading>{" "}
                <Heading
                  size="textxs"
                  as="p"
                  className="ml-12 mt-1 flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white sm:ml-0"
                >
                  {" "}
                  1{" "}
                </Heading>
                <a href="#">
                  {" "}
                  <Img
                    src="images/img_frame_24x24.svg"
                    alt="Image"
                    className="ml-[34px] h-[24px] self-center sm:ml-0 sm:w-full"
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
                  className="ml-10 min-w-[232px] gap-2 self-center rounded-[24px] px-[18px] font-medium uppercase sm:ml-0"
                >
                  {" "}
                  post an ad for free{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute bottom-0 left-[13%] top-0 my-auto flex h-max w-[20%] justify-between gap-5">
              {" "}
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
            </div>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center">
          {" "}
          <PostanadnowRowOne />{" "}
          <div className="container-sm mt-[72px] flex flex-col items-start gap-5 md:px-5">
            {" "}
            <Heading
              size="text7xl"
              as="h2"
              className="text-[25px] font-medium capitalize md:text-[23px] sm:text-[21px]"
            >
              {" "}
              Select Category by searching with keyword{" "}
            </Heading>
            <Input
              size="md"
              name="search"
              placeholder={`Type the content you want to search`}
              value={searchBarValue38}
              onChange={(e) => setSearchBarValue38(e.target.value)}
              suffix={
                searchBarValue38?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue38("")} />
                ) : null
              }
              className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100"
            />{" "}
          </div>{" "}
          <PostanadnowColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
