import { Heading, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
export default function RealestatedictionarywhensellingRow() {
  const [searchBarValue432, setSearchBarValue432] = React.useState("");
  return (
    <div className="flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full">
          {" "}
          <div className="flex items-start justify-center gap-[26px] md:flex-col">
            {" "}
            <Heading
              size="heading5xl"
              as="h1"
              className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
            >
              {" "}
              Property Buying Guide{" "}
            </Heading>{" "}
            <div className="relative h-[98px] flex-1 self-center md:w-full md:flex-none md:self-stretch">
              {" "}
              <Heading
                size="text11xl"
                as="h2"
                className="absolute bottom-0 left-0 m-auto text-[60px] font-medium !text-white md:text-[52px] sm:text-[46px]"
              >
                {" "}
                Real Estate Index{" "}
              </Heading>{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue432}
                onChange={(e) => setSearchBarValue432(e.target.value)}
                suffix={
                  searchBarValue432?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue432("")} />
                  ) : null
                }
                className="absolute right-0 top-0 m-auto w-[50%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100"
              />{" "}
            </div>{" "}
          </div>
          <div className="relative z-[1] flex flex-col items-center">
            {" "}
            <Heading
              size="heading4xl"
              as="h3"
              className="text-shadow-ts relative z-[2] rounded-[10px] bg-white py-[26px] pl-[30px] pr-[34px] text-[30px] font-semibold tracking-[12.90px] md:text-[28px] sm:p-5 sm:text-[26px]"
            >
              {" "}
              <span className="text-black-900_01">A&nbsp;</span>{" "}
              <span className="text-primary_colors-900">
                B C D E F G H I K L M N O P Q R S T U V W X Y Z
              </span>{" "}
            </Heading>{" "}
            <Heading
              size="text9xl"
              as="h4"
              className="relative mt-[-84px] text-center text-[30px] font-medium leading-[45px] !text-white md:text-[28px] sm:text-[26px]"
            >
              {" "}
              <>
                {" "}
                Create an index in any location you want to examine Turkiye’s
                most comprehensive <br /> real estate index.{" "}
              </>{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
