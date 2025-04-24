import { Img, Text, Heading, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
export default function WhilesellingvehiclesalesguideRowTwo() {
  const [searchBarValue317, setSearchBarValue317] = React.useState("");
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-[26px]">
          {" "}
          <div className="flex items-center justify-between gap-5 md:flex-col">
            {" "}
            <Heading
              size="heading5xl"
              as="h1"
              className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
            >
              {" "}
              Vehicle Sales Guide{" "}
            </Heading>{" "}
            <Input
              size="md"
              name="search"
              placeholder={`Type the content you want to search`}
              value={searchBarValue317}
              onChange={(e) => setSearchBarValue317(e.target.value)}
              suffix={
                searchBarValue317?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue317("")} />
                ) : null
              }
              className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
            />{" "}
          </div>{" "}
          <div className="rounded-[10px] bg-white shadow-sm">
            {" "}
            <div className="flex items-center md:flex-col">
              {" "}
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  7 Steps Car Sales Guide{" "}
                </Heading>{" "}
                <Heading
                  size="text3xl"
                  as="h3"
                  className="mt-2.5 text-[20px] font-medium leading-[30px]"
                >
                  {" "}
                  <>
                    {" "}
                    Are you selling your car? You probably have many questions
                    in you mind. <br /> “7 Step Car Selling Guide” will provide
                    you with all the answers you need <br /> and help you with
                    car sales.{" "}
                  </>{" "}
                </Heading>{" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="mt-5 text-[16px] font-medium !text-primary_colors-900"
                  >
                    {" "}
                    More{" "}
                  </Text>{" "}
                </a>{" "}
              </div>{" "}
              <Img
                src="images/img_360526306_11452734.png"
                alt="Image"
                className="h-[238px] w-[40%] object-contain md:w-full"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
