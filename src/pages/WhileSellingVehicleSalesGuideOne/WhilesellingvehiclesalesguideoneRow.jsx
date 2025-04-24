import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import VehicleMarketValueInfo from "../../components/VehicleMarketValueInfo";
import React from "react";
export default function WhilesellingvehiclesalesguideoneRow() {
  const [searchBarValue323, setSearchBarValue323] = React.useState("");
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-10">
          {" "}
          <div className="flex items-center justify-between gap-5 md:flex-col">
            {" "}
            <Heading
              size="heading5xl"
              as="h1"
              className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
            >
              {" "}
              Pre Sale{" "}
            </Heading>{" "}
            <Input
              size="md"
              name="search"
              placeholder={`Type the content you want to search`}
              value={searchBarValue323}
              onChange={(e) => setSearchBarValue323(e.target.value)}
              suffix={
                searchBarValue323?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue323("")} />
                ) : null
              }
              className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
            />{" "}
          </div>{" "}
          <div className="flex flex-col gap-[60px]">
            {" "}
            <VehicleMarketValueInfo
              headingText="How Can I Find Out the Market Value of the Vehicle I Will Sell?"
              descriptionText="There are some simple steps you need to follow to find out the price of your car. With these applications, you can sell your car at its real value and get the amount you expect. You need to answer some questions to find out the value of your car. If you are the first user of your car or in other words, if you bought a brand new car, you know if there is any damage......."
              moreText="More"
              readsCounterText="214490 Reads"
            />{" "}
            <VehicleMarketValueInfo
              headingText="What are the Tips for Selling a Vehicle?"
              descriptionText="Setting a vehicle depends on many criteria and requires a lot of attention, in order to sell a vehicle quickly, some points need to be taken into consideration. For example, offering your vehicle for sale at a reasonable price is among the most important criteris. Apart hom ins you can gain trust by providing buyers with necessary documents such as vehicle inspection Information, Vehicle selling tactics...."
              moreText="More"
              readsCounterText="214490 Reads"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
