import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import VehicleMarketValueInfo from "../../components/VehicleMarketValueInfo";
import React from "react";
export default function WhilebuyingvehiclebuyingguideoneColumn() {
  const [searchBarValue227, setSearchBarValue227] = React.useState("");
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
            During Purchase{" "}
          </Heading>{" "}
          <Input
            size="md"
            name="search"
            placeholder={`Type the content you want to search`}
            value={searchBarValue227}
            onChange={(e) => setSearchBarValue227(e.target.value)}
            suffix={
              searchBarValue227?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue227("")} />
              ) : null
            }
            className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <div className="flex flex-col gap-[60px]">
          {" "}
          <VehicleMarketValueInfo />{" "}
          <VehicleMarketValueInfo
            headingText="What are the Tips for Selling a Vehicle?"
            descriptionText="Setting a vehicle depends on many criteria and requires a lot of attention, in order to sell a vehicle quickly, some points need to be taken into consideration. For example, offering your vehicle for sale at a reasonable price is among the most important criteris. Apart hom ins you can gain trust by providing buyers with necessary documents such as vehicle inspection Information, Vehicle selling tactics...."
            moreText="More"
            readsCounterText="214490 Reads"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
