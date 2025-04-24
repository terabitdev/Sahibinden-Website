import { Heading, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
export default function WhilesellingautodictionaryColumn() {
  const [searchBarValue320, setSearchBarValue320] = React.useState("");
  return (
    <div className="mt-[58px] flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col items-center gap-10 md:px-5">
        {" "}
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          {" "}
          <Heading
            size="heading5xl"
            as="h1"
            className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
          >
            {" "}
            Auto Dictionary{" "}
          </Heading>{" "}
          <Input
            size="md"
            name="search"
            placeholder={`Type the content you want to search`}
            value={searchBarValue320}
            onChange={(e) => setSearchBarValue320(e.target.value)}
            suffix={
              searchBarValue320?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue320("")} />
              ) : null
            }
            className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <Heading
          size="heading4xl"
          as="h2"
          className="text-shadow-ts rounded-[10px] bg-white py-[26px] pl-[30px] pr-[34px] text-[30px] font-semibold tracking-[12.90px] md:text-[28px] sm:p-5 sm:text-[26px]"
        >
          {" "}
          <span className="text-black-900_01">A&nbsp;</span>{" "}
          <span className="text-primary_colors-900">
            B C D E F G H I K L M N O P Q R S T U V W X Y Z
          </span>{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
