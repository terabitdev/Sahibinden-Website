import { Input, Text, Button } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
export default function PropertybuyingguideColumn() {
  const [searchBarValue390, setSearchBarValue390] = React.useState("");
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-[62px] md:px-5 sm:gap-[31px]">
        {" "}
        <div className="ml-[448px] flex w-[22%] flex-col items-center rounded-lg md:ml-0 md:w-full">
          {" "}
          <div className="flex justify-center self-stretch bg-white p-3">
            {" "}
            <Text as="p" className="!font-montserrat text-[16px] font-normal">
              {" "}
              Real Estate Expertise{" "}
            </Text>{" "}
          </div>{" "}
          <Input
            size="xs"
            shape="square"
            name="itemtwo_one"
            placeholder={`Real Estate Index`}
            className="self-stretch px-3.5 font-montserrat !text-black-0"
          />{" "}
          <Text
            as="p"
            className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
          >
            {" "}
            Credit{" "}
          </Text>{" "}
          <Button
            size="lg"
            variant="fill"
            shape="square"
            className="self-stretch pl-4 pr-2 font-montserrat !text-primary_colors-900"
          >
            {" "}
            Property Buying Guide{" "}
          </Button>{" "}
          <div className="flex justify-center self-stretch bg-white p-3">
            {" "}
            <Text as="p" className="!font-montserrat text-[16px] font-normal">
              {" "}
              Real Estate Dictionary{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
        <Input
          size="md"
          name="search"
          placeholder={`Type the content you want to search`}
          value={searchBarValue390}
          onChange={(e) => setSearchBarValue390(e.target.value)}
          suffix={
            searchBarValue390?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue390("")} />
            ) : null
          }
          className="w-[34%] self-end rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100"
        />{" "}
      </div>{" "}
    </div>
  );
}
