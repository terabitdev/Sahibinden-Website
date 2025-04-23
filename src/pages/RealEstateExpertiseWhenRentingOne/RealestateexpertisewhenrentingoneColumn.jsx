import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import RealEstateExpertiseWhenRentingOneRow from "../../components/RealEstateExpertiseWhenRentingOneRow";
import React from "react";
export default function RealestateexpertisewhenrentingoneColumn() {
  const [searchBarValue412, setSearchBarValue412] = React.useState("");
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col gap-10 md:px-5">
        {" "}
        <div className="flex items-center justify-between gap-5 md:flex-col">
          {" "}
          <Heading
            size="heading5xl"
            as="h1"
            className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
          >
            {" "}
            Before Renting{" "}
          </Heading>{" "}
          <Input
            size="md"
            name="search"
            placeholder={`Type the content you want to search`}
            value={searchBarValue412}
            onChange={(e) => setSearchBarValue412(e.target.value)}
            suffix={
              searchBarValue412?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue412("")} />
              ) : null
            }
            className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <div className="flex flex-col gap-[60px]">
          {" "}
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {" "}
            <RealEstateExpertiseWhenRentingOneRow />{" "}
          </a>{" "}
          <RealEstateExpertiseWhenRentingOneRow />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
