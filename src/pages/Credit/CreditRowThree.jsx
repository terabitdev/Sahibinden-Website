import { Img, Button, SelectBox, Input, Text, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function CreditRowThree() {
  const [searchBarValue254, setSearchBarValue254] = React.useState("");
  return (
    <div className="flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center px-14 md:px-5">
        {" "}
        <div className="flex w-full items-start md:flex-col">
          {" "}
          <div className="relative z-[1] mt-[60px] flex flex-1 flex-col gap-4 md:self-stretch">
            {" "}
            <div className="flex flex-col items-start gap-2">
              {" "}
              <Heading
                size="heading8xl"
                as="h1"
                className="w-[76%] text-[64.85px] font-bold leading-[120%] !text-gray-900 md:w-full md:text-[48px]"
              >
                {" "}
                Modern living for everyone{" "}
              </Heading>{" "}
              <Text
                size="text4xl"
                as="p"
                className="w-[76%] text-[21.25px] font-normal leading-[160%] !text-gray-900 md:w-full"
              >
                {" "}
                We provide a complete service for the sale, purchase or rental
                of various items. We have been operating in Spain more than 15
                years.{" "}
              </Text>{" "}
            </div>
            <div className="flex justify-center gap-4 rounded bg-white p-6 shadow-xs md:flex-col sm:p-5">
              {" "}
              <div className="flex flex-1 gap-4 md:self-stretch sm:flex-col">
                {" "}
                <Input
                  size="md"
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue254}
                  onChange={(e) => setSearchBarValue254(e.target.value)}
                  prefix={
                    <Img
                      src="images/img_location_pin.svg"
                      alt="Location Pin"
                      className="h-[20px] w-[24px] object-contain"
                    />
                  }
                  suffix={
                    searchBarValue254?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue254("")}
                        width={24}
                        fillColor="#888f9fff"
                      />
                    ) : null
                  }
                  className="flex-grow gap-4 rounded border border-solid border-blue_gray-400_03 px-6 font-opensans !text-blue_gray-400_03 shadow-bs sm:px-5"
                />{" "}
                <SelectBox
                  size="md"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      alt="Arrow Down"
                      className="h-[20px] w-[24px]"
                    />
                  }
                  name="input_one"
                  placeholder={`Property type`}
                  options={dropDownOptions}
                  className="w-[42%] gap-[26px] rounded border border-solid border-blue_gray-400_03 px-6 font-opensans !text-blue_gray-400_03 shadow-bs sm:w-full sm:px-5"
                />{" "}
              </div>{" "}
              <Button
                color="primary_colors_900"
                size="5xl"
                variant="fill"
                leftIcon={
                  <Img
                    src="images/img_search.svg"
                    alt="Search"
                    className="h-[28px] w-[28px] object-contain"
                  />
                }
                className="min-w-[148px] gap-2 rounded px-[26px] font-opensans font-bold md:px-5"
              >
                {" "}
                Search{" "}
              </Button>{" "}
            </div>{" "}
          </div>
          <div className="relative ml-[-104px] h-[544px] w-[46%] self-center md:ml-0 md:w-full">
            {" "}
            <Img
              src="images/img_container.svg"
              alt="Container"
              className="absolute right-[-1px] top-0 m-auto h-[496px] w-[78%] object-contain"
            />{" "}
            <Img
              src="images/img_image.png"
              alt="Image"
              className="absolute bottom-0.5 right-[9%] m-auto h-[494px] w-[74%] rounded object-contain"
            />{" "}
            <Img
              src="images/img_image_494x538.png"
              alt="Image"
              className="absolute bottom-px left-0 m-auto h-[494px] w-[90%] rounded object-contain"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
